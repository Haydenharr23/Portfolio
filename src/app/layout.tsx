import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import AccentProvider from '@/components/AccentProvider'

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

