
"use client";


import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" }, // Top
        { name: "Misi", href: "#philosophy" },
        { name: "Divisi", href: "#divisions" },
        { name: "Team", href: "#team" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center",
                scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-6"
            )}
        >
            <div className="text-xl font-bold tracking-tighter text-[--color-brand-cyan]">
                ROBOTIKA UNS
            </div>

            <div className="hidden md:flex gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href} // Note: Smooth scroll handled by default or Lenis instructions usually
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest hover:underline decoration-[--color-brand-cyan] underline-offset-4"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="md:hidden">
                {/* Mobile Menu Placeholder - simple hamburger would go here */}
                <span className="text-[--color-brand-cyan]">MENU</span>
            </div>
        </nav>
    );
}
