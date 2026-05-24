import {Space_Grotesk} from "next/font/google"
import type {Viewport} from "next"
import {ThemeProvider} from "@/components/theme-provider"
import {LanguageProvider} from "@/lib/i18n"
import ThemeToggle from "@/components/ThemeToggle"
import LangToggle from "@/components/LangToggle"

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

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="it" className={space_grotesk.variable} suppressHydrationWarning>
        <body className="font-sans">
        <ThemeProvider defaultTheme="dark" enableSystem={false}>
            <LanguageProvider>
                <ThemeToggle/>
                <LangToggle/>
                {children}
            </LanguageProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
