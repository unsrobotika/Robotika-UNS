
"use client";

import { FlipCard } from "@/components/ui/FlipCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PHILOSOPHY_CONTENT, ABOUT_US_CONTENT } from "@/lib/data";

export default function Philosophy() {
    return (
        <section id="about" className="relative py-20 px-4 w-full flex flex-col justify-center items-center overflow-hidden">
            {/* Background gradient - same as TeamRadial */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0B1120] to-slate-950"></div>
            <div className="relative z-10 max-w-7xl w-full flex flex-col items-center gap-10">

                {/* Section Title */}
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {ABOUT_US_CONTENT.title}
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-center">
                        {ABOUT_US_CONTENT.subtitle}
                    </p>
                </ScrollReveal>

                {/* Description Text Box */}
                <ScrollReveal className="w-full max-w-3xl">
                    <div className="relative p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-sm">
                        {/* Decorative gradient */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

                        <p className="relative text-slate-300 text-base md:text-lg leading-relaxed text-center">
                            {ABOUT_US_CONTENT.description}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Visi Misi Cards */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full justify-center items-center">

                    {/* VISI CARD */}
                    <ScrollReveal className="w-full md:w-auto">
                        <div className="flex justify-center">
                            <FlipCard
                                title="VISI"
                                subtitle="Vision of Future"
                                description={PHILOSOPHY_CONTENT.visi}
                                className="w-72 lg:w-80 h-80"
                                frontClassName="border-cyan-500/20 bg-gradient-to-br from-[#121c32] to-[#0B1120]"
                            />
                        </div>
                    </ScrollReveal>

                    {/* MISI CARD */}
                    <ScrollReveal className="w-full md:w-auto">
                        <div className="flex justify-center">
                            <FlipCard
                                title="MISI"
                                subtitle="Mission to Accomplish"
                                description={PHILOSOPHY_CONTENT.misi}
                                className="w-72 lg:w-80 h-80"
                                frontClassName="border-purple-500/20 bg-gradient-to-br from-[#121c32] to-[#0B1120]"
                                backClassName="shadow-purple-900/10 border-purple-500/20"
                            />
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
