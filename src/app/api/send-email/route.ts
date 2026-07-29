import { NextRequest, NextResponse } from 'next/server'

interface ContactFormPayload {
  name?: string
  email?: string
  phone?: string
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    const { name, email, phone, message }: ContactFormPayload = await request.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'haydenharr@gmail.com'
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'

    const phoneLine = phone?.trim() ? `Phone: ${phone.trim()}` : 'Phone: Not provided'

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: contactEmail,
        reply_to: email.trim(),
        subject: `New contact form submission from ${name.trim()}`,
        text: [
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          phoneLine,
          '',
          'Message:',
          message.trim(),
        ].join('\n'),
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Phone:</strong> ${phone?.trim() || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.trim().replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    const resendBody = await resendResponse.json().catch(() => null)

    if (!resendResponse.ok) {
      console.error('Resend API error:', resendResponse.status, resendBody)
      return NextResponse.json(
        { error: resendBody?.error || 'Failed to send email' },
        { status: resendResponse.status }
      )
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
