import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import AccentProvider from '@/components/AccentProvider'
import { getMetadataBase } from '@/lib/siteUrl'

const exo = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-exo',
})

const lato = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Hayden Harris | Frontend & Full-Stack Developer',
  description:
    'Frontend and full-stack web developer studying Graphic Information Technology at Arizona State University. Experience with React, Next.js, WordPress, and more.',
  metadataBase: getMetadataBase(),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Hayden Harris | Frontend & Full-Stack Developer',
    description:
      'Frontend and full-stack web developer studying Graphic Information Technology at Arizona State University. Experience with React, Next.js, WordPress, and more.',
    siteName: 'Hayden Harris',
    images: [
      {
        url: '/images/portfoliopic.png',
        width: 1200,
        height: 630,
        alt: 'Hayden Harris headshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hayden Harris | Frontend & Full-Stack Developer',
    description:
      'Frontend and full-stack web developer studying Graphic Information Technology at Arizona State University. Experience with React, Next.js, WordPress, and more.',
    images: ['/images/portfoliopic.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exo.variable} ${lato.variable} font-lato`} suppressHydrationWarning>
        <AccentProvider>{children}</AccentProvider>
      </body>
    </html>
  )
}

