import { useEffect } from "react"

interface ModalProps {
  onClose: () => void
}

export default function Modal({ onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold">Hey, thanks for reaching out!</h2>

        <p className="text-gray-600">
          I'm personally handling all requests at this early stage. For any
          business queries, email me directly and I'll get
          back to you as soon as I can.
        </p>

        <a
          href="mailto:tristen.hunter@lease-atlas.com"
          className="text-primary font-medium hover:underline"
        >
          tristen.hunter@lease-atlas.com
        </a>

        <p className="text-gray-600 pt-4">
          For developer queries email me personally:
        </p>

        <a
          href="mailto:tristen.hunter.dev@gmail.com"
          className="text-primary font-medium hover:underline"
        >
          tristen.hunter.dev@gmail.com
        </a>

        <button
          onClick={onClose}
          className="mt-2 self-end px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 transition"
        >
          Close
        </button>
      </div>
    </div>
  )
}