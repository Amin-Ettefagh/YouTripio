"use client"

type LoadingOverlayProps = {
  show: boolean
  label?: string
}

export function LoadingOverlay({ show, label = "Processing your request..." }: LoadingOverlayProps) {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="glass flex w-full max-w-sm flex-col items-center gap-4 rounded-2xl p-6 text-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-[color:var(--color-accent)]" />
        <p className="text-sm text-[color:var(--color-muted)]">{label}</p>
      </div>
    </div>
  )
}

