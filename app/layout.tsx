import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'SpiceRoot Exports | Premium Turmeric & Spices for Global Markets',
  description:
    'Leading exporter of premium turmeric, red chilli, coriander and spices. Trusted by global buyers for quality, purity, and reliability. Request a bulk quote today.',
  keywords: ['turmeric export', 'spice supplier', 'bulk spices', 'Indian spices', 'wholesale turmeric'],
}

export const viewport: Viewport = {
  themeColor: '#1E3A2B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
