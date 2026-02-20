"use client"

import Link from "next/link"
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

export function SiteFooter() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <footer className="border-t border-white/5 bg-[color:var(--color-bg)]">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[color:var(--color-text)]">YouTripio</h3>
            <p className="mt-2 max-w-md text-sm text-[color:var(--color-muted)]">{t.footer.about}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[color:var(--color-muted)] transition hover:text-[color:var(--color-text)]"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 text-sm text-[color:var(--color-muted)] md:flex-row md:items-center md:justify-between">
          <span>{t.footer.copyright}</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="hover:text-[color:var(--color-text)]">
              {t.nav.terms}
            </Link>
            <Link href="/contact" className="hover:text-[color:var(--color-text)]">
              {t.nav.contact}
            </Link>
            <Link href="/services" className="hover:text-[color:var(--color-text)]">
              {t.nav.services}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
