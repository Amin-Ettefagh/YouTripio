import type { Metadata } from "next"
import Script from "next/script"
import { Manrope, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "YouTripio — Travel Cargo & Companion Network",
  description:
    "YouTripio connects travelers with trusted parcel delivery and companion requests, turning unused capacity into shared journeys.",
}

const themeScript = `(() => {
  try {
    const stored = localStorage.getItem("youtripio-theme");
    const theme = stored || "dark";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  } catch (_) {}
})();`

const languageScript = `(() => {
  try {
    const stored = localStorage.getItem("youtripio-language");
    const lang = stored || "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  } catch (_) {}
})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <Script
          id="language-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: languageScript }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} min-h-screen antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

