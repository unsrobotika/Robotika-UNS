"use client";

import { m, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { TECH_DIVISIONS, NON_TECH_DIVISIONS, DivisionItem, DivisionItem1 } from "@/lib/data";
import BentoModal from "@/components/ui/BentoModal";
import { ArrowLeft, Code, Cpu, FileText, FlaskConical, Megaphone, Users, Wallet, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

// Types
type CategoryType = 'tech' | 'non-tech' | null;

export default function UnifiedDivisions() {
    const [activeCategory, setActiveCategory] = useState<CategoryType>(null);
    const [selectedDivision, setSelectedDivision] = useState<DivisionItem | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Initial check for mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Helper to get data based on active category
    const currentDivisions = activeCategory === 'tech' ? TECH_DIVISIONS : NON_TECH_DIVISIONS;
    const isTech = activeCategory === 'tech';

    return (
        <section id="divisions" className="w-full bg-[#0B1120] relative flex items-center justify-center py-20 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">

                {/* Header (Only visible when no category is active) */}
                <AnimatePresence>
                    {!activeCategory && (
                        <m.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-center mb-12"
                        >
                            <ScrollReveal>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        Our Divisions
                                    </span>
                                </h2>
                                <p className="text-slate-400 max-w-2xl mx-auto">
                                    Explore the specialized teams that power Robotika UNS
                                </p>
                            </ScrollReveal>
                        </m.div>
                    )}
                </AnimatePresence>

                {/* Main Content Area */}
                <div className="relative w-full min-h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">

                        {/* STATE 1: SELECTION (2 Large Cards) */}
                        {!activeCategory && (
                            <m.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Technical Card */}
                                <CategoryChoiceCard
                                    title="DIVISI TEKNIS"
                                    subtitle="Engineering & R&D"
                                    icon={Cpu}
                                    color="purple"
                                    onClick={() => setActiveCategory('tech')}
                                />

                                {/* Non-Technical Card */}
                                <CategoryChoiceCard
                                    title="DIVISI NON-TEKNIS"
                                    subtitle="Management & Branding"
                                    icon={Users}
                                    color="cyan"
                                    onClick={() => setActiveCategory('non-tech')}
                                />
                            </m.div>
                        )}

                        {/* STATE 2: EXPANDED (Grid of Sub-divisions) */}
                        {activeCategory && (
                            <m.div
                                key="expanded-grid"
                                className="w-full h-full"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Expanded Header */}
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                                        <span className={cn(
                                            "bg-clip-text text-transparent bg-gradient-to-r",
                                            isTech ? "from-purple-400 to-purple-600" : "from-cyan-400 to-blue-400"
                                        )}>
                                            {isTech ? "Divisi Teknis" : "Divisi Non-Teknis"}
                                        </span>
                                    </h3>
                                    <p className="text-slate-400">
                                        {isTech ? "Engineering & R&D" : "Management & Branding"}
                                    </p>

                                    {/* Mobile Back Button */}
                                    <button
                                        onClick={() => setActiveCategory(null)}
                                        className="md:hidden mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm"
                                    >
                                        ← Kembali
                                    </button>
                                </div>

                                {/* The 4 Cards + 1 Center Button Grid Layout */}
                                {/* Desktop: Radial-like layout with center button. Mobile: 2x2 grid or stack */}
                                <div className="relative w-full max-w-5xl mx-auto">

                                    {/* Desktop Center Back Button */}
                                    <div className="hidden md:flex absolute inset-0 items-center justify-center z-20 pointer-events-none">
                                        <button
                                            onClick={() => setActiveCategory(null)}
                                            className="pointer-events-auto w-20 h-20 rounded-full bg-slate-800 border border-white/10 
                                                       flex items-center justify-center group hover:bg-slate-700 
                                                       hover:scale-110 hover:border-white/30 transition-all duration-300 shadow-xl"
                                        >
                                            <ArrowLeft className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-32 md:gap-y-8">
                                        {currentDivisions.map((division, idx) => (
                                            <Link key={division.id} href={`/${division.id}`}>
                                                <DivisionSubCard
                                                division={division}
                                                index={idx}
                                                isTech={isTech}
                                                
                                            />
                                            </Link>
                                            
                                        ))}
                                    </div>

                                </div>
                            </m.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>

            {/* Modal for Details */}
            <BentoModal
                isOpen={!!selectedDivision}
                onClose={() => setSelectedDivision(null)}
                division={selectedDivision}
                accentColor={isTech ? 'purple' : 'cyan'}
            />
        </section>
    );
}

// --- Sub Components ---

const CategoryChoiceCard = ({
    title,
    subtitle,
    icon: Icon,
    color,
    onClick
}: {
    title: string;
    subtitle: string;
    icon: any;
    color: 'cyan' | 'purple';
    onClick: () => void;
}) => {
    const isPurple = color === 'purple';

    return (
        <m.div
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "group relative h-[200px] md:h-[280px] w-full cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-slate-900/50 p-6 flex flex-col items-center justify-center text-center transition-colors hover:bg-slate-900/80",
                isPurple ? "hover:border-purple-500/50" : "hover:border-cyan-500/50"
            )}
        >
            {/* Background Gradient */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl",
                isPurple ? "bg-purple-600" : "bg-cyan-600"
            )} />

            {/* Icon */}
            <div className={cn(
                "mb-4 rounded-xl p-4 transition-all duration-300 group-hover:scale-110 shadow-lg",
                isPurple ? "bg-purple-500/20 text-purple-400" : "bg-cyan-500/20 text-cyan-400"
            )}>
                <Icon className="h-10 w-10 md:h-12 md:w-12" />
            </div>

            {/* Text */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400 text-sm">{subtitle}</p>

            {/* Click CTA */}
            <div className={cn(
                "mt-4 px-5 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0",
                isPurple ? "bg-purple-500/20 text-purple-300" : "bg-cyan-500/20 text-cyan-300"
            )}>
                Click to Expand
            </div>
        </m.div>
    );
};

const DivisionSubCard = ({
    division,
    index,
    isTech,
    
}: {
    division: DivisionItem1;
    index: number;
    isTech: boolean;
    
}) => {
    const iconDict = {
        Wrench:Wrench,
        Users:Users,
        Megaphone:Megaphone,
        FileText: FileText,
        Wallet:Wallet,
        Cpu:Cpu,
        Code:Code,
        FlaskConical:FlaskConical


     }
    const Icon = iconDict[division.icon]

    return (
        <m.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-800/50 p-6 hover:bg-slate-800 transition-all cursor-pointer h-full min-h-[160px] flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left hover:scale-[1.02]",
                isTech ? "hover:border-purple-500/30 hover:shadow-purple-500/10" : "hover:border-cyan-500/30 hover:shadow-cyan-500/10",
                "shadow-lg"
            )}
        >
            {/* Gradient Hover */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none",
                isTech ? "bg-gradient-to-br from-purple-500/20 via-transparent to-transparent" : "bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent"
            )} />

            {/* Icon */}
            <div className={cn(
                "shrink-0 p-3 rounded-xl transition-transform group-hover:scale-110",
                division.accent
            )}>
                <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-white/90">
                    {division.title}
                </h4>
                <p className="text-sm text-gray-400 line-clamp-2">
                    {division.shortDesc}
                </p>
                <div className="mt-3 inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                    {division.stats}
                </div>
            </div>
        </m.div>
    );
};
