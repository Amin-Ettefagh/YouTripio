"use client"

import Link from "next/link"
import { useState } from "react"

import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

const navItems = [
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
  { key: "terms", href: "/terms" },
] as const

type SiteHeaderProps = {
  onSignIn?: () => void
  onSignUp?: () => void
}

export function SiteHeader({ onSignIn, onSignUp }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[color:var(--color-bg)]/80 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-[color:var(--color-text)]">
          YouTripio
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[color:var(--color-muted)] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[color:var(--color-text)]">
              {t.nav[item.key]}
            </Link>
          ))}
          <Link href="/dashboard" className="hover:text-[color:var(--color-text)]">
            {t.nav.dashboard}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          {onSignIn ? (
            <button
              type="button"
              onClick={onSignIn}
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-[color:var(--color-text)] transition"
            >
              {t.nav.signIn}
            </button>
          ) : (
            <Link
              href="/auth?mode=signin"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-[color:var(--color-text)] transition"
            >
              {t.nav.signIn}
            </Link>
          )}
          {onSignUp ? (
            <button
              type="button"
              onClick={onSignUp}
              className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-[color:var(--color-accent-strong)]"
            >
              {t.nav.signUp}
            </button>
          ) : (
            <Link
              href="/auth?mode=signup"
              className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-[color:var(--color-accent-strong)]"
            >
              {t.nav.signUp}
            </Link>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-[color:var(--color-muted)] lg:hidden"
          aria-label="Toggle menu"
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
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {open ? (
        <div className="section-shell pb-6 lg:hidden">
          <div className="glass flex flex-col gap-3 rounded-2xl p-4 text-[color:var(--color-text)]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {t.nav[item.key]}
              </Link>
            ))}
            <Link href="/dashboard" onClick={() => setOpen(false)}>
              {t.nav.dashboard}
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <LanguageToggle />
              <ThemeToggle />
              {onSignIn ? (
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    onSignIn()
                  }}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-[color:var(--color-text)]"
                >
                  {t.nav.signIn}
                </button>
              ) : (
                <Link
                  href="/auth?mode=signin"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-[color:var(--color-text)]"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.signIn}
                </Link>
              )}
              {onSignUp ? (
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    onSignUp()
                  }}
                  className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-900"
                >
                  {t.nav.signUp}
                </button>
              ) : (
                <Link
                  href="/auth?mode=signup"
                  className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-900"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.signUp}
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
