import { TailwindIndicator } from "@/components/tailwind-indicator"

import "./globals.css"

import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import SiteFooter from "@/components/layout/site-footer"
import SiteHeader from "@/components/layout/site-header"
import { ThemeProvider } from "@/components/providers/theme-provider"

export const metadata: Metadata = {
  title: "Canvas",
  description: "A starter for Next.js with Tailwind CSS and TypeScript",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
