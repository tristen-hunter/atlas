import { useState } from "react"
import hero_image from "../../assets/monochrome_apartment_rendering.png"
import Button from "../Button/Button"
import Modal from "../Modal/Modal"

export default function Hero() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 px-6 md:px-12 lg:px-36 pt-10 lg:pt-12.5">

                <div className="flex flex-col gap-6 flex-1">
                    <h1 className="text-[30px] md:text-[34px] lg:text-[36px] max-w-140">
                        The Most Simple Lease
                        Management Ecosystem
                        for Independent Contractors
                    </h1>

                    <p className="max-w-125">
                        Our system helps a principle, office administrator and
                        agent manage a lease end-to-end.
                        Tools for relationship management with landlords, easy payout
                        tracking, deposits, and a host of other features suited to
                        simple oversight.
                    </p>

                    <Button
                        label="Contact Us"
                        onClick={() => setShowModal(true)}
                    />
                </div>

                <div className="flex-1 w-full flex justify-center">
                    <img
                        src={hero_image}
                        alt="Apartment buildings"
                        className="w-full max-w-140.5 h-auto"
                    />
                </div>
            </div>

            {showModal && (
                <Modal onClose={() => setShowModal(false)} />
            )}
        </>
    )
}