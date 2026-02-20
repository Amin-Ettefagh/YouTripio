"use client"

import { useState } from "react"

import { DashboardHeader } from "@/components/dashboard-header"
import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

export default function ControlPage() {
  const { language } = useLanguage()
  const t = copy[language]
  const [stepMap, setStepMap] = useState<Record<string, number>>({})

  const boxes = [
    {
      id: "carrier",
      title: language === "fa" ? "وضعیت سفر (حامل)" : "Journey Status (Carrier)",
      startCode: "11Ad",
      endCode: "13Cf",
      contact: "+64-21-000-0000",
      startPrompt: t.control.prompts.carrierStart,
      endPrompt: t.control.prompts.carrierEnd,
    },
    {
      id: "owner",
      title: language === "fa" ? "وضعیت سفر (صاحب مرسوله)" : "Journey Status (Owner)",
      startCode: "12Be",
      endCode: "14Dg",
      contact: "+64-21-000-0000",
      startPrompt: t.control.prompts.ownerStart,
      endPrompt: t.control.prompts.ownerEnd,
    },
    {
      id: "driver",
      title: language === "fa" ? "وضعیت همراهی (راننده)" : "Companion Status (Driver)",
      startCode: "15Ea",
      endCode: "17Gc",
      contact: "+64-21-000-0000",
      startPrompt: t.control.prompts.driverStart,
      endPrompt: t.control.prompts.driverEnd,
    },
    {
      id: "passenger",
      title: language === "fa" ? "وضعیت همراهی (مسافر)" : "Companion Status (Passenger)",
      startCode: "16Fb",
      endCode: "18Hd",
      contact: "+64-21-000-0000",
      startPrompt: t.control.prompts.passengerStart,
      endPrompt: t.control.prompts.passengerEnd,
    },
  ]

  function advanceStep(id: string) {
    setStepMap((prev) => ({ ...prev, [id]: Math.min((prev[id] ?? 0) + 1, 2) }))
  }

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <DashboardHeader title={t.control.title} />

      <main className="section-shell py-12">
        <h1 className="text-3xl font-semibold text-[color:var(--color-text)]">{t.control.heading}</h1>
        <p className="mt-3 text-sm text-[color:var(--color-muted)]">{t.control.intro}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {boxes.map((box) => {
            const step = stepMap[box.id] ?? 0

            return (
              <div key={box.id} className="glass rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-[color:var(--color-text)]">{box.title}</h2>
                <div className="mt-4 space-y-4 text-sm text-[color:var(--color-muted)]">
                  <div>
                    <p>
                      {t.control.journeyCode}: <span className="font-semibold text-[color:var(--color-text)]">{box.startCode}</span>
                    </p>
                    <p className="text-xs text-[color:var(--color-muted)]">{t.control.contact}: {box.contact}</p>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{box.startPrompt}</label>
                    <input
                      type="text"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
                      placeholder={language === "fa" ? "کد سفر را وارد کنید" : "Enter journey code"}
                    />
                    <button
                      type="button"
                      onClick={() => advanceStep(box.id)}
                      className="mt-3 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]"
                    >
                      {t.control.submit}
                    </button>
                  </div>

                  {step >= 1 ? (
                    <>
                      <div>
                        <p>
                          {t.control.endJourneyCode}: <span className="font-semibold text-[color:var(--color-text)]">{box.endCode}</span>
                        </p>
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{box.endPrompt}</label>
                        <input
                          type="text"
                          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
                          placeholder={language === "fa" ? "کد پایان سفر را وارد کنید" : "Enter end journey code"}
                        />
                        <button
                          type="button"
                          onClick={() => advanceStep(box.id)}
                          className="mt-3 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]"
                        >
                          {t.control.submit}
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
