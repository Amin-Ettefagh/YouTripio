"use client"

import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

export default function ServicesPage() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <section className="section-shell py-20">
      <div className="glass rounded-3xl p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">{t.services.badge}</p>
        <h1 className="mt-3 text-3xl font-semibold text-[color:var(--color-text)]">{t.services.title}</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {t.services.items.map((service) => (
            <div key={service.title} className="rounded-2xl border border-white/10 p-6">
              <h2 className="text-lg font-semibold text-[color:var(--color-text)]">{service.title}</h2>
              <p className="mt-3 text-sm text-[color:var(--color-muted)]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
