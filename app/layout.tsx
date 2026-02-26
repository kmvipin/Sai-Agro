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
  title: 'Sai Agro | Premium Turmeric Exporter for Global Markets',
  description:
    'Sai Agro is a specialized exporter and wholesaler of premium turmeric products including turmeric fingers, turmeric powder, and turmeric bulbs. Trusted by global buyers for export-grade quality, purity, and consistent bulk supply.',
  keywords: [
    'turmeric exporter',
    'turmeric fingers export',
    'turmeric powder wholesale',
    'turmeric bulbs supplier',
    'bulk turmeric India',
    'haldi exporter',
    'Sai Agro turmeric',
  ],
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
