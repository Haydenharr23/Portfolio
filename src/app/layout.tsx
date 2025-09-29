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
  title: 'Hayden Portfolio',
  description: 'Web Developer | Software Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${exo.variable} ${lato.variable} font-lato`}>
        {children}
      </body>
    </html>
  )
}

