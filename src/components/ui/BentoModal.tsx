"use client";

import { m, AnimatePresence } from "motion/react";
import { X, Trophy, Briefcase, Users } from "lucide-react";
import { DivisionItem } from "@/lib/data";
import Image from "next/image";

interface BentoModalProps {
    isOpen: boolean;
    onClose: () => void;
    division: DivisionItem | null;
    accentColor?: "cyan" | "purple"; // untuk NonTech (cyan) dan Tech (purple)
}

export default function BentoModal({
    isOpen,
    onClose,
    division,
    accentColor = "cyan",
}: BentoModalProps) {
    if (!division) return null;

    const Icon = division.icon;
    const bento = division.bentoContent;

    // Dynamic accent colors
    const accentClasses = {
        cyan: {
            text: "text-cyan-400",
            bg: "bg-cyan-500",
            border: "border-cyan-500/20",
            shadow: "shadow-cyan-500/10",
            gradient: "from-cyan-500 to-cyan-600",
            hoverGradient: "hover:from-cyan-400 hover:to-cyan-500",
            divider: "via-cyan-500/50",
            badge: "bg-cyan-500/20 text-cyan-400",
        },
        purple: {
            text: "text-purple-400",
            bg: "bg-purple-500",
            border: "border-purple-500/20",
            shadow: "shadow-purple-500/10",
            gradient: "from-purple-500 to-purple-600",
            hoverGradient: "hover:from-purple-400 hover:to-purple-500",
            divider: "via-purple-500/50",
            badge: "bg-purple-500/20 text-purple-400",
        },
    };

    const accent = accentClasses[accentColor];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <m.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none overflow-y-auto"
                    >
                        <div
                            className={`relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                                        rounded-3xl p-6 md:p-8 max-w-4xl w-full border ${accent.border} 
                                        shadow-2xl ${accent.shadow} pointer-events-auto my-8 max-h-[90vh] overflow-y-auto`}
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 
                                         hover:bg-white/20 transition-colors text-white z-10"
                                aria-label="Close popup"
                            >
                                <X size={20} />
                            </button>

                            {/* Bento Grid Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Row 1: Header - Full Width */}
                                <div className={`col-span-1 md:col-span-3 p-6 rounded-2xl bg-gradient-to-r ${accent.gradient} 
                                               flex items-center gap-4`}>
                                    <div className={`w-16 h-16 rounded-2xl bg-white/20 
                                                    flex items-center justify-center flex-shrink-0`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                                            {bento.headline}
                                        </h2>
                                        <p className="text-white/80 text-sm md:text-base mt-1">
                                            {division.shortDesc}
                                        </p>
                                    </div>
                                </div>

                                {/* Row 2: Icon/Logo (1 col) + Description (2 cols) */}
                                <div className="col-span-1 p-6 rounded-2xl bg-slate-800/50 border border-white/5
                                               flex flex-col items-center justify-center text-center">
                                    <div className={`w-24 h-24 rounded-full ${division.accent} 
                                                    flex items-center justify-center mb-4 ring-4 ring-white/10`}>
                                        <Icon className="w-12 h-12 text-white" />
                                    </div>
                                    <p className={`text-sm ${accent.text} font-medium`}>
                                        {division.stats}
                                    </p>
                                </div>

                                <div className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                                    <h3 className={`text-lg font-semibold ${accent.text} mb-3`}>Deskripsi</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {bento.description}
                                    </p>
                                    <div className={`h-px bg-gradient-to-r from-transparent ${accent.divider} to-transparent my-4`} />
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {bento.textContent}
                                    </p>
                                </div>

                                {/* Row 3: Text/Achievements (2 cols) + Image (1 col) */}
                                <div className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                                    {/* Achievements */}
                                    {bento.achievements && bento.achievements.length > 0 && (
                                        <div className="mb-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Trophy className={`w-5 h-5 ${accent.text}`} />
                                                <h3 className={`text-lg font-semibold ${accent.text}`}>Pencapaian</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {bento.achievements.map((achievement, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`px-3 py-1 rounded-full text-sm ${accent.badge}`}
                                                    >
                                                        {achievement}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Programs */}
                                    {bento.programs && bento.programs.length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <Briefcase className={`w-5 h-5 ${accent.text}`} />
                                                <h3 className={`text-lg font-semibold ${accent.text}`}>Program Kerja</h3>
                                            </div>
                                            <ul className="space-y-2">
                                                {bento.programs.map((program, idx) => (
                                                    <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${accent.bg}`} />
                                                        {program}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="col-span-1 p-4 rounded-2xl bg-slate-800/50 border border-white/5 
                                               flex items-center justify-center min-h-[200px] relative overflow-hidden">
                                    <div className="relative w-full h-full min-h-[180px]">
                                        <Image
                                            src={bento.image || "/images/placeholder.webp"}
                                            alt={division.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            loading="lazy"
                                            quality={75}
                                            className="object-cover rounded-xl"
                                        />
                                        {/* Fallback jika gambar error */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 
                                                       rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                            <Icon className={`w-16 h-16 ${accent.text}`} />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 4: Team Members - Full Width (jika ada) */}
                                {bento.teamMembers && bento.teamMembers.length > 0 && (
                                    <div className="col-span-1 md:col-span-3 p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Users className={`w-5 h-5 ${accent.text}`} />
                                            <h3 className={`text-lg font-semibold ${accent.text}`}>Anggota Tim</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-4">
                                            {bento.teamMembers.map((member, idx) => (
                                                <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-full pr-4">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 
                                                                   flex items-center justify-center overflow-hidden relative">
                                                        {/* Placeholder avatar */}
                                                        <span className="text-white text-sm font-medium">
                                                            {member.name.charAt(0)}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="text-white text-sm font-medium">{member.name}</p>
                                                        <p className="text-gray-400 text-xs">{member.role}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Close Button */}
                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={onClose}
                                    className={`px-8 py-3 bg-gradient-to-r ${accent.gradient} 
                                             rounded-full text-white font-semibold ${accent.hoverGradient}
                                             transition-all duration-300 shadow-lg ${accent.shadow}`}
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </m.div>
                </>
            )}
        </AnimatePresence>
    );
}
