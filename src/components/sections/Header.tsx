"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, REGISTER_LINK } from "@/lib/data";

const navItems = NAV_ITEMS;
const registerLink = REGISTER_LINK;

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <>
            {/* Main Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-white/5"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link
                            href="#hero"
                            className="flex items-center gap-3 group"
                            onClick={() => handleNavClick("#hero")}
                        >
                            <div className="relative rounded-lg overflow-hidden ring-2 ring-blue-500/30 group-hover:ring-blue-500/50 transition-all">
                                <Image
                                    src="/MainLogo.webp"
                                    alt="Logo Robotika UNS"
                                    width={50}
                                    height={50}
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                    Robotika
                                </h1>
                                <p className="text-xs text-blue-400">
                                    Universitas Sebelas Maret
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {/* Register Button */}
                            <a
                                href={registerLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                {registerLink.name}
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-out Menu */}
                        <m.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-slate-900 border-l border-white/10 z-50 lg:hidden overflow-y-auto"
                        >
                            {/* Menu Header */}
                            <div className="flex items-center justify-between p-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="relative rounded-lg overflow-hidden ring-2 ring-blue-500/30">
                                        <Image
                                            src="/MainLogo.webp"
                                            alt="Logo Robotika UNS"
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-white">Robotika UNS</h2>
                                        <p className="text-xs text-slate-400">Menu Navigasi</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                    aria-label="Tutup menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <nav className="p-4">
                                <ul className="space-y-1">
                                    {navItems.map((item, index) => (
                                        <m.li
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleNavClick(item.href);
                                                }}
                                                className="flex items-center justify-between px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all group"
                                            >
                                                <span>{item.name}</span>
                                                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </Link>
                                        </m.li>
                                    ))}
                                </ul>

                                {/* Register CTA */}
                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <a
                                        href={registerLink.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                                    >
                                        <span>{registerLink.name}</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                    <p className="mt-3 text-center text-xs text-slate-500">
                                        Bergabung bersama kami sekarang!
                                    </p>
                                </div>
                            </nav>

                            {/* Footer Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-slate-900/80">
                                <p className="text-xs text-center text-slate-500">
                                    © 2024 Tim Robotika UNS
                                </p>
                            </div>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
