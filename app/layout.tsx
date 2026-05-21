import { Space_Grotesk } from "next/font/google"

const space_grotesk = Space_Grotesk ({
    subsets: ["latin"],
    variable: "--font-space_grotesk",
    weight:"500"
})

import "./globals.css"



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${space_grotesk.variable} dark`}>
        <head>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#000000" />
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <title></title>
        </head>
        <body className="font-sans">
        {children}
        </body>
        </html>
    );
}
