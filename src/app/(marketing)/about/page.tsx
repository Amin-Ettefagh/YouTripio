"use client"

import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <section className="section-shell py-20">
      <div className="glass mx-auto max-w-3xl rounded-3xl p-10">
        <h1 className="text-3xl font-semibold text-[color:var(--color-text)]">{t.about.title}</h1>
        <p className="mt-6 text-sm text-[color:var(--color-muted)]">{t.about.p1}</p>
        <p className="mt-4 text-sm text-[color:var(--color-muted)]">{t.about.p2}</p>
      </div>
    </section>
  )
}
