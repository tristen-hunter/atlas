import { useEffect } from "react"

interface PrivacyProps {
  onClose: () => void
}

export default function Privacy({ onClose }: PrivacyProps) {
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
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full mx-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold">Privacy Policy</h2>

        <p className="text-gray-600">
          Atlas respects your privacy. This website is intended primarily to
          provide information about the Atlas software and allow visitors to
          contact us.
        </p>

        <h3 className="font-semibold">Information we collect</h3>

        <p className="text-gray-600">
          We do not collect personal information from visitors unless you
          voluntarily provide it when contacting us. If you contact us by
          email, we may retain your name, email address, and the contents of
          your message for the purpose of responding to your enquiry.
        </p>

        <h3 className="font-semibold">How we use information</h3>

        <p className="text-gray-600">
          Information provided to us is used only to respond to enquiries,
          communicate with you, and provide information about Atlas where
          appropriate.
        </p>

        <h3 className="font-semibold">Third-party services</h3>

        <p className="text-gray-600">
          This website may use third-party services such as Vimeo to display
          video content. These services may process information in accordance
          with their own privacy policies.
        </p>

        <h3 className="font-semibold">Cookies</h3>

        <p className="text-gray-600">
          Atlas does not intentionally use cookies to track visitors or for
          advertising purposes.
        </p>

        <h3 className="font-semibold">Contact</h3>

        <p className="text-gray-600">
          If you have any questions regarding this privacy policy, please
          contact us at{" "}
          <a
            href="mailto:tristen.hunter@lease-atlas.com"
            className="text-primary hover:underline"
          >
            tristen.hunter@lease-atlas.com
          </a>.
        </p>

        <p className="text-sm text-gray-500">
          Last updated: September 2026
        </p>

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