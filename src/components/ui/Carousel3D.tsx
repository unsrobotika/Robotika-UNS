
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Cpu, Activity, ArrowRight, ArrowLeft } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ScrollReveal from "@/components/ui/ScrollReveal";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface CarouselItem {
    id: string;
    name?: string;
    title?: string;
    desc?: string;
    shortDesc?: string;
    fullDesc?: string;
    details?: string;
    specs?: string;
    stats?: string;
    image?: string;
    icon?: any;
    accent?: string;
    [key: string]: any;
}

interface Carousel3DProps {
    items: CarouselItem[];
    title: string;
    subtitle: string;
    className?: string;
}

export default function Carousel3D({ items, title, subtitle, className }: Carousel3DProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(1000); // Default fallback

    // Update container width for centering calculations
    useEffect(() => {
        if (!containerRef.current) return;
        const updateWidth = () => setContainerWidth(containerRef.current?.offsetWidth || 1000);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const CARD_WIDTH = 300; // Base width of a card
    const GAP = 40; // Spacing between cards

    // Calculate X offset to center the active item
    // Center of container = containerWidth / 2
    // Center of active item relative to start of track = activeIndex * (W+G) + W/2
    // Track shift = CenterContainer - CenterItem
    const trackX = (containerWidth / 2) - (activeIndex * (CARD_WIDTH + GAP) + CARD_WIDTH / 2);

    const handleNext = () => {
        if (activeIndex < items.length - 1) setActiveIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (activeIndex > 0) setActiveIndex(prev => prev - 1);
    };

    const getDisplayData = (item: CarouselItem) => {
        return {
            header: item.name || item.title || "Untitled",
            subheader: item.desc || item.shortDesc || "",
            body: item.fullDesc || item.details || "",
            specs: item.specs || item.stats || "",
            accent: item.accent || "bg-cyan-500",
            Icon: item.icon || Trophy
        };
    };

    return (
        <section className={cn("py-24 px-4 w-full overflow-hidden flex flex-col items-center", className)}>
            <div className="max-w-7xl mx-auto text-center mb-16">
                <ScrollReveal as="h2" className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                    {title}
                </ScrollReveal>
                <ScrollReveal as="p" className="text-gray-400 max-w-2xl mx-auto">
                    {subtitle}
                </ScrollReveal>
            </div>

            {/* Carousel Container */}
            <div ref={containerRef} className="relative w-full max-w-[1400px] h-[550px] flex items-center justify-center overflow-hidden">

                {/* Desktop Navigation */}
                <button
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    className="absolute left-4 md:left-10 z-40 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white hidden md:flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ArrowLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    disabled={activeIndex === items.length - 1}
                    className="absolute right-4 md:right-10 z-40 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white hidden md:flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ArrowRight size={24} />
                </button>

                {/* TRACK */}
                <motion.div
                    className="flex items-center absolute left-0"
                    animate={{ x: trackX }}
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                    style={{ gap: GAP }}
                >
                    {items.map((item, index) => {
                        const isActive = index === activeIndex;
                        const data = getDisplayData(item);

                        return (
                            <motion.div
                                key={item.id}
                                animate={{
                                    scale: isActive ? 1.1 : 0.9,
                                    opacity: isActive ? 1 : 0.5,
                                    filter: isActive ? "blur(0px)" : "blur(2px)"
                                }}
                                className={cn(
                                    "relative shrink-0 rounded-3xl p-1 cursor-pointer transition-all duration-300",
                                    "bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-sm",
                                    isActive ? "z-20 border-white/30" : "z-10 hover:opacity-70"
                                )}
                                style={{ width: CARD_WIDTH, height: CARD_WIDTH * 1.4 }}
                                onClick={() => {
                                    if (isActive) setSelectedItem(item);
                                    else setActiveIndex(index);
                                }}
                            >
                                <div className="w-full h-full bg-[#0F172A] rounded-[20px] overflow-hidden flex flex-col relative group">
                                    {/* Image Area */}
                                    <div className="h-3/5 w-full relative flex items-center justify-center overflow-hidden">
                                        <div className={cn("absolute inset-0 opacity-20 transition-opacity", data.accent.includes('bg-') ? data.accent : 'bg-cyan-500')} />
                                        <div className={cn("relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl", data.accent.includes('bg-') ? data.accent : 'bg-cyan-500')}>
                                            <data.Icon size={40} />
                                        </div>
                                    </div>

                                    {/* Text Area */}
                                    <div className="flex-1 p-6 flex flex-col items-center text-center bg-black/20">
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{data.header}</h3>
                                        <p className="text-sm text-gray-400 line-clamp-3">{data.subheader}</p>
                                    </div>

                                    {/* Hint */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">View Details</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden gap-8 mt-8">
                <button onClick={handlePrev} disabled={activeIndex === 0} className="p-3 rounded-full bg-white/10 text-white disabled:opacity-30"><ArrowLeft /></button>
                <button onClick={handleNext} disabled={activeIndex === items.length - 1} className="p-3 rounded-full bg-white/10 text-white disabled:opacity-30"><ArrowRight /></button>
            </div>


            {/* MODAL */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-0"
                            onClick={() => setSelectedItem(null)}
                        />

                        <motion.div
                            layoutId={`modal-${selectedItem.id}`} // Disconnected from card layoutId to avoid complex shared element transitions if track is clipped
                            className="w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col max-h-[90vh] z-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 z-50 transition-colors text-white"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid md:grid-cols-2 h-full">
                                <div className="relative bg-gradient-to-br from-slate-800 to-black p-8 flex flex-col justify-center overflow-hidden min-h-[300px]">
                                    {(() => {
                                        const data = getDisplayData(selectedItem);
                                        return (
                                            <>
                                                <div className={cn("absolute -top-20 -right-20 w-80 h-80 blur-[100px] opacity-30 pointer-events-none", data.accent.includes('bg-') ? data.accent : "bg-cyan-500")} />
                                                <div className="relative z-10">
                                                    <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6", data.accent.includes('bg-') ? data.accent : "bg-cyan-500")}>
                                                        <data.Icon size={32} />
                                                    </div>
                                                    <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4 leading-tight">{data.header}</h2>
                                                    <p className="text-xl text-gray-400 border-l-2 border-[--color-brand-cyan] pl-4">{data.subheader}</p>
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>

                                <div className="p-8 md:p-12 overflow-y-auto bg-slate-950/50">
                                    {(() => {
                                        const data = getDisplayData(selectedItem);
                                        return (
                                            <div className="space-y-8">
                                                <div>
                                                    <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-semibold">Description</h4>
                                                    <p className="text-gray-300 leading-relaxed text-lg">{data.body}</p>
                                                </div>
                                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                                    <h4 className="text-sm uppercase tracking-widest text-[--color-brand-cyan] mb-2 font-semibold flex items-center gap-2">
                                                        <Cpu size={16} /> Specs / Focus
                                                    </h4>
                                                    <p className="text-white font-mono">{data.specs}</p>
                                                </div>
                                            </div>
                                        )
                                    })()}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
