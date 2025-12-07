
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { HERO_CONTENT } from "@/lib/data";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 200]);
    const yBg = useTransform(scrollY, [0, 500], [0, 100]);
    const opacityBg = useTransform(scrollY, [0, 500], [1, 0.5]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 px-4"
        >
            {/* Background Image with Parallax & Fade */}
            <motion.div
                style={{ y: yBg, opacity: opacityBg }}
                className="absolute inset-0 z-0"
            >
                {/* Placeholder - User can swap src later */}
                <div className="relative w-full h-full">
                    <Image
                        src="/images/hero-bg-placeholder.jpg"
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark Overlay for text readability */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            </motion.div>

            {/* Gradient Fade to Bottom (Blueish) */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[--background] via-[--color-brand-purple]/20 to-transparent z-10" />

            {/* Content */}
            <motion.div
                style={{ y: yText }}
                className="relative z-20 text-center max-w-4xl"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-white font-[family-name:var(--font-custom)] drop-shadow-2xl"
                >
                    {HERO_CONTENT.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-200 font-light tracking-wide"
                >
                    {HERO_CONTENT.subtitle}
                </motion.p>
            </motion.div>
        </section>
    );
}
