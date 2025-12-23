"use client";

import { m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, ArrowUp, Heart } from "lucide-react";
import { CONTACT_INFO, FOOTER_QUICK_LINKS, FOOTER_CONTENT, REGISTER_LINK } from "@/lib/data";

const quickLinks = FOOTER_QUICK_LINKS;

const socialIcons: Record<string, React.ReactNode> = {
    instagram: <Instagram className="w-5 h-5" />,
    youtube: <Youtube className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
};

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative rounded-lg overflow-hidden ring-2 ring-blue-500/30">
                                <Image
                                    src="/MainLogo.webp"
                                    alt="Logo Robotika UNS"
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">{FOOTER_CONTENT.organizationName}</h3>
                                <p className="text-xs text-blue-400">Universitas Sebelas Maret</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm mb-4">
                            {FOOTER_CONTENT.tagline}
                        </p>
                        {/* Social Media */}
                        <div className="flex gap-2">
                            {CONTACT_INFO.socialMedia.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                                    aria-label={social.platform}
                                >
                                    {socialIcons[social.platform.toLowerCase()]}
                                </a>
                            ))}
                        </div>
                    </m.div>

                    {/* Quick Links */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-white font-semibold mb-4">Navigasi</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </m.div>

                    {/* Contact Info */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-white font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="flex items-start gap-3 text-slate-400 hover:text-white text-sm transition-colors"
                                >
                                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>{CONTACT_INFO.email}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-slate-400 hover:text-white text-sm transition-colors"
                                >
                                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>{CONTACT_INFO.whatsapp}</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>{CONTACT_INFO.location}</span>
                            </li>
                        </ul>
                    </m.div>

                    {/* CTA */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-white font-semibold mb-4">Bergabung</h4>
                        <p className="text-slate-400 text-sm mb-4">
                            Tertarik menjadi bagian dari keluarga Robotika UNS?
                        </p>
                        <a
                            href={REGISTER_LINK.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                        >
                            {REGISTER_LINK.name}
                        </a>
                    </m.div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 mt-10 pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-slate-400 text-sm text-center sm:text-left">
                            {FOOTER_CONTENT.copyright}
                        </p>

                        {/* Back to top */}
                        <button
                            onClick={scrollToTop}
                            className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                            aria-label="Kembali ke atas"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
