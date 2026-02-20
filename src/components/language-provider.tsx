"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Language = "en" | "fa"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggle: () => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
const STORAGE_KEY = "youtripio-language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored === "en" || stored === "fa") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(stored)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.lang = language
    root.dir = language === "fa" ? "rtl" : "ltr"
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggle: () => setLanguage((prev) => (prev === "en" ? "fa" : "en")),
      mounted,
    }),
    [language, mounted]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
