// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomeCookASMR',
  description: 'ASMR Cooking by a Bangladeshi girl ',
  openGraph: {
    title: 'HomeCookASMR',
    description: 'ASMR Cooking by a Bangladeshi girl ',
    url: 'https://www.homecookasmr.com',
    siteName: 'HomeCookASMR',
    images: [
      {
        url: 'https://www.homecookasmr.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'HomeCookASMR - ASMR Cooking',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HomeCookASMR',
    description: 'ASMR Cooking by a Bangladeshi girl',
    images: ['https://www.homecookasmr.com/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Facebook Domain Verification */}
        <meta
          name="facebook-domain-verification"
          content="lh814ap6qsivnkiaimif4tjk5jk7v9"
        />
        {/* Correct way to add fb:app_id */}
        <meta property="fb:app_id" content="1276244177477800" />
      </head>
      <body>{children}</body>
    </html>
  )
}
