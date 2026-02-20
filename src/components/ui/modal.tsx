"use client"

import { ReactNode } from "react"

type ModalProps = {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
  footer?: ReactNode
}

export function Modal({ open, title, onClose, children, footer }: ModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="glass w-full max-w-lg rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[color:var(--color-text)]">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-[color:var(--color-muted)] transition hover:text-[color:var(--color-text)]"
          >
            <span className="sr-only">Close</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-4 space-y-4 text-sm text-[color:var(--color-muted)]">{children}</div>
        {footer ? <div className="mt-6 flex items-center justify-end gap-3">{footer}</div> : null}
      </div>
    </div>
  )
}

