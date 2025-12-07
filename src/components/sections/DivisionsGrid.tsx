
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Megaphone, FileText, Wallet, X } from "lucide-react"; // Import icons used in data
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Helper for tailwind classes
function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface Division {
    id: string;
    title: string;
    icon: any;
    shortDesc: string;
    details: string;
    stats: string;
    accent: string;
}

interface DivisionsGridProps {
    title: string;
    subtitle: string;
    items: Division[];
    className?: string;
}

export default function DivisionsGrid({ title, subtitle, items, className }: DivisionsGridProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedItem = items.find((item) => item.id === selectedId);

    return (
        <section className={cn("py-24 px-4 w-full", className)}>
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16 text-center">
                    <ScrollReveal as="h2" className="text-3xl md:text-5xl font-bold mb-4">
                        {title}
                    </ScrollReveal>
                    <ScrollReveal as="p" className="text-gray-400 max-w-2xl mx-auto">
                        {subtitle}
                    </ScrollReveal>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <motion.div
                            layoutId={`card-${item.id}`}
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div layoutId={`icon-${item.id}`} className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white", item.accent)}>
                                <item.icon size={24} />
                            </motion.div>
                            <motion.h3 layoutId={`title-${item.id}`} className="text-xl font-bold mb-2">
                                {item.title}
                            </motion.h3>
                            <motion.p layoutId={`short-${item.id}`} className="text-sm text-gray-400">
                                {item.shortDesc}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>

                {/* Expanded Overlay */}
                <AnimatePresence>
                    {selectedId && selectedItem && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            >
                                {/* Make this a separate component for cleanliness if needed, but inline is fine for matching layoutId */}
                                <motion.div
                                    layoutId={`card-${selectedId}`}
                                    className="w-full max-w-lg bg-[#0F172A] border border-white/10 rounded-3xl p-8 relative shadow-2xl overflow-hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-20"
                                    >
                                        <X size={20} />
                                    </button>

                                    <div className="relative z-10">
                                        <motion.div layoutId={`icon-${selectedId}`} className={cn("w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg", selectedItem.accent)}>
                                            <selectedItem.icon size={32} />
                                        </motion.div>

                                        <motion.h3 layoutId={`title-${selectedId}`} className="text-3xl font-bold mb-2">
                                            {selectedItem.title}
                                        </motion.h3>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <p className="text-lg text-[--color-brand-cyan] font-medium mb-4">
                                                {selectedItem.stats}
                                            </p>
                                            <p className="text-gray-300 leading-relaxed mb-6">
                                                {selectedItem.details}
                                            </p>

                                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                                <p className="text-sm text-gray-400 italic">
                                                    "Click anywhere outside to close"
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* Hidden element to maintain layout structure for short desc if needed, or just let it vanish */}
                                        {/* <motion.p layoutId={`short-${selectedId}`} className="hidden">{selectedItem.shortDesc}</motion.p> */}
                                    </div>

                                    {/* Decorative glow */}
                                    <div className={cn("absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none", selectedItem.accent)} />
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
