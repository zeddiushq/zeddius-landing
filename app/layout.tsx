import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const calSans = localFont({
  src: [
    { path: "./fonts/CalSansVF.woff2", style: "normal", weight: "400 700" },
  ],
  variable: "--font-sans",
})

const paperMono = localFont({
  src: "./fonts/PaperMono-VF.woff2",
  variable: "--font-mono",
  weight: "100 800",
})

export const metadata: Metadata = {
  title: "Zeddius",
  description: "Zeddius is under construction.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", calSans.variable, paperMono.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
