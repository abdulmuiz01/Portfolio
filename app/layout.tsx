import { Space_Grotesk } from "next/font/google"
import type { Viewport } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeToggle from "@/components/ThemeToggle"

const space_grotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space_grotesk",
    weight: "500"
})

import "./globals.css"

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    height: "device-height"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={space_grotesk.variable} suppressHydrationWarning>
        <body className="font-sans">
        <ThemeProvider defaultTheme="dark">
            <ThemeToggle />
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
