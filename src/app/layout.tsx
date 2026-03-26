import type { Metadata } from 'next'
import { Exo, Lato } from 'next/font/google'
import './globals.css'

const exo = Exo({ 
  subsets: ['latin'],
  variable: '--font-exo',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Hayden Harris | Frontend & Full-Stack Developer',
  description:
    'Frontend and full-stack web developer studying Graphic Information Technology at Arizona State University. Experience with React, Next.js, WordPress, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exo.variable} ${lato.variable} font-lato`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

