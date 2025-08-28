// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomeCook ASMR',
  description: 'ASMR Cooking by a Bangladeshi 🇧🇩 girl 🧕',
  openGraph: {
    title: 'HomeCook ASMR',
    description: 'ASMR Cooking by a Bangladeshi 🇧🇩 girl 🧕',
    url: 'https://www.homecookasmr.com',
    siteName: 'HomeCook ASMR',
    images: [
      {
        url: 'https://www.homecookasmr.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'HomeCookASMR Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HomeCook ASMR',
    description: 'ASMR Cooking by a Bangladeshi 🇧🇩 girl 🧕',
    images: ['https://www.homecookasmr.com/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Facebook Domain Verification */}
        <meta
          name="facebook-domain-verification"
          content="lh814ap6qsivnkiaimif4tjk5jk7v9"
        />

        {/* ✅ Facebook App ID */}
        <meta property="fb:app_id" content="1276244177477800" />

        {/* Extra safety: Canonical URL */}
        <link rel="canonical" href="https://www.homecookasmr.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
