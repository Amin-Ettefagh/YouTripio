"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { copy } from "@/lib/copy"

export default function BlogPage() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <section className="section-shell py-20">
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">{t.blog.badge}</p>
          <h1 className="mt-3 text-3xl font-semibold text-[color:var(--color-text)]">{t.blog.title}</h1>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {t.blog.posts.map((post) => (
            <article key={post.title} className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{post.date}</p>
              <h2 className="mt-4 text-lg font-semibold text-[color:var(--color-text)]">{post.title}</h2>
              <p className="mt-3 text-sm text-[color:var(--color-muted)]">{post.excerpt}</p>
              <Link href="/soon" className="mt-4 inline-flex text-sm text-[color:var(--color-accent)]">
                {t.blog.readMore}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
