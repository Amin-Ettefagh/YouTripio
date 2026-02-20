"use client"

import Link from "next/link"

import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

type DashboardHeaderProps = {
  title: string
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <header className="w-full border-b border-white/5 bg-[color:var(--color-bg)]/80 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold text-[color:var(--color-text)]">
          YouTripio
        </Link>
        <span className="text-sm font-medium text-[color:var(--color-muted)] sm:text-base">{title}</span>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="hidden rounded-full border border-white/15 px-3 py-2 text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-text)] sm:inline-flex"
          >
            {t.nav.dashboard}
          </Link>
        </div>
      </div>
    </header>
  )
}
