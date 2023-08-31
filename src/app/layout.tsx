import '../../globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import AuthProvider from './Auth'

export const metadata: Metadata = {
  title: 'Codein',
  description: 'Generated by create next app',
}

const raleway = Raleway({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthProvider>
  )
}
