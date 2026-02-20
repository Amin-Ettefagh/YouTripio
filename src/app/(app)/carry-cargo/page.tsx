"use client"

import Link from "next/link"
import { useState } from "react"

import { DashboardHeader } from "@/components/dashboard-header"
import { LoadingOverlay } from "@/components/ui/loading-overlay"
import { Toast } from "@/components/ui/toast"
import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"
import { parcelOffers } from "@/data/sample-data"

export default function CarryCargoListPage() {
  const { language } = useLanguage()
  const t = copy[language]

  const [form, setForm] = useState({ originCountry: "", originCity: "", destinationCountry: "", destinationCity: "" })
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(false)

  function onSearch() {
    if (!form.originCountry || !form.originCity || !form.destinationCountry || !form.destinationCity) {
      setToast(true)
      setTimeout(() => setToast(false), 2500)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowResults(true)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <DashboardHeader title={t.carryCargo.title} />
      <LoadingOverlay show={loading} label={t.common.loading} />
      <Toast show={toast} message={t.common.toastRequired} variant="error" />

      <main className="section-shell py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="glass w-full max-w-sm rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-[color:var(--color-text)]">{t.carryCargo.heading}</h2>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">{t.carryCargo.text}</p>

            <div className="mt-6 space-y-4 text-sm text-[color:var(--color-muted)]">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.common.origin}</label>
                <input
                  value={form.originCountry}
                  onChange={(event) => setForm({ ...form, originCountry: event.target.value })}
                  placeholder={language === "fa" ? "کشور" : "Country"}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2"
                />
                <input
                  value={form.originCity}
                  onChange={(event) => setForm({ ...form, originCity: event.target.value })}
                  placeholder={language === "fa" ? "شهر" : "City"}
                  className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.common.destination}</label>
                <input
                  value={form.destinationCountry}
                  onChange={(event) => setForm({ ...form, destinationCountry: event.target.value })}
                  placeholder={language === "fa" ? "کشور" : "Country"}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2"
                />
                <input
                  value={form.destinationCity}
                  onChange={(event) => setForm({ ...form, destinationCity: event.target.value })}
                  placeholder={language === "fa" ? "شهر" : "City"}
                  className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2"
                />
              </div>
              <button
                type="button"
                onClick={onSearch}
                className="w-full rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-900"
              >
                {t.common.search}
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[color:var(--color-text)]">{t.common.available}</h3>
              <Link
                href="/carry-cargo/new"
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]"
              >
                {t.carryCargo.advertise}
              </Link>
            </div>

            {showResults ? (
              <div className="mt-6 grid gap-4">
                {parcelOffers.map((offer) => (
                  <div key={offer.id} className="glass rounded-2xl p-5 text-sm text-[color:var(--color-muted)]">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-[color:var(--color-text)]">{offer.name}</p>
                        <p>{t.common.origin}: {offer.origin}</p>
                        <p>{t.common.destination}: {offer.destination}</p>
                        <p>{t.common.departureTime}: {offer.departure}</p>
                      </div>
                      <div>
                        <p>{t.common.dimension}: {offer.dimensions}</p>
                        <p>{t.common.weight}: {offer.weight}</p>
                        <p>{t.common.vehicleType}: {offer.vehicle}</p>
                      </div>
                    </div>
                    <ul className="mt-4 grid gap-1 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                      {offer.prices.map((price) => (
                        <li key={price.key}>
                          {t.pricing[price.key]}: {price.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-sm text-[color:var(--color-muted)]">{t.carryCargo.resultsHint}</p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
