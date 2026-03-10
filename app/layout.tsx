import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { CSPostHogProvider } from '@/components/posthog-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NexOps – Deterministic Contract Infrastructure for Bitcoin Cash',
  description: 'A security-first platform for creating and distributing audited CashScript contracts on Bitcoin Cash.',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased dark relative">
        <CSPostHogProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </CSPostHogProvider>
        <Analytics />
      </body>
    </html>
  )
}
