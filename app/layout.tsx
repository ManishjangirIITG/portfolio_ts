import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Manish Jangir - Portfolio",
  description: "Aspiring SDE | Data Science Enthusiast | IIT Guwahati",
  generator: "v0.app",
  keywords: ["Manish Jangir", "Software Engineer", "Data Science", "IIT Guwahati", "Portfolio"],
  authors: [{ name: "Manish Jangir" }],
  openGraph: {
    title: "Manish Jangir - Portfolio",
    description: "Aspiring SDE | Data Science Enthusiast | IIT Guwahati",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-teal-500/10" />
          <div className="absolute -top-1/3 left-1/2 h-[70vh] w-[70vw] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute -bottom-1/3 right-1/2 h-[70vh] w-[70vw] translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
        </div>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
