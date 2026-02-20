"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"

import { Toast } from "@/components/ui/toast"
import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

export default function AuthPage() {
  const params = useSearchParams()
  const modeParam = params.get("mode")
  const initialMode = useMemo<"signin" | "signup">(
    () => (modeParam === "signup" ? "signup" : "signin"),
    [modeParam]
  )
  const [mode, setMode] = useState<"signin" | "signup">(initialMode)
  const [toast, setToast] = useState<{ show: boolean; message: string; variant: "success" | "error" }>(
    { show: false, message: "", variant: "success" }
  )
  const { language } = useLanguage()
  const t = copy[language]

  // URL params are used only for the initial mode; users can switch with buttons.

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setToast({ show: true, message: t.auth.toast, variant: "success" })
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 2500)
  }

  return (
    <section className="section-shell py-20">
      <Toast show={toast.show} message={toast.message} variant={toast.variant} />
      <div className="glass mx-auto max-w-xl rounded-3xl p-10">
        <h1 className="text-3xl font-semibold text-[color:var(--color-text)]">{t.auth.title}</h1>
        <p className="mt-3 text-sm text-[color:var(--color-muted)]">{t.auth.text}</p>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
              mode === "signin"
                ? "bg-[color:var(--color-accent)] text-slate-900"
                : "border border-white/10 text-[color:var(--color-muted)]"
            }`}
          >
            {t.auth.signIn}
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
              mode === "signup"
                ? "bg-[color:var(--color-accent)] text-slate-900"
                : "border border-white/10 text-[color:var(--color-muted)]"
            }`}
          >
            {t.auth.signUp}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {mode === "signup" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder={t.auth.firstName}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--color-text)]"
              />
              <input
                type="text"
                placeholder={t.auth.lastName}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--color-text)]"
              />
            </div>
          ) : null}

          <input
            type="email"
            placeholder={t.auth.email}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--color-text)]"
          />
          <input
            type="password"
            placeholder={t.auth.password}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--color-text)]"
          />

          {mode === "signup" ? (
            <input
              type="tel"
              placeholder={t.auth.phone}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--color-text)]"
            />
          ) : null}

          <button
            type="submit"
            className="w-full rounded-full bg-[color:var(--color-accent)] px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[color:var(--color-accent-strong)]"
          >
            {mode === "signin" ? t.auth.signIn : t.auth.createAccount}
          </button>
        </form>
      </div>
    </section>
  )
}
