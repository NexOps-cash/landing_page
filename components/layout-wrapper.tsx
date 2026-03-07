'use client'

import GreenBackground from './green-background'
import Header from './header'
import { ReactNode } from 'react'

export function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GreenBackground />
      </div>
      <div className="relative z-10 pointer-events-auto min-h-screen flex flex-col pt-20">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </>
  )
}
