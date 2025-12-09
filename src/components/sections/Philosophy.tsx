
"use client";

import { FlipCard } from "@/components/ui/FlipCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PHILOSOPHY_CONTENT } from "@/lib/data";

export default function Philosophy() {
    return (
        <section className="py-32 px-4 w-full min-h-[80vh] flex flex-col justify-center items-center bg-[#0B1120]">
            <div className="max-w-7xl w-full flex flex-col items-center gap-12">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
                        OUR <span className="text-[--color-brand-cyan]">PHILOSOPHY</span>
                    </h2>
                </ScrollReveal>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full justify-center items-center">

                    {/* VISI CARD */}
                    <ScrollReveal className="w-full md:w-auto">
                        <FlipCard
                            title="VISI"
                            subtitle="Vision of Future"
                            description={PHILOSOPHY_CONTENT.visi}
                            className="w-full md:w-80 lg:w-96 h-96"
                            frontClassName="border-cyan-500/20 bg-gradient-to-br from-[#121c32] to-[#0B1120]"
                        />
                    </ScrollReveal>

                    {/* MISI CARD */}
                    <ScrollReveal className="w-full md:w-auto">
                        <FlipCard
                            title="MISI"
                            subtitle="Mission to Accomplish"
                            description={PHILOSOPHY_CONTENT.misi}
                            className="w-full md:w-80 lg:w-96 h-96"
                            frontClassName="border-purple-500/20 bg-gradient-to-br from-[#121c32] to-[#0B1120]"
                            backClassName="shadow-purple-900/10 border-purple-500/20"
                        />
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
