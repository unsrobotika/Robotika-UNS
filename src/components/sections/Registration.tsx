"use client";

import { m } from "motion/react";
import { ArrowRight, Users, Trophy, Cpu, Sparkles } from "lucide-react";

const stats = [
    { icon: Users, value: "50+", label: "Anggota Aktif" },
    { icon: Trophy, value: "20+", label: "Prestasi" },
    { icon: Cpu, value: "3", label: "Tim Robot" },
    { icon: Sparkles, value: "8", label: "Divisi" },
];

export default function Registration() {
    return (
        <section id="registration" className="py-20 bg-gradient-to-br from-blue-900/20 via-[#0B1120] to-cyan-900/20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-500/30 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-blue-300 font-medium">Open Recruitment 2024/2025</span>
                    </div>

                    {/* Main Content */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Bergabung Bersama Kami
                        </span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                        Jadilah bagian dari keluarga besar Robotika UNS. Kembangkan skill,
                        raih prestasi, dan ciptakan robot impianmu bersama kami!
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {stats.map((stat, index) => (
                            <m.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-slate-800/50 rounded-xl p-4 border border-white/5"
                            >
                                <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="text-sm text-slate-400">{stat.label}</p>
                            </m.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <m.a
                            href="https://uns.id/OpenRecruitmentRobotikaUNS"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            <span>Daftar Sekarang</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </m.a>

                        <m.a
                            href="#faq"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-6 py-3 text-slate-300 font-medium hover:text-white transition-colors"
                        >
                            Punya Pertanyaan?
                        </m.a>
                    </div>

                    {/* Note */}
                    <m.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8 text-sm text-slate-500"
                    >
                        * Terbuka untuk seluruh mahasiswa aktif Universitas Sebelas Maret
                    </m.p>
                </m.div>
            </div>
        </section>
    );
}
