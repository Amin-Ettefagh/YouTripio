"use client"

import { useState } from "react"

import { DashboardHeader } from "@/components/dashboard-header"
import { Toast } from "@/components/ui/toast"
import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"
import { companionRequests, parcelRequests } from "@/data/sample-data"

export default function RequestPage() {
  const { language } = useLanguage()
  const t = copy[language]

  const [parcelSelection, setParcelSelection] = useState<string[]>([])
  const [companionSelection, setCompanionSelection] = useState<string[]>([])
  const [toast, setToast] = useState<{ show: boolean; message: string; variant: "error" | "success" }>(
    { show: false, message: "", variant: "success" }
  )

  function toggleSelection(id: string, selection: string[], setSelection: (items: string[]) => void) {
    if (selection.includes(id)) {
      setSelection(selection.filter((item) => item !== id))
    } else {
      setSelection([...selection, id])
    }
  }

  function submit(selection: string[], label: "parcel" | "companion") {
    if (selection.length === 0) {
      setToast({ show: true, message: t.request.submitError, variant: "error" })
    } else {
      setToast({
        show: true,
        message: label === "parcel" ? t.request.submitSuccessParcel : t.request.submitSuccessCompanion,
        variant: "success",
      })
    }
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 2500)
  }

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <DashboardHeader title={t.request.title} />
      <Toast show={toast.show} message={toast.message} variant={toast.variant} />

      <main className="section-shell py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-[color:var(--color-text)]">{t.request.carryParcel}</h2>
            <div className="mt-4 space-y-4">
              {parcelRequests.map((request) => {
                const selected = parcelSelection.includes(request.id)
                return (
                  <button
                    key={request.id}
                    type="button"
                    onClick={() => toggleSelection(request.id, parcelSelection, setParcelSelection)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                      selected ? "border-emerald-400 bg-emerald-400/10" : "border-white/10"
                    }`}
                  >
                    <p className="text-[color:var(--color-muted)]">
                      {t.request.labels.userName}: {request.name}
                    </p>
                    <p className="text-[color:var(--color-muted)]">
                      {t.request.labels.parcelContent}: {request.content}
                    </p>
                    <p className="text-[color:var(--color-muted)]">
                      {t.request.labels.dimension}: {request.dimension}
                    </p>
                    <p className="text-[color:var(--color-muted)]">
                      {t.request.labels.weight}: {request.weight}
                    </p>
                  </button>
                )
              })}
            </div>
            <button
              type="button"
              onClick={() => submit(parcelSelection, "parcel")}
              className="mt-5 rounded-full bg-[color:var(--color-accent)] px-5 py-2 text-sm font-semibold text-slate-900"
            >
              {t.common.submit}
            </button>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-[color:var(--color-text)]">{t.request.companion}</h2>
            <div className="mt-4 space-y-4">
              {companionRequests.map((request) => {
                const selected = companionSelection.includes(request.id)
                return (
                  <button
                    key={request.id}
                    type="button"
                    onClick={() => toggleSelection(request.id, companionSelection, setCompanionSelection)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                      selected ? "border-emerald-400 bg-emerald-400/10" : "border-white/10"
                    }`}
                  >
                    <p className="text-[color:var(--color-muted)]">
                      {t.request.labels.userName}: {request.name}
                    </p>
                    <p className="text-[color:var(--color-muted)]">
                      {t.request.labels.passengerNumber}: {request.passengers}
                    </p>
                  </button>
                )
              })}
            </div>
            <button
              type="button"
              onClick={() => submit(companionSelection, "companion")}
              className="mt-5 rounded-full bg-[color:var(--color-accent)] px-5 py-2 text-sm font-semibold text-slate-900"
            >
              {t.common.submit}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
