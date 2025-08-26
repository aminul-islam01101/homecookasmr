// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomeCookASMR',
  description: 'ASMR Cooking - Delicious Bangladeshi Recipes & ASMR Food Videos',
  openGraph: {
    title: 'HomeCookASMR',
    description: 'Delicious ASMR cooking recipes, Bangladeshi food & more!',
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
    description: 'Delicious ASMR cooking recipes, Bangladeshi food & more!',
    images: ['https://www.homecookasmr.com/og-image.jpg'], // একই ছবি Twitter এর জন্য
  },
  other: {
    'facebook-domain-verification': 'lh814ap6qsivnkiaimif4tjk5jk7v9',
    'fb:app_id': '1276244177477800',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
