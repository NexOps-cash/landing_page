import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { CSPostHogProvider } from '@/components/posthog-provider'
import './globals.css'


export const metadata: Metadata = {
  title: 'NexOps – Deterministic Contract Infrastructure for Bitcoin Cash',
  description: 'AI-assisted smart contract generation, auditing, and deployment for Bitcoin Cash. Used by 3 external teams and 20+ developers. Built by Nishanth B.',
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
