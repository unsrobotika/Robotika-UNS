import dynamic from 'next/dynamic';

// Loading skeleton untuk sections
const SectionSkeleton = ({ height = "h-screen" }: { height?: string }) => (
    <div className={`${height} w-full bg-slate-900/50 animate-pulse flex items-center justify-center`}>
        <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
    </div>
);

// Dynamic imports untuk heavy components - mengurangi initial bundle size
const Header = dynamic(() => import("@/components/sections/Header"), {
    ssr: true, // Keep header rendered on server for SEO
});

const Hero = dynamic(() => import("@/components/sections/Hero"), {
    loading: () => <SectionSkeleton height="h-screen" />,
});

const Philosophy = dynamic(() => import("@/components/sections/Philosophy"), {
    loading: () => <SectionSkeleton height="h-[50vh]" />,
});

const UnifiedDivisions = dynamic(() => import("@/components/sections/UnifiedDivisions"), {
    loading: () => <SectionSkeleton height="h-screen" />,
});

const TeamRadial = dynamic(() => import("@/components/sections/TeamRadial"), {
    loading: () => <SectionSkeleton height="h-[80vh]" />,
});

const Gallery = dynamic(() => import("@/components/sections/Gallery"), {
    loading: () => <SectionSkeleton height="h-[60vh]" />,
});

const Blog = dynamic(() => import("@/components/sections/Blog"), {
    loading: () => <SectionSkeleton height="h-[60vh]" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
    loading: () => <SectionSkeleton height="h-[50vh]" />,
});

const Sponsors = dynamic(() => import("@/components/sections/Sponsors"), {
    loading: () => <SectionSkeleton height="h-[40vh]" />,
});

const Registration = dynamic(() => import("@/components/sections/Registration"), {
    loading: () => <SectionSkeleton height="h-[50vh]" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
    loading: () => <SectionSkeleton height="h-[50vh]" />,
});

const Footer = dynamic(() => import("@/components/sections/Footer"), {
    loading: () => <SectionSkeleton height="h-40" />,
});

const AIChat = dynamic(() => import("@/components/sections/AIChat"), {
    // Client component, hydrates automatically
});

export default function Home() {
    return (
        <>
            {/* Header - Sticky Navigation */}
            <Header />

            <main className="flex min-h-screen flex-col items-center justify-between relative bg-[#0B1120]">

                {/* 1. Hero Section */}
                <section id="hero" className="w-full">
                    <Hero />
                </section>

                {/* 2. Philosophy Section (Tentang Kami) */}
                <section id="philosophy" className="w-full bg-[#0B1120]">
                    <Philosophy />
                </section>

                {/* 3. Unified Divisions (Teknis & Non-Teknis) */}
                <section id="divisions" className="w-full bg-slate-900 border-t border-white/5">
                    <UnifiedDivisions />
                </section>

                {/* 4. Our Team (Tim Robot) */}
                <section id="team" className="w-full border-t border-white/5">
                    <TeamRadial />
                </section>

                {/* 5. Gallery Section */}
                <section id="gallery" className="w-full border-t border-white/5">
                    <Gallery />
                </section>

                {/* 6. Blog Section */}
                <section id="blog" className="w-full border-t border-white/5">
                    <Blog />
                </section>

                {/* 7. FAQ Section */}
                <section id="faq" className="w-full border-t border-white/5">
                    <FAQ />
                </section>

                {/* 8. Sponsors & Media Partners */}
                <section id="sponsors" className="w-full border-t border-white/5">
                    <Sponsors />
                </section>

                {/* 9. Registration CTA */}
                <section id="registration" className="w-full border-t border-white/5">
                    <Registration />
                </section>

                {/* 10. Contact Section */}
                <section id="contact" className="w-full border-t border-white/5">
                    <Contact />
                </section>

                {/* 11. Footer */}
                <Footer />

                {/* AI Chat - Kanan Bawah */}
                <AIChat />

            </main>
        </>
    );
}
