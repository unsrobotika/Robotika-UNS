"use client";

import { m, AnimatePresence } from "motion/react";
import { X, Trophy, Bot, Medal, Users } from "lucide-react";
import { TeamItem } from "@/lib/data";
import Image from "next/image";

interface TeamBentoModalProps {
    isOpen: boolean;
    onClose: () => void;
    team: TeamItem | null;
}

export default function TeamBentoModal({
    isOpen,
    onClose,
    team,
}: TeamBentoModalProps) {
    if (!team) return null;

    const bento = team.bentoContent;

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
                            className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                                        rounded-3xl p-6 md:p-8 max-w-4xl w-full border border-cyan-500/20 
                                        shadow-2xl shadow-cyan-500/10 pointer-events-auto my-8 max-h-[90vh] overflow-y-auto"
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
                                <div className="col-span-1 md:col-span-3 p-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 
                                               flex items-center gap-4">
                                    <div className="w-20 h-20 rounded-2xl bg-white/20 
                                                    flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                                        <Image
                                            src={team.logo || "/images/placeholder.webp"}
                                            alt={team.name}
                                            width={72}
                                            height={72}
                                            sizes="72px"
                                            loading="lazy"
                                            quality={75}
                                            className="rounded-xl object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                                            {bento.headline}
                                        </h2>
                                        <p className="text-white/80 text-sm md:text-base mt-1">
                                            {team.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Row 2: Robot Image (1 col) + Description (2 cols) */}
                                <div className="col-span-1 p-4 rounded-2xl bg-slate-800/50 border border-white/5
                                               flex items-center justify-center min-h-[200px] relative overflow-hidden">
                                    <div className="relative w-full h-full min-h-[180px]">
                                        <Image
                                            src={team.image || "/images/placeholder.webp"}
                                            alt={`${team.name} Robot`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            loading="lazy"
                                            quality={75}
                                            className="object-cover rounded-xl"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Tentang Tim</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {bento.description}
                                    </p>
                                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-4" />
                                    <p className="text-gray-400 text-sm">
                                        {team.fullDesc}
                                    </p>
                                </div>

                                {/* Row 3: Robot Specs (2 cols) + Competitions (1 col) */}
                                <div className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Bot className="w-5 h-5 text-cyan-400" />
                                        <h3 className="text-lg font-semibold text-cyan-400">Spesifikasi Robot</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {bento.robotSpecs.map((spec, idx) => (
                                            <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="col-span-1 p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Medal className="w-5 h-5 text-cyan-400" />
                                        <h3 className="text-lg font-semibold text-cyan-400">Kompetisi</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {bento.competitions.map((comp, idx) => (
                                            <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                                                {comp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Row 4: Achievements - Full Width */}
                                {bento.achievements && bento.achievements.length > 0 && (
                                    <div className="col-span-1 md:col-span-3 p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Trophy className="w-5 h-5 text-cyan-400" />
                                            <h3 className="text-lg font-semibold text-cyan-400">Pencapaian</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {bento.achievements.map((achievement, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-500/20 to-purple-500/20 
                                                             text-cyan-300 border border-cyan-500/30"
                                                >
                                                    🏆 {achievement}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Row 5: Team Members - Full Width */}
                                {bento.teamMembers && bento.teamMembers.length > 0 && (
                                    <div className="col-span-1 md:col-span-3 p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Users className="w-5 h-5 text-cyan-400" />
                                            <h3 className="text-lg font-semibold text-cyan-400">Anggota Tim</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-4">
                                            {bento.teamMembers.map((member, idx) => (
                                                <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-full pr-4">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 
                                                                   flex items-center justify-center overflow-hidden">
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
                                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 
                                             rounded-full text-white font-semibold hover:from-cyan-400 hover:to-cyan-500
                                             transition-all duration-300 shadow-lg shadow-cyan-500/30"
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
