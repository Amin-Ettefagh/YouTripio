"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { DashboardHeader } from "@/components/dashboard-header"
import { Modal } from "@/components/ui/modal"
import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

export default function DashboardPage() {
  const { language } = useLanguage()
  const t = copy[language]

  const parcelOwnerActions = [
    { title: language === "fa" ? "یافتن حامل برای مرسوله" : "Find a courier who can take your parcel", href: "/carry-cargo" },
    { title: language === "fa" ? "ثبت مرسوله" : "Advertise your parcel", href: "/carry-cargo/new" },
  ]

  const parcelCourierActions = [
    { title: language === "fa" ? "یافتن مرسوله" : "Find a parcel", href: "/send-cargo" },
    {
      title:
        language === "fa"
          ? "ثبت ظرفیت خالی برای حمل مرسوله"
          : "Advertise your vacant capacity to carry a parcel",
      href: "/send-cargo/new",
    },
  ]

  const companionNeedActions = [
    { title: language === "fa" ? "یافتن همراه مطمئن" : "Find your trusted companion", href: "/carry-companion" },
    {
      title: language === "fa" ? "ثبت نیاز همراه" : "Advertise your need for a companion",
      href: "/carry-companion/new",
    },
  ]

  const companionOfferActions = [
    {
      title: language === "fa" ? "یافتن درخواست‌های همراهی" : "Find someone who needs a companion",
      href: "/send-companion",
    },
    {
      title: language === "fa" ? "ثبت تمایل همراهی" : "Advertise your interest to be a companion",
      href: "/send-companion/new",
    },
  ]

  type JourneyStep =
    | "initial"
    | "parcel"
    | "companion"
    | "parcel-owner"
    | "parcel-courier"
    | "companion-need"
    | "companion-offer"

  const [journeyStep, setJourneyStep] = useState<JourneyStep>("initial")
  const [walletOpen, setWalletOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [walletAmount, setWalletAmount] = useState(500)
  const [walletInput, setWalletInput] = useState(0)

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1-234-567-890",
    location: "Auckland, New Zealand",
    bio: "Experienced traveler with a love for exploring new destinations and sharing unique experiences.",
  })

  const [draftProfile, setDraftProfile] = useState(profile)

  function openEdit() {
    setDraftProfile(profile)
    setEditOpen(true)
  }

  function saveProfile() {
    setProfile(draftProfile)
    setEditOpen(false)
  }

  function rechargeWallet(event: React.FormEvent) {
    event.preventDefault()
    if (walletInput > 0) {
      setWalletAmount((value) => value + walletInput)
    }
    setWalletOpen(false)
  }

  const actionCards =
    journeyStep === "parcel-owner"
      ? parcelOwnerActions
      : journeyStep === "parcel-courier"
        ? parcelCourierActions
        : journeyStep === "companion-need"
          ? companionNeedActions
          : journeyStep === "companion-offer"
            ? companionOfferActions
            : []

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <DashboardHeader title={t.dashboard.title} />

      <main className="section-shell pb-20 pt-10">
        <div className="glass flex flex-col gap-6 rounded-3xl p-6 lg:flex-row lg:items-center">
          <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-[color:var(--color-accent)]">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={160}
              height={160}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">{profile.name}</h2>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              {t.dashboard.labels.email}: {profile.email}
            </p>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              {t.dashboard.labels.phone}: {profile.phone}
            </p>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              {t.dashboard.labels.location}: {profile.location}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-[color:var(--color-muted)]">
              <span className="rounded-full border border-white/10 px-3 py-1">{t.dashboard.travelerLevel}</span>
              <span className="rounded-full border border-white/10 px-3 py-1">{t.dashboard.verified}</span>
            </div>
            <p className="mt-4 text-sm text-[color:var(--color-muted)]">
              {t.dashboard.bio}: {profile.bio}
            </p>
          </div>
          <button
            type="button"
            onClick={openEdit}
            className="rounded-full bg-[color:var(--color-accent)] px-5 py-2 text-sm font-semibold text-slate-900"
          >
            {t.dashboard.edit}
          </button>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <button
            type="button"
            onClick={() => setWalletOpen(true)}
            className="glass rounded-2xl p-6 text-left text-[color:var(--color-text)] transition hover:translate-y-[-2px]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.dashboard.wallet}</p>
            <p className="mt-2 text-lg font-semibold">0000-0000-000-000</p>
            <p className="mt-3 text-3xl font-semibold">${walletAmount}</p>
          </button>
          <Link href="/control" className="glass rounded-2xl p-6 text-[color:var(--color-muted)] transition">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.dashboard.activities}</p>
            <p className="mt-2 text-lg font-semibold text-[color:var(--color-text)]">{t.control.heading}</p>
          </Link>
          <Link href="/request" className="glass rounded-2xl p-6 text-[color:var(--color-muted)] transition">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.dashboard.market}</p>
            <p className="mt-2 text-lg font-semibold text-[color:var(--color-text)]">{t.request.title}</p>
          </Link>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap gap-4">
            {journeyStep === "initial" ? (
              <>
                <button
                  type="button"
                  onClick={() => setJourneyStep("parcel")}
                  className="glass flex-1 rounded-2xl p-6 text-left text-[color:var(--color-text)] transition"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.dashboard.step}</p>
                  <p className="mt-2 text-lg font-semibold">{t.dashboard.parcels}</p>
                </button>
                <button
                  type="button"
                  onClick={() => setJourneyStep("companion")}
                  className="glass flex-1 rounded-2xl p-6 text-left text-[color:var(--color-text)] transition"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{t.dashboard.step}</p>
                  <p className="mt-2 text-lg font-semibold">{t.dashboard.companion}</p>
                </button>
              </>
            ) : null}

            {journeyStep === "parcel" ? (
              <>
                <button
                  type="button"
                  onClick={() => setJourneyStep("parcel-owner")}
                  className="glass flex-1 rounded-2xl p-6 text-left text-[color:var(--color-text)] transition"
                >
                  {t.dashboard.haveParcel}
                </button>
                <button
                  type="button"
                  onClick={() => setJourneyStep("parcel-courier")}
                  className="glass flex-1 rounded-2xl p-6 text-left text-[color:var(--color-text)] transition"
                >
                  {t.dashboard.amCourier}
                </button>
                <button
                  type="button"
                  onClick={() => setJourneyStep("initial")}
                  className="flex items-center gap-2 text-sm text-[color:var(--color-muted)]"
                >
                  {t.dashboard.backToStart}
                </button>
              </>
            ) : null}

            {journeyStep === "companion" ? (
              <>
                <button
                  type="button"
                  onClick={() => setJourneyStep("companion-need")}
                  className="glass flex-1 rounded-2xl p-6 text-left text-[color:var(--color-text)] transition"
                >
                  {t.dashboard.needCompanion}
                </button>
                <button
                  type="button"
                  onClick={() => setJourneyStep("companion-offer")}
                  className="glass flex-1 rounded-2xl p-6 text-left text-[color:var(--color-text)] transition"
                >
                  {t.dashboard.amCompanion}
                </button>
                <button
                  type="button"
                  onClick={() => setJourneyStep("initial")}
                  className="flex items-center gap-2 text-sm text-[color:var(--color-muted)]"
                >
                  {t.dashboard.backToStart}
                </button>
              </>
            ) : null}
          </div>

          {actionCards.length > 0 ? (
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {actionCards.map((action) => (
                <Link key={action.title} href={action.href} className="glass rounded-2xl p-6 text-[color:var(--color-text)]">
                  <p className="text-lg font-semibold text-[color:var(--color-text)]">{action.title}</p>
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setJourneyStep("initial")}
                className="text-sm text-[color:var(--color-muted)]"
              >
                {t.dashboard.backToStart}
              </button>
            </div>
          ) : null}
        </div>
      </main>

      <Modal
        open={walletOpen}
        title={t.dashboard.walletModal.title}
        onClose={() => setWalletOpen(false)}
        footer={
          <>
            <button
              type="button"
              onClick={() => setWalletOpen(false)}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-[color:var(--color-muted)]"
            >
              {t.dashboard.walletModal.cancel}
            </button>
            <button
              type="submit"
              form="wallet-form"
              className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-900"
            >
              {t.dashboard.walletModal.recharge}
            </button>
          </>
        }
      >
        <form id="wallet-form" onSubmit={rechargeWallet} className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              {t.dashboard.walletModal.cardNumber}
            </label>
            <input
              type="text"
              value="0000-0000-0000-0000"
              readOnly
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              {t.dashboard.walletModal.password}
            </label>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              {t.dashboard.walletModal.amount}
            </label>
            <input
              type="number"
              value={walletInput}
              onChange={(event) => setWalletInput(Number(event.target.value))}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
            />
          </div>
        </form>
      </Modal>

      <Modal
        open={editOpen}
        title={t.dashboard.editModal.title}
        onClose={() => setEditOpen(false)}
        footer={
          <>
            <button
              type="button"
              onClick={() => setEditOpen(false)}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-[color:var(--color-muted)]"
            >
              {t.dashboard.editModal.cancel}
            </button>
            <button
              type="button"
              onClick={saveProfile}
              className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-900"
            >
              {t.dashboard.editModal.save}
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              {t.dashboard.editModal.name}
            </label>
            <input
              type="text"
              value={draftProfile.name}
              onChange={(event) => setDraftProfile({ ...draftProfile, name: event.target.value })}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              {t.dashboard.editModal.email}
            </label>
            <input
              type="email"
              value={draftProfile.email}
              onChange={(event) => setDraftProfile({ ...draftProfile, email: event.target.value })}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              {t.dashboard.editModal.phone}
            </label>
            <input
              type="tel"
              value={draftProfile.phone}
              onChange={(event) => setDraftProfile({ ...draftProfile, phone: event.target.value })}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              {t.dashboard.editModal.location}
            </label>
            <input
              type="text"
              value={draftProfile.location}
              onChange={(event) => setDraftProfile({ ...draftProfile, location: event.target.value })}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              {t.dashboard.editModal.bio}
            </label>
            <textarea
              value={draftProfile.bio}
              onChange={(event) => setDraftProfile({ ...draftProfile, bio: event.target.value })}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
              rows={3}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}
