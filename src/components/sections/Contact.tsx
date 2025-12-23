"use client";

import { m } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, ExternalLink } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

const socialIcons: Record<string, React.ReactNode> = {
    instagram: <Instagram className="w-5 h-5" />,
    youtube: <Youtube className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
};

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Hubungi Kami
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami
                    </p>
                </m.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        {/* Info Cards */}
                        <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-6">Informasi Kontak</h3>

                            <div className="space-y-4">
                                {/* Email */}
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Email</p>
                                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                            {CONTACT_INFO.email}
                                        </p>
                                    </div>
                                </a>

                                {/* Phone/WhatsApp */}
                                <a
                                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">WhatsApp</p>
                                        <p className="text-white font-medium group-hover:text-green-400 transition-colors">
                                            {CONTACT_INFO.whatsapp}
                                        </p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50">
                                    <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Lokasi</p>
                                        <p className="text-white font-medium">
                                            {CONTACT_INFO.location}
                                        </p>
                                        <p className="text-slate-400 text-sm mt-1">
                                            {CONTACT_INFO.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-4">Ikuti Media Sosial Kami</h3>
                            <div className="flex flex-wrap gap-3">
                                {CONTACT_INFO.socialMedia.map((social) => (
                                    <a
                                        key={social.platform}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
                                    >
                                        {socialIcons[social.platform.toLowerCase()] || <ExternalLink className="w-5 h-5" />}
                                        <span className="text-sm font-medium">{social.platform}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </m.div>

                    {/* Map / CTA */}
                    <m.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-900/50 rounded-2xl p-6 border border-white/5 flex flex-col"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Kirim Pesan</h3>
                        <p className="text-slate-400 mb-6">
                            Untuk pertanyaan lebih lanjut atau kolaborasi, silakan hubungi kami melalui form berikut:
                        </p>

                        {/* Google Form CTA */}
                        <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl p-8 border border-blue-500/20">
                            <div className="w-20 h-20 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">
                                <Mail className="w-10 h-10 text-blue-400" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Ada Pertanyaan?</h4>
                            <p className="text-slate-400 text-center mb-6 max-w-sm">
                                Isi form untuk menghubungi kami. Tim kami akan segera merespon pesan kamu.
                            </p>
                            <a
                                href="https://uns.id/OpenRecruitmentRobotikaUNS"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                            >
                                Hubungi Kami
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Operating Hours */}
                        <div className="mt-6 p-4 rounded-xl bg-slate-800/50">
                            <p className="text-sm text-slate-400">
                                <span className="font-medium text-white">Jam Operasional:</span>{" "}
                                {CONTACT_INFO.operatingHours}
                            </p>
                        </div>
                    </m.div>
                </div>
            </div>
        </section>
    );
}
