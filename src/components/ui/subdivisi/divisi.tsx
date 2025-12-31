"use client";

import React, { useEffect, useState } from "react";
import { m, AnimatePresence, LazyMotion, domAnimation, useInView } from "motion/react";
import { Wrench, Trophy, Briefcase, Zap, Users, Megaphone, FileText, Wallet, Cpu, Code, FlaskConical } from "lucide-react";
import { DivisionItem1 } from "@/lib/data";
import Image from "next/image";



interface BentoModalProps {
    
    division: DivisionItem1 | null;
    accentColor?: "cyan" | "purple"; // untuk NonTech (cyan) dan Tech (purple)
}

// --- SUB-COMPONENTS ---

const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; 
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
};


//komponen setiap page divisi

export default function Divisi({
    
    division,
    accentColor

    

}: BentoModalProps) {
    if (!division) return null;
    
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
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
        
        {/* HERO SECTION - Adjusted height and text size for mobile */}
        <section className="relative h-[70vh] md:h-[60vh] flex items-end pb-12 px-6 lg:px-20 overflow-hidden">
          <m.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
          
          <div className="relative z-20 max-w-5xl">
            <m.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-400 text-xs md:text-sm font-medium mb-4 inline-block">
                DIVISI
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 leading-[1.1]">
                {division.title.toUpperCase()}
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mt-4 max-w-2xl italic">
                 {division.details}
              </p>
            </m.div>
          </div>
        </section>

        {/* BENTO GRID SECTION - Optimized for stacking on mobile */}
        <section className="py-12 md:py-20 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            
            {/* ROW 1: Logo & stats */}
            <m.div 
              whileHover={{ scale: 0.98 }}
              className={`bg-${accentColor}-600 rounded-3xl py-10 md:py-0 flex flex-col items-center justify-center text-white`}
            >
              <Icon size={64} strokeWidth={1.5} className="mb-2" />
              <p className="font-bold tracking-widest text-xs uppercase">Division Logo</p>
            </m.div>

            <m.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-3xl"
            >
              <h3 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {division.stats.map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      <AnimatedNumber value={stat.value} />+
                    </p>
                    <p className="text-slate-500 text-[8px] md:text-[10px] uppercase font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </m.div>

            {/* ROW 2: Vision & Achievements */}
            <m.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl flex items-center"
            >
              <div>
                <h3 className="text-blue-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2">Our Mission</h3>
                <p className="text-xl md:text-2xl font-semibold leading-tight text-white">
                  Engineering the next generation of autonomous systems with precision and logic.
                </p>
              </div>
            </m.div>

            <m.div 
              whileHover={{ scale: 0.98 }}
              className={`bg-gradient-to-br from-blue-900 to-slate-900 border border-slate-700 p-6 rounded-3xl overflow-hidden relative min-h-[150px]`}
            >
              <Trophy className="absolute -right-4 -bottom-4 text-blue-500/20" size={120} />
              <h3 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 text-blue-400">Top Wins</h3>
              <ul className="space-y-2 text-sm font-medium relative z-10">
                {division.achievements.slice(0, 2).map((item, i) => (
                  <li key={i} className="flex gap-2"><span>🏆</span> {item}</li>
                ))}
              </ul>
            </m.div>

            {/* ROW 3: Programs & Quote */}
            <m.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-3xl"
            >
              <h3 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6">Program Kerja</h3>
              <div className="space-y-4">
                {division.programs.map((prog, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <p className="text-slate-300 font-medium text-sm md:text-base">{prog}</p>
                  </div>
                ))}
              </div>
            </m.div>

            <m.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-3xl flex items-center justify-center relative overflow-hidden min-h-[150px]"
            >
              <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl font-light italic text-slate-300 px-4">
                  "Innovating the future, one line of code at a time."
                </p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-serif">“</div>
            </m.div>

          </div>
        </section>

        {/* MEMBERS SECTION - Fixed responsive grid and image container */}
        
        <section className="py-20 md:py-24 px-6 lg:px-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Squad</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {division.teamMembers.map((member, i) => (
                <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors group flex flex-row lg:flex-col"
                >
                {/* Image Container: Smaller and side-aligned on mobile/tablet */}
                <div className="w-1/3 lg:w-full aspect-square overflow-hidden bg-slate-800 flex-shrink-0">
                    <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>

                {/* Text Content: Right-aligned on mobile/tablet, bottom-aligned on desktop */}
                <div className="p-4 md:p-6 flex flex-col justify-center flex-grow">
                    <p className="text-blue-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">
                    {member.role}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 lg:mb-4">
                    {member.name}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-3 md:pt-4 border-t border-slate-800">
                    <div>
                        <p className="text-[8px] md:text-[10px] uppercase text-slate-500 font-bold">NIM</p>
                        <p className="text-xs md:text-sm text-slate-300">{member.nim}</p>
                    </div>
                    <div>
                        <p className="text-[8px] md:text-[10px] uppercase text-slate-500 font-bold">Angkatan</p>
                        <p className="text-xs md:text-sm text-slate-300">{member.year}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-[8px] md:text-[10px] uppercase text-slate-500 font-bold">Prodi</p>
                        <p className="text-xs md:text-sm text-slate-300">{member.major}</p>
                    </div>
                    </div>
                </div>
                </m.div>
            ))}
            </div>
        </div>
        </section>

        
      </div>
    </LazyMotion>
    );
}
