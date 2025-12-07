import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eros - Adult App Design',
  description: 'Curated connections for the exceptional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

