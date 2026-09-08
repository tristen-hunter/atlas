import { useState } from "react"
import Modal from "../Modal/Modal"
import Privacy from "../Privacy/Privacy"

export default function Footer() {
    const [showModal, setShowModal] = useState(false)
    const [showPrivacy, setShowPrivacy] = useState(false)

    return (
        <div>
            <div className="flex flex-col p-4 gap-4 bg-[#aaa]">
                <div>
                    <h2 className="text-[24px]">Atlas</h2>
                    <h4 className="text-[16px]">
                        Software for managing lease payouts
                    </h4>
                </div>

                <div className="flex justify-between">
                    <p className="italic text-[14px]">
                        © 2026 Atlas. All rights reserved.
                    </p>

                    <p className="text-[14px]">
                        <button onClick={() => setShowModal(true)}>
                            Contact
                        </button>
                        {" | "}
                        <button onClick={() => setShowPrivacy(true)}>
                            Privacy
                        </button>
                    </p>
                </div>
            </div>

            <div className="bg-secondary h-6" />

            {showModal && (
                <Modal onClose={() => setShowModal(false)} />
            )}

            {showPrivacy && (
                <Privacy onClose={() => setShowPrivacy(false)} />
            )}
        </div>
    )
}