"use client"

type ToastProps = {
  show: boolean
  message: string
  variant?: "error" | "success" | "info"
}

const variantStyles = {
  error: "bg-red-500/90 text-[color:var(--color-text)]",
  success: "bg-emerald-500/90 text-[color:var(--color-text)]",
  info: "bg-sky-500/90 text-[color:var(--color-text)]",
}

export function Toast({ show, message, variant = "info" }: ToastProps) {
  if (!show) return null

  return (
    <div className={`fixed right-6 top-6 z-50 rounded-xl px-4 py-3 text-sm shadow-lg ${variantStyles[variant]}`}>
      {message}
    </div>
  )
}

