
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Cpu, Activity } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TEAMS } from "@/lib/data";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export default function TeamCarousel() {
    const [items, setItems] = useState(TEAMS);
    const [selectedTeam, setSelectedTeam] = useState<typeof TEAMS[0] | null>(null);

    // Rotate content: Move first to last (slide left) or last to first. 
    // For simplicity, we just swap index 0, 1, 2.
    // Visual position: Index 0=Left, Index 1=Center (Active), Index 2=Right.

    // Actually, standard carousel logic for 3 items:
    // We want the user to click Left or Right to rotate effectively.
    // Let's keep 'items' array rotating.

    const rotateLeft = () => {
        setItems((prev) => {
            const newArr = [...prev];
            const first = newArr.shift();
            if (first) newArr.push(first);
            return newArr;
        });
    };

    const rotateRight = () => {
        setItems((prev) => {
            const newArr = [...prev];
            const last = newArr.pop();
            if (last) newArr.unshift(last);
            return newArr;
        });
    };

    const handleCardClick = (index: number) => {
        if (index === 1) {
            // Center item clicked -> Expand
            setSelectedTeam(items[1]);
        } else if (index === 0) {
            // Left item clicked -> Rotate Right to bring it to center? 
            // If Left is at 0, and we want it at 1. We shift Last to First (Rotate Right).
            // Wait: [0, 1, 2]. If I click 0. 0 moves to 1. 1 moves to 2. 2 moves to 0.
            // That is a Shift Right? NO.
            // [A, B, C] -> want A at center. [C, A, B]. That looks like unshift(pop).
            rotateRight();
        } else {
            // Right item clicked -> Rotate Left
            rotateLeft();
        }
    };

    // Positions for 3 items: Left, Center, Right
    const positions = [
        { x: "-50%", scale: 0.8, opacity: 0.5, zIndex: 10 }, // Left
        { x: "0%", scale: 1.1, opacity: 1, zIndex: 20 },     // Center
        { x: "50%", scale: 0.8, opacity: 0.5, zIndex: 10 },  // Right
    ];

    // We need to map the current 'items' to these visual positions.
    // Framer Motion `layout` can handle reordering but we want fixed slots.
    // We'll render 3 slots.

    return (
        <section className="py-32 px-4 w-full overflow-hidden bg-[--background]">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <ScrollReveal as="h2" className="text-4xl font-bold mb-4">
                    THE CHAMPIONS
                </ScrollReveal>
                <ScrollReveal as="p" className="text-gray-400">
                    Pencetak Prestasi, Kebanggaan Universitas
                </ScrollReveal>
            </div>

            {/* Carousel Container */}
            <div className="relative h-[500px] w-full flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                    {items.map((team, index) => {
                        // Determine visual state based on index
                        // item at index 0 => Left Style
                        // item at index 1 => Center Style (Active)
                        // item at index 2 => Right Style

                        const isCenter = index === 1;
                        const pos = positions[index];

                        return (
                            <motion.div
                                key={team.id}
                                layoutId={`team-card-${team.id}`}
                                initial={false} // Don't animate initial render
                                animate={{
                                    x: pos.x,
                                    scale: pos.scale,
                                    opacity: pos.opacity,
                                    zIndex: pos.zIndex,
                                    rotateY: isCenter ? 0 : index === 0 ? 15 : -15
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                onClick={() => handleCardClick(index)}
                                className={cn(
                                    "absolute top-1/2 left-1/2 w-[300px] md:w-[400px] aspect-[3/4] -translate-x-1/2 -translate-y-1/2",
                                    "rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl cursor-pointer flex flex-col overflow-hidden",
                                    isCenter ? "hover:border-[--color-brand-cyan]/50 transition-colors" : "brightness-50"
                                )}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    perspective: '1000px',
                                    // Fix for absolute positioning centering combined with motion x
                                    translateX: "-50%",
                                    translateY: "-50%",
                                }}
                            >
                                {/* Card Content (Preview) */}
                                <div className="relative h-1/2 w-full bg-white/5 p-4 flex items-center justify-center">
                                    {/* Placeholder for Logo/Image */}
                                    <div className="w-32 h-32 rounded-full bg-[--color-brand-cyan]/20 flex items-center justify-center text-4xl">
                                        🏆
                                    </div>
                                    <motion.div layoutId={`team-image-${team.id}`} className="absolute inset-0 z-0 opacity-20 bg-[url('/placeholder-texture.jpg')]" />
                                </div>

                                <div className="p-6 flex flex-col items-center justify-center flex-1 text-center">
                                    <motion.h3 layoutId={`team-name-${team.id}`} className="text-2xl font-bold mb-2 uppercase tracking-widest text-white">
                                        {team.name}
                                    </motion.h3>
                                    <p className="text-sm text-gray-400">{team.desc}</p>
                                </div>

                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Expanded Bento Modal */}
            <AnimatePresence>
                {selectedTeam && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                        <motion.div
                            layoutId={`team-card-${selectedTeam.id}`}
                            className="w-full max-w-5xl bg-[#0F172A] border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col h-[90vh] md:h-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedTeam(null)}
                                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 z-50"
                            >
                                <X size={24} />
                            </button>

                            {/* Bento Grid Layout */}
                            <div className="grid grid-rows-[auto_1fr_1fr] md:grid-rows-[auto_1fr] md:grid-cols-2 gap-4 p-6 h-full">

                                {/* Row 1: Header (Full Width) */}
                                <div className="md:col-span-2 bg-white/5 rounded-2xl p-8 flex flex-col items-start justify-center relative overflow-hidden group">
                                    <motion.h2 layoutId={`team-name-${selectedTeam.id}`} className="text-5xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-[--color-brand-cyan] z-10">
                                        {selectedTeam.name}
                                    </motion.h2>
                                    <p className="text-xl text-gray-400 mt-2 z-10">{selectedTeam.desc}</p>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[--color-brand-cyan] blur-[100px] opacity-20" />
                                </div>

                                {/* Row 2 Left: Description with Icon */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white/5 rounded-2xl p-6 flex flex-col justify-between"
                                >
                                    <Activity className="text-[--color-brand-purple] mb-4" size={40} />
                                    <h4 className="text-xl font-bold mb-2">Team Mission</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        {selectedTeam.fullDesc}
                                    </p>
                                </motion.div>

                                {/* Row 2 Right: Large Logo Area */}
                                <motion.div
                                    layoutId={`team-image-${selectedTeam.id}`}
                                    className="bg-[--color-brand-cyan]/10 rounded-2xl p-6 flex items-center justify-center min-h-[200px]"
                                >
                                    {/* Placeholder for actual team logo */}
                                    <Trophy size={80} className="text-[--color-brand-cyan]" />
                                </motion.div>

                                {/* Row 3 Left: Action Image */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-gray-800 rounded-2xl p-0 overflow-hidden relative min-h-[200px]"
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold">
                                        [ACTION IMAGE]
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-[--color-brand-cyan] text-black text-xs font-bold px-2 py-1 rounded">LIVE ACTION</span>
                                    </div>
                                </motion.div>

                                {/* Row 3 Right: Technical Specs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-white/5 rounded-2xl p-6"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <Cpu className="text-[--color-brand-purple]" size={24} />
                                        <h4 className="text-xl font-bold">Tech Specs</h4>
                                    </div>
                                    <ul className="space-y-2 text-gray-300">
                                        {selectedTeam.specs.split(',').map((spec, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[--color-brand-cyan] mt-2" />
                                                {spec.trim()}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
