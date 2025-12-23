"use client";

import * as React from 'react';
import { useState } from 'react';
import { RadialIntro } from '@/components/animate-ui/components/community/radial-intro';
import { TEAMS, TeamItem } from '@/lib/data';
import TeamBentoModal from '@/components/ui/TeamBentoModal';
import ScrollReveal from '@/components/ui/ScrollReveal';

// Transform data TEAMS ke format yang cocok untuk RadialIntro
const orbitItems = TEAMS.map((team) => ({
    id: team.id,
    name: team.name,
    src: team.logo, // Gunakan logo untuk orbit
    image: team.image,
    desc: team.desc,
    fullDesc: team.fullDesc,
    specs: team.specs,
    bentoContent: team.bentoContent,
}));

export default function TeamRadial() {
    const [selectedTeam, setSelectedTeam] = useState<TeamItem | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Handler untuk klik pada orbit item
    const handleTeamClick = (teamId: string) => {
        const team = TEAMS.find((t) => t.id === teamId);
        if (team) {
            setSelectedTeam(team);
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
                <ScrollReveal>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Our Team
                            </span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Tim Kompetisi Robot Indonesia
                        </p>
                    </div>
                </ScrollReveal>

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

            {/* Team Bento Modal */}
            <TeamBentoModal
                isOpen={isPopupOpen}
                onClose={closePopup}
                team={selectedTeam}
            />
        </section>
    );
}

