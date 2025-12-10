"use client";

import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import TeamRadial from "@/components/sections/TeamRadial";
import NonTechDivisions from "@/components/sections/NonTechDivisions";
import TechDivisions from "@/components/sections/TechDivisions";
import Footer from "@/components/sections/Footer";
import AIChat from "@/components/sections/AIChat";

export default function Home() {
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
            <div className="w-full bg-[#0B1120] border-t border-white/5">
                <TechDivisions />
            </div>

            {/* 5. Our Team (Radial Layout) */}
            <div id="team" className="w-full border-t border-white/5">
                <TeamRadial />
            </div>

            {/* 6. Footer */}
            <Footer />

            {/* AI Chat - Kanan Bawah */}
            <AIChat />

        </main>
    );
}
