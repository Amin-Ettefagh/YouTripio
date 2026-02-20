"use client"

import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

export default function TermsPage() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <section className="section-shell py-20">
      <div className="glass mx-auto max-w-4xl rounded-3xl p-10">
        <h1 className="text-3xl font-semibold text-[color:var(--color-text)]">{t.terms.title}</h1>
        <p className="mt-4 text-sm text-[color:var(--color-muted)]">{t.terms.intro}</p>
        <div className="mt-8 grid gap-6 text-sm text-[color:var(--color-muted)]">
          {t.terms.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-[color:var(--color-text)]">{section.title}</h2>
              <p className="mt-2">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
