import type { ReactNode } from "react"

export default function AppLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[color:var(--color-bg)]">{children}</div>
}

