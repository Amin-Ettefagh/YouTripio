"use client"

import { useLanguage } from "@/components/language-provider"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, toggle, mounted } = useTheme()
  const { language } = useLanguage()
  const label = mounted
    ? theme === "dark"
      ? language === "fa"
        ? "مود تاریک"
        : "Dark mode"
      : language === "fa"
        ? "مود روشن"
        : "Light mode"
    : "Theme"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-[color:var(--color-text)] transition"
    >
      <span className="relative h-5 w-5">
        <span
          className={`absolute inset-0 transition ${
            mounted && theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        </span>
        <span
          className={`absolute inset-0 transition ${
            mounted && theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </span>
      </span>
      <span className="hidden sm:inline" suppressHydrationWarning>
        {label}
      </span>
    </button>
  )
}
