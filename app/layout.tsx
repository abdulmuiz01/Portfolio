import { Space_Grotesk } from "next/font/google"

const space_grotesk = Space_Grotesk ({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
  weight:"500"
})

import "./globals.css"
// import { cn } from "@workspace/ui/lib/utils";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={`${space_grotesk.variable} dark`}>
      <body className="font-sans">
      {children}
      </body>
      </html>
  );
}
