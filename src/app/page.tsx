
"use client";

import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import TeamRadial from "@/components/sections/TeamRadial";
import NonTechDivisions from "@/components/sections/NonTechDivisions";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Footer from "@/components/sections/Footer";
import { TECH_DIVISIONS } from "@/lib/data";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";

export default function Home() {

    // Helper to map data to Card component
    const mapToCards = (data: any[], type: "division" | "team") => {
        return data.map((item, index) => {
            // Determine content based on type (Division vs Team)
            const content = (
                <div className="space-y-4">
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
                        {item.description || "Part of the Robotika UNS family."}
                    </p>
                    {item.socials && (
                        <div className="flex gap-2">
                            {/* Simple social links placeholder */}
                            {Object.entries(item.socials).map(([key, url]) => (
                                <a key={key} href={url as string} target="_blank" className="text-blue-500 hover:underline capitalize">{key}</a>
                            ))}
                        </div>
                    )}
                </div>
            );

            return (
                <Card
                    key={item.id || index}
                    card={{
                        category: type === "division" ? "Divisi" : item.role || "Member",
                        title: item.title || item.name,
                        src: item.image || item.logo || "/images/hero-bg-placeholder.jpg",
                        content: content
                    }}
                    index={index}
                />
            );
        });
    };

    const techCards = mapToCards(TECH_DIVISIONS, "division");


    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative bg-[#0B1120]">

            {/* 1. Hero Section (Image BG + Fade) */}
            <div id="hero" className="w-full bg-slate-950 border-t border-white/5 py-20" >
                <Hero />
            </div>

            {/* 2. Philosophy Section (About) */}
            <div id="philosophy" className="w-full bg-[#0B1120]">
                <Philosophy />
            </div>

            {/* 3. Divisi Non-Teknis */}
            <div id="divisions" className="w-full bg-slate-900 border-t border-white/5">
                <NonTechDivisions />
            </div>

            {/* 4. Divisi Teknis */}
            <div className="w-full bg-[#0B1120] border-t border-white/5 py-20">
                <ScrollReveal className="w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[--color-brand-purple]">DIVISI TEKNIS</h2>
                    <p className="text-center text-gray-400 mb-10 text-xl">Engineers of the Future</p>
                    <Carousel items={techCards} />
                </ScrollReveal>
            </div>

            {/* 5. Our Team (Radial Layout) */}
            <div id="team" className="w-full border-t border-white/5">
                <TeamRadial />
            </div>

            {/* 6. Footer */}
            <Footer />

        </main>
    );
}
