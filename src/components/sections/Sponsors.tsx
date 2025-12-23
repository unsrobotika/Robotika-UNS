"use client";

import { m } from "motion/react";
import Image from "next/image";
import { SPONSORS, MEDIA_PARTNERS } from "@/lib/data";

interface SponsorGridProps {
    title: string;
    subtitle: string;
    items: Array<{ id: string; name: string; logo: string; link?: string }>;
    columns?: number;
}

function SponsorGrid({ title, subtitle, items, columns = 4 }: SponsorGridProps) {
    const gridCols = {
        3: "grid-cols-2 md:grid-cols-3",
        4: "grid-cols-2 md:grid-cols-4",
        5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
        6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    };

    return (
        <div className="mb-16 last:mb-0">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400">{subtitle}</p>
            </div>
            <div className={`grid ${gridCols[columns as keyof typeof gridCols] || gridCols[4]} gap-4`}>
                {items.map((item, index) => (
                    <m.a
                        key={item.id}
                        href={item.link || "#"}
                        target={item.link ? "_blank" : undefined}
                        rel={item.link ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-slate-800/50 rounded-xl p-6 border border-white/5 hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center group"
                    >
                        <div className="relative w-full h-16 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300">
                            <Image
                                src={item.logo}
                                alt={`Logo ${item.name}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </m.a>
                ))}
            </div>
        </div>
    );
}

export default function Sponsors() {
    return (
        <section id="sponsors" className="py-20  bg-[#0B1120]">
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
                            Mitra & Sponsor
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Terima kasih kepada para sponsor dan media partner yang telah mendukung perjalanan Tim Robotika UNS
                    </p>
                </m.div>

                {/* Sponsors */}
                <SponsorGrid
                    title="Sponsor"
                    subtitle="Partner yang mendukung kegiatan kami"
                    items={SPONSORS}
                    columns={4}
                />

                {/* Media Partners */}
                <SponsorGrid
                    title="Media Partner"
                    subtitle="Membantu menyebarluaskan kegiatan kami"
                    items={MEDIA_PARTNERS}
                    columns={5}
                />

                {/* Become Sponsor CTA */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-12 p-8 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl border border-blue-500/20"
                >
                    <h3 className="text-xl font-bold text-white mb-2">
                        Tertarik Menjadi Sponsor?
                    </h3>
                    <p className="text-slate-400 mb-6 max-w-lg mx-auto">
                        Dukung inovasi robotika dan jadilah bagian dari perjalanan prestasi Tim Robotika UNS
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                        Hubungi Kami
                    </a>
                </m.div>
            </div>
        </section>
    );
}
