"use client"

import { useState } from "react"
import Link from "next/link"

import { DashboardHeader } from "@/components/dashboard-header"
import { LoadingOverlay } from "@/components/ui/loading-overlay"
import { Toast } from "@/components/ui/toast"
import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

export default function CarryCompanionFormPage() {
  const { language } = useLanguage()
  const t = copy[language]

  const [form, setForm] = useState({
    year: "",
    month: "",
    day: "",
    time: "",
    originCountry: "",
    originCity: "",
    destinationCountry: "",
    destinationCity: "",
    vehicleType: "",
    price: "",
  })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ show: boolean; message: string; variant: "error" | "success" }>(
    { show: false, message: "", variant: "success" }
  )

  function updateField(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const values = Object.values(form)
    if (values.some((value) => !value)) {
      setToast({ show: true, message: t.common.formError, variant: "error" })
      setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 2500)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setToast({ show: true, message: t.forms.loadingSuccessCompanionNeed, variant: "success" })
      setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 2500)
    }, 900)
  }

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <DashboardHeader title={t.carryCompanion.title} />
      <LoadingOverlay show={loading} label={t.common.loading} />
      <Toast show={toast.show} message={toast.message} variant={toast.variant} />

      <main className="section-shell py-12">
        <div className="glass mx-auto max-w-2xl rounded-3xl p-8">
          <h1 className="text-2xl font-semibold text-[color:var(--color-text)]">{t.forms.companionNeedTitle}</h1>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5 text-sm text-[color:var(--color-muted)]">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.common.departureTime}</label>
              <div className="mt-2 grid gap-3 sm:grid-cols-4">
                <input
                  value={form.year}
                  onChange={(event) => updateField("year", event.target.value)}
                  placeholder={language === "fa" ? "سال" : "Year"}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                />
                <input
                  value={form.month}
                  onChange={(event) => updateField("month", event.target.value)}
                  placeholder={language === "fa" ? "ماه" : "Month"}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                />
                <input
                  value={form.day}
                  onChange={(event) => updateField("day", event.target.value)}
                  placeholder={language === "fa" ? "روز" : "Day"}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                />
                <input
                  value={form.time}
                  onChange={(event) => updateField("time", event.target.value)}
                  placeholder={language === "fa" ? "ساعت" : "Time"}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.common.origin}</label>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <input
                  value={form.originCountry}
                  onChange={(event) => updateField("originCountry", event.target.value)}
                  placeholder={language === "fa" ? "کشور" : "Country"}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                />
                <input
                  value={form.originCity}
                  onChange={(event) => updateField("originCity", event.target.value)}
                  placeholder={language === "fa" ? "شهر" : "City"}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.common.destination}</label>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <input
                  value={form.destinationCountry}
                  onChange={(event) => updateField("destinationCountry", event.target.value)}
                  placeholder={language === "fa" ? "کشور" : "Country"}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                />
                <input
                  value={form.destinationCity}
                  onChange={(event) => updateField("destinationCity", event.target.value)}
                  placeholder={language === "fa" ? "شهر" : "City"}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.common.vehicleType}</label>
              <input
                value={form.vehicleType}
                onChange={(event) => updateField("vehicleType", event.target.value)}
                placeholder={language === "fa" ? "هواپیما" : "Airplane"}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.common.price}</label>
              <input
                value={form.price}
                onChange={(event) => updateField("price", event.target.value)}
                placeholder="$"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="rounded-full bg-[color:var(--color-accent)] px-6 py-2 text-sm font-semibold text-slate-900"
              >
                {t.common.submit}
              </button>
              <Link href="/carry-companion" className="text-sm text-[color:var(--color-muted)]">
                {t.forms.backToList}
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
