import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import logo from "../../assets/atlas_header.png";
import { useState } from "react";

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const openContact = () => {
        setMenuOpen(false);
        setShowModal(true);
    };

    return (
        <div className="relative border-b-2 border-black/20">
            <div className="flex items-center justify-between px-6 lg:px-24">
                
                {/* Logo */}
                <div>
                    <a href="/">
                        <img
                            src={logo}
                            alt="Company logo"
                            className="w-40 h-auto lg:w-62 lg:h-30"
                        />
                    </a>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-5">
                        <li className="text-[22px] font-semibold leading-[1.3]">
                            <a href="#features" className="hover:underline">
                                Features
                            </a>
                        </li>

                        <li className="text-[22px] font-semibold leading-[1.3]">
                            <a href="#demo" className="hover:underline">
                                Demo
                            </a>
                        </li>
                    </ul>

                    <Button
                        label="Contact Us"
                        onClick={() => setShowModal(true)}
                    />
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M6 6l12 12" />
                            <path d="M18 6L6 18" />
                        </svg>
                    ) : (
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M4 6h16" />
                            <path d="M4 12h16" />
                            <path d="M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-black/10 px-6 py-6">
                    <div className="flex flex-col gap-5">
                        <a
                            href="#features"
                            onClick={closeMenu}
                            className="text-[20px] font-semibold"
                        >
                            Features
                        </a>

                        <a
                            href="#demo"
                            onClick={closeMenu}
                            className="text-[20px] font-semibold"
                        >
                            Demo
                        </a>

                        <Button
                            label="Contact Us"
                            onClick={openContact}
                        />
                    </div>
                </div>
            )}

            {showModal && (
                <Modal onClose={() => setShowModal(false)} />
            )}
        </div>
    );
}