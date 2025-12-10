"use client";

import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { NON_TECH_DIVISIONS } from "@/lib/data";
import { X } from "lucide-react";

// Tipe untuk item divisi
interface DivisionItem {
    id: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    shortDesc: string;
    details: string;
    stats: string;
    accent: string;
    image: string;
    name: string;
    desc: string;
    fullDesc: string;
    specs: string;
}

export default function NonTechDivisions() {
    const targetRef = useRef<HTMLDivElement>(null);
    const [selectedDivision, setSelectedDivision] = useState<DivisionItem | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Duplikasi cards untuk efek looping
    const duplicatedDivisions = [
        ...(NON_TECH_DIVISIONS as DivisionItem[]),
    ];

    // Animasi horizontal scroll: mulai dari kanan (100%) ke kiri (-100%)
    // Nilai awal positif = card di kanan viewport, nilai akhir negatif = card bergerak ke kiri
    const x = useTransform(scrollYProgress, [0, 1], ["40%", "-20%"]);

    // Handler klik card
    const handleCardClick = (division: DivisionItem) => {
        setSelectedDivision(division);
        setIsPopupOpen(true);
    };

    // Tutup popup
    const closePopup = () => {
        setIsPopupOpen(false);
        setTimeout(() => setSelectedDivision(null), 300);
    };

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-slate-900">
            {/* Sticky container untuk horizontal scroll */}
            <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
                {/* Header */}
                <div className="text-center mb-8 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-[--color-brand-cyan] mb-4">
                        DIVISI NON-TEKNIS
                    </h2>
                    <p className="text-xl text-gray-400">
                        Supporting Pillars of Our Ecosystem
                    </p>
                </div>

                {/* Horizontal scroll cards - looping dengan duplikasi */}
                <motion.div style={{ x }} className="flex gap-6 px-8">
                    {duplicatedDivisions.map((division, index) => (
                        <DivisionCard
                            key={`${division.id}-${index}`}
                            division={division}
                            onClick={() => handleCardClick(division)}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {isPopupOpen && selectedDivision && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closePopup}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                                          rounded-3xl p-8 max-w-lg w-full border border-cyan-500/20 
                                          shadow-2xl shadow-cyan-500/10 pointer-events-auto">
                                {/* Close button */}
                                <button
                                    onClick={closePopup}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 
                                             hover:bg-white/20 transition-colors text-white"
                                    aria-label="Close popup"
                                >
                                    <X size={20} />
                                </button>

                                {/* Division Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className={`w-20 h-20 rounded-full ${selectedDivision.accent} 
                                                   flex items-center justify-center ring-4 ring-white/20`}>
                                        {selectedDivision.icon && (
                                            <selectedDivision.icon className="w-10 h-10 text-white" />
                                        )}
                                    </div>
                                </div>

                                {/* Division Info */}
                                <div className="text-center space-y-4">
                                    <h3 className="text-3xl font-bold text-white">{selectedDivision.title}</h3>
                                    <p className="text-cyan-400 font-medium text-lg">{selectedDivision.shortDesc}</p>

                                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-6"></div>

                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {selectedDivision.fullDesc}
                                    </p>

                                    {selectedDivision.specs && (
                                        <div className="mt-6 p-4 bg-black/30 rounded-xl border border-white/5">
                                            <p className="text-gray-400 text-sm">
                                                <span className="text-cyan-400 font-semibold">Info: </span>
                                                {selectedDivision.specs}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Action button */}
                                <div className="mt-8 flex justify-center">
                                    <button
                                        onClick={closePopup}
                                        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 
                                                 rounded-full text-white font-semibold hover:from-cyan-400 
                                                 hover:to-cyan-500 transition-all duration-300 
                                                 shadow-lg shadow-cyan-500/30"
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}

// Card Component
interface DivisionCardProps {
    division: DivisionItem;
    onClick: () => void;
}

const DivisionCard = ({ division, onClick }: DivisionCardProps) => {
    const Icon = division.icon;

    return (
        <motion.div
            onClick={onClick}
            whileHover={{ scale: 1.02, y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="group relative h-[400px] w-[350px] flex-shrink-0 overflow-hidden rounded-3xl 
                       bg-gradient-to-br from-slate-800 to-slate-900 cursor-pointer
                       border border-white/10 hover:border-cyan-500/30 transition-all duration-300
                       shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
        >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 ${division.accent} opacity-10 group-hover:opacity-20 transition-opacity`}></div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${division.accent} 
                               flex items-center justify-center mb-6 
                               group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {division.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-400 text-base mb-auto">
                    {division.shortDesc}
                </p>

                {/* Stats badge */}
                <div className="mt-4 px-4 py-2 bg-white/5 rounded-full inline-flex items-center w-fit">
                    <span className="text-sm text-gray-300">{division.stats}</span>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        Klik untuk detail →
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-2xl"></div>
        </motion.div>
    );
};
