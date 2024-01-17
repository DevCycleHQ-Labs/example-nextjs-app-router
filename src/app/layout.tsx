import type { Metadata } from 'next'
import './App.css'

import { DevCycleClientsideProvider } from '@devcycle/nextjs-sdk'
import { getClientContext } from './devcycle'

export const metadata: Metadata = {
  title: 'DevCycle Next.js Example App'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body>
        <DevCycleClientsideProvider
            context={getClientContext()}
        >
            {children}
        </DevCycleClientsideProvider>
      </body>
    </html>
  )
}
