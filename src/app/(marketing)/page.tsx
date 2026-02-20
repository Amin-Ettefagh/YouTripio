"use client"

import Image from "next/image"
import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

export default function HomePage() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.35),_transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute left-0 top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.25),_transparent_70%)] blur-2xl" />

      <section className="section-shell pb-20 pt-20 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
              {t.home.badge}
            </p>
            <h1 className="mt-6 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl lg:text-6xl">
              {t.home.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base text-[color:var(--color-muted)] sm:text-lg">
              {t.home.subtext}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[color:var(--color-accent-strong)]"
              >
                {t.home.ctaDashboard}
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[color:var(--color-text)] transition"
              >
                {t.home.ctaServices}
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {t.home.stats.map((item) => (
                <div key={item.label} className="glass rounded-2xl p-4">
                  <p className="text-2xl font-semibold text-[color:var(--color-text)]">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-40 w-40 rounded-full border border-white/10 bg-white/5 lg:block" />
            <div className="glass relative z-10 rounded-3xl p-4">
              <Image
                src="/images/hero.png"
                alt="YouTripio delivery flow"
                width={560}
                height={520}
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {t.home.features.map((feature) => (
            <div key={feature.title} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[color:var(--color-text)]">{feature.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--color-muted)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="glass rounded-3xl p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--color-text)]">{t.home.chooseTitle}</h2>
              <p className="mt-4 text-[color:var(--color-muted)]">{t.home.chooseText}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.home.chooseCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="rounded-2xl border border-white/10 p-4 text-[color:var(--color-text)] transition"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{card.label}</p>
                  <p className="mt-2 text-lg font-semibold">{card.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-semibold text-[color:var(--color-text)]">{t.home.trustTitle}</h2>
            <p className="mt-4 text-[color:var(--color-muted)]">{t.home.trustText}</p>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--color-muted)]">
              {t.home.trustList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="glass flex flex-col justify-between rounded-3xl p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                {t.home.dashboardBadge}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[color:var(--color-text)]">{t.home.dashboardTitle}</h3>
              <p className="mt-3 text-sm text-[color:var(--color-muted)]">{t.home.dashboardText}</p>
            </div>
            <Link
              href="/dashboard"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-[color:var(--color-text)] transition"
            >
              {t.home.dashboardCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
