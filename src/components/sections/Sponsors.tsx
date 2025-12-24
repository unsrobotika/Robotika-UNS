"use client";

import { m } from "motion/react";
import Image from "next/image";
import { SPONSORS, MEDIA_PARTNERS } from "@/lib/data";

interface CarouselItem {
    id: string;
    name: string;
    logo: string;
    link?: string;
}

interface InfiniteCarouselProps {
    title: string;
    subtitle: string;
    items: CarouselItem[];
    direction?: "left" | "right";
    speed?: number; // seconds per full cycle
}

// Reusable carousel item component
function CarouselCard({ item }: { item: CarouselItem }) {
    return (
        <a
            href={item.link || "#"}
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 bg-slate-800/50 rounded-xl p-3 border border-white/5 hover:border-blue-500/30 hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center group"
        >
            <div className="relative w-full h-full grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300">
                <Image
                    src={item.logo}
                    alt={`Logo ${item.name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 144px, 176px"
                />
            </div>
        </a>
    );
}

function InfiniteCarousel({
    title,
    subtitle,
    items,
    direction = "left",
    speed = 30,
}: InfiniteCarouselProps) {
    // 1. Create a "Base Group" that is guaranteed to be wider than any typical screen (e.g. > 3000px).
    // Sponsor items are approx 200px width (with gap).
    // We need at least 15-20 items to be safe.
    // So we repeat the source items enough times.
    const minItemsForScreenCoverage = 20;
    const repeatCount = Math.ceil(minItemsForScreenCoverage / items.length);
    const groupItems = Array(repeatCount).fill(items).flat();

    return (
        <div className="mb-16 last:mb-0">
            {/* Section Title */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400">{subtitle}</p>
            </div>

            {/* Carousel Container */}
            <div
                className="relative overflow-hidden group/carousel"
                style={{
                    maskImage: "linear-gradient(90deg, transparent, white 5%, white 95%, transparent)",
                    WebkitMaskImage: "linear-gradient(90deg, transparent, white 5%, white 95%, transparent)",
                }}
            >
                {/* 
                    Carousel Track with 2 IDENTICAL HUGE GROUPS.
                    - each "group" is massive (wider than screen).
                    - animation moves exactly 50% (width of one massive group).
                    - reset is seamless because group 2 replaces group 1.
                */}
                <div
                    className={`flex w-max group-hover/carousel:[animation-play-state:paused] ${direction === "left"
                            ? "animate-scroll-left"
                            : "animate-scroll-right"
                        }`}
                    style={{
                        animationDuration: `${speed * 2}s`, // Slower duration because the track is huge
                    }}
                >
                    {/* HUGE GROUP 1 */}
                    <div className="flex gap-6 pr-6">
                        {groupItems.map((item, index) => (
                            <CarouselCard
                                key={`g1-${item.id}-${index}`}
                                item={item}
                            />
                        ))}
                    </div>
                    {/* HUGE GROUP 2 (Duplicate) */}
                    <div className="flex gap-6 pr-6">
                        {groupItems.map((item, index) => (
                            <CarouselCard
                                key={`g2-${item.id}-${index}`}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Sponsors() {
    return (
        <section id="sponsors" className="py-20 bg-[#0B1120] overflow-hidden">
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
                        Terima kasih kepada para sponsor dan media partner yang
                        telah mendukung perjalanan Tim Robotika UNS
                    </p>
                </m.div>

                {/* Sponsors Carousel - scrolls LEFT */}
                <InfiniteCarousel
                    title="Sponsor"
                    subtitle="Partner yang mendukung kegiatan kami"
                    items={SPONSORS}
                    direction="left"
                    speed={80}
                />

                {/* Media Partners Carousel - scrolls RIGHT */}
                <InfiniteCarousel
                    title="Media Partner"
                    subtitle="Membantu menyebarluaskan kegiatan kami"
                    items={MEDIA_PARTNERS}
                    direction="right"
                    speed={90}
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
                        Dukung inovasi robotika dan jadilah bagian dari
                        perjalanan prestasi Tim Robotika UNS
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
