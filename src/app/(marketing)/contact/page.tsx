"use client"

import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
  FaTelegram,
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6"

import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

const socials = [
  { label: "TikTok", href: "#", icon: FaTiktok },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "YouTube", href: "#", icon: FaYoutube },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "WhatsApp", href: "#", icon: FaWhatsapp },
  { label: "Telegram", href: "#", icon: FaTelegram },
  { label: "X", href: "#", icon: FaXTwitter },
  { label: "GitHub", href: "#", icon: FaGithub },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Email", href: "mailto:hello@youtripio.com", icon: FaEnvelope },
]

export default function ContactPage() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <section className="section-shell py-20">
      <div className="glass mx-auto max-w-3xl rounded-3xl p-10">
        <h1 className="text-3xl font-semibold text-[color:var(--color-text)]">{t.contact.title}</h1>
        <p className="mt-4 text-sm text-[color:var(--color-muted)]">{t.contact.text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[color:var(--color-muted)] transition hover:text-[color:var(--color-text)]"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
