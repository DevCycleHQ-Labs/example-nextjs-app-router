import type { Metadata } from "next"
import "./App.css"

import { DevCycleClientsideProvider } from "@devcycle/nextjs-sdk"
import { getClientContext } from "./devcycle"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "DevCycle Next.js Example App",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <body>
          <DevCycleClientsideProvider context={getClientContext()}>
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            {children}
          </DevCycleClientsideProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
