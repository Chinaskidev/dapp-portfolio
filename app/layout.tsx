import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Científico de Datos & Desarrollador",
  description: "Portfolio profesional de ciencia de datos, machine learning y desarrollo de software",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const d = document.documentElement; const saved = localStorage.getItem('theme'); const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; d.classList.toggle('dark', saved ? saved === 'dark' : prefersDark); } catch (e) {} })();`,
          }}
        />
      </head>
      <body className={`${_geist.className} ${_geistMono.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
