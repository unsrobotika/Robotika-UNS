"use client";

import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RadialIntro } from '@/components/animate-ui/components/community/radial-intro';
import { TEAMS } from '@/lib/data';
import { X } from 'lucide-react';

// Definisikan tipe untuk item team
interface TeamItem {
    id: string;
    name: string;
    logo: string;
    image: string;
    desc: string;
    fullDesc: string;
    specs: string;
    src?: string; // untuk RadialIntro
}

// Transform data TEAMS ke format yang cocok untuk RadialIntro
const orbitItems = TEAMS.map((team) => ({
    id: team.id,
    name: team.name,
    src: team.logo, // Gunakan logo untuk orbit
    image: team.image,
    desc: team.desc,
    fullDesc: team.fullDesc,
    specs: team.specs,
}));

export default function TeamRadial() {
    const [selectedTeam, setSelectedTeam] = useState<TeamItem | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Handler untuk klik pada orbit item
    const handleTeamClick = (teamId: string) => {
        const team = orbitItems.find((t) => t.id === teamId);
        if (team) {
            setSelectedTeam(team as TeamItem);
            setIsPopupOpen(true);
        }
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setTimeout(() => setSelectedTeam(null), 300);
    };

    return (
        <section className="relative py-20 px-4 w-full min-h-[80vh] flex flex-col justify-center items-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0B1120] to-slate-950"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-12">
                {/* Title */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        OUR <span className="text-[--color-brand-cyan]">TEAM</span>
                    </h2>
                    <p className="text-xl text-gray-400">Tim Kompetisi Robot Indonesia</p>
                </div>

                {/* Radial Orbit Container */}
                <div className="relative flex items-center justify-center">
                    {/* Decorative rings */}
                    <div className="absolute w-[340px] h-[340px] rounded-full border border-cyan-500/20"></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/10"></div>
                    <div className="absolute w-[460px] h-[460px] rounded-full border border-cyan-500/5"></div>

                    {/* RadialIntro with clickable wrapper */}
                    <div className="relative">
                        <RadialIntro
                            orbitItems={orbitItems}
                            stageSize={320}
                            imageSize={105}
                        />

                        {/* Invisible clickable overlay for each orbit item */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {orbitItems.map((item, index) => {
                                const angle = (index * (360 / orbitItems.length) - 90) * (Math.PI / 180);
                                const radius = 160; // Half of stageSize
                                const x = Math.cos(angle) * radius;
                                const y = Math.sin(angle) * radius;

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleTeamClick(item.id)}
                                        className="absolute w-20 h-20 rounded-full pointer-events-auto cursor-pointer 
                                                 hover:bg-cyan-500/20 transition-all duration-300
                                                 hover:ring-2 hover:ring-cyan-400/50 hover:scale-110"
                                        style={{
                                            transform: `translate(${x}px, ${y}px)`,
                                        }}
                                        aria-label={`View ${item.name} details`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Team labels */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {orbitItems.map((team) => (
                        <button
                            key={team.id}
                            onClick={() => handleTeamClick(team.id)}
                            className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10
                                     hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300
                                     text-gray-300 hover:text-white text-sm font-medium"
                        >
                            {team.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {isPopupOpen && selectedTeam && (
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

                                {/* Team Logo */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 
                                                  p-1 ring-2 ring-cyan-500/30">
                                        <img
                                            src={selectedTeam.src || selectedTeam.logo}
                                            alt={selectedTeam.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Team Info */}
                                <div className="text-center space-y-4">
                                    <h3 className="text-3xl font-bold text-white">{selectedTeam.name}</h3>
                                    <p className="text-cyan-400 font-medium text-lg">{selectedTeam.desc}</p>

                                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-6"></div>

                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {selectedTeam.fullDesc}
                                    </p>

                                    {selectedTeam.specs && (
                                        <div className="mt-6 p-4 bg-black/30 rounded-xl border border-white/5">
                                            <p className="text-gray-400 text-sm">
                                                <span className="text-cyan-400 font-semibold">Spesifikasi:</span>
                                                <br />
                                                {selectedTeam.specs}
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
