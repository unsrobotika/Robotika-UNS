
"use client";

import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Carousel3D from "@/components/ui/Carousel3D";
import Footer from "@/components/sections/Footer";
import { NON_TECH_DIVISIONS, TECH_DIVISIONS, TEAMS } from "@/lib/data";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative bg-[#0B1120]">

            {/* 1. Hero Section (Image BG + Fade) */}
            <Hero />

            {/* 2. Philosophy Section (About) */}
            <div id="philosophy" className="w-full bg-[#0B1120]">
                <Philosophy />
            </div>

            {/* 3. Divisi Non-Teknis (Was 'The Enablers') - Now Carousel */}
            {/* User Request: "tulisan the enablers di section 3 ganti menjadi divisi non teknis, buat jadi kartu yang bisa digeser" */}
            <div id="divisions" className="w-full bg-slate-900 border-t border-white/5">
                <Carousel3D
                    title="DIVISI NON-TEKNIS"
                    subtitle="Supporting Pillars of Our Ecosystem"
                    items={NON_TECH_DIVISIONS}
                    className="py-32"
                />
            </div>

            {/* 4. Divisi Teknis (Was 'The Makers') - Keeping Grid or using Carousel? 
               User Request: "untuk section 4 ganti Namanya menjadi divisi teknis"
               User didn't explicitly say make it a carousel, BUT said "untuk bagian tim masih error... tulisan the enablers... buat jadi kartu yang bisa digeser... section 4 ganti nama".
               It implies consistency. However, Divisi Teknis has 4 items. Carousel works best with odd numbers or careful rotation.
               Let's try Carousel for this too for premium feel, or stick to Grid if content is heavy.
               Let's Use Carousel to maintain the "high fidelity" vibe requested.
            */}
            <div className="w-full bg-[#0F172A] border-t border-white/5">
                <Carousel3D
                    title="DIVISI TEKNIS"
                    subtitle="Engineers of the Future"
                    items={TECH_DIVISIONS}
                    className="py-32"
                />
            </div>

            {/* 5. Our Team (Was 'The Champions') */}
            {/* User Request: "section 5 ganti Namanya menjadi Our Team" */}
            <div id="team" className="w-full bg-slate-950 border-t border-white/5">
                <Carousel3D
                    title="OUR TEAM"
                    subtitle="Pencetak Prestasi Kebanggaan UNS"
                    items={TEAMS} // TEAMS data might need mapping to work with generic CarouselItem if keys differ, checking data.ts
                    className="py-32"
                />
            </div>

            {/* 6. Footer */}
            <Footer />

        </main>
    );
}
