"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

export default function SoonPage() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <section className="section-shell py-24">
      <div className="glass mx-auto max-w-lg rounded-3xl p-10 text-center">
        <h1 className="text-3xl font-semibold text-[color:var(--color-text)]">{t.soon.title}</h1>
        <p className="mt-4 text-sm text-[color:var(--color-muted)]">{t.soon.text}</p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-[color:var(--color-text)]"
        >
          {t.soon.cta}
        </Link>
      </div>
    </section>
  )
}
