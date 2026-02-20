"use client"

import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { language, toggle, mounted } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text)] transition"
    >
      <span suppressHydrationWarning>{mounted ? (language === "en" ? "EN" : "FA") : "LANG"}</span>
    </button>
  )
}
