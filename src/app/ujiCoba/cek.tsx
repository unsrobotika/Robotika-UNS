"use client";

import React, { useEffect, useState } from "react";
import { m, LazyMotion, domAnimation, useInView } from "framer-motion";

// --- DUMMY DATA ---
const DIVISION_DATA = {
  id: "programming",
  name: "Programming Division",
  alias: "The Brains",
  description: "The Programming division is responsible for developing autonomous algorithms, computer vision, and the logical architecture of our robots. We turn hardware into intelligent machines.",
  heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
  stats: [
    { label: "Active Projects", value: 12 },
    { label: "Competitions Won", value: 8 },
    { label: "Lines of Code", value: 45000 },
  ],
  achievements: [
    "1st Place KRI Regional 2024",
    "Best Strategy ABU Robocon 2023",
    "Top 5 National Programming Contest",
  ],
  workPrograms: [
    "ROS 2 Integration Workshop",
    "Computer Vision Research Lab",
    "Autonomous Navigation Tuning",
    "Internal Hackathon 2025",
  ],
  members: [
    {
      name: "Bayu Aji Nugroho",
      role: "Lead Programmer",
      nim: "K712XXXX",
      major: "PGSD",
      year: "2023",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bayu",
    },
    {
      name: "Andi Wijaya",
      role: "Vision Specialist",
      nim: "M052XXXX",
      major: "Informatika",
      year: "2022",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi",
    },
    {
      name: "Siti Aminah",
      role: "Embedded Systems",
      nim: "I072XXXX",
      major: "Teknik Elektro",
      year: "2024",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
    },
  ],
};

// --- SUB-COMPONENTS ---

const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
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

// --- MAIN LAYOUT COMPONENT ---

export default function DivisionDetail() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
        
        {/* HERO SECTION */}
        <section className="relative h-[60vh] flex items-end pb-12 px-6 lg:px-20 overflow-hidden">
          <m.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src={DIVISION_DATA.heroImage} 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
          
          <div className="relative z-20 max-w-5xl">
            <m.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-400 text-sm font-medium mb-4 inline-block">
                UKM Robotika UNS
              </span>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                {DIVISION_DATA.name.toUpperCase()}
              </h1>
              <p className="text-xl text-slate-400 mt-4 max-w-2xl italic">
                "{DIVISION_DATA.alias}" — {DIVISION_DATA.description}
              </p>
            </m.div>
          </div>
        </section>

        {/* BENTO GRID SECTION */}
        <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stats Bento Box */}
            <m.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between"
            >
              <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-8">Performance Metrics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {DIVISION_DATA.stats.map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <p className="text-4xl font-bold text-white mb-1">
                      <AnimatedNumber value={stat.value} />+
                    </p>
                    <p className="text-slate-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </m.div>

            {/* Achievements Bento Box */}
            <m.div 
              whileHover={{ y: -5 }}
              className="bg-blue-600 p-8 rounded-3xl text-white flex flex-col justify-between"
            >
              <h3 className="font-bold uppercase tracking-widest text-xs mb-6 opacity-80">Top Achievements</h3>
              <ul className="space-y-4">
                {DIVISION_DATA.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-semibold">
                    <span className="mt-1 flex-shrink-0">🏆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </m.div>

            {/* Work Program Bento Box */}
            <m.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl"
            >
              <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-6">Program Kerja</h3>
              <div className="space-y-4">
                {DIVISION_DATA.workPrograms.map((prog, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                    <p className="text-slate-300 font-medium">{prog}</p>
                  </div>
                ))}
              </div>
            </m.div>

            

            {/* Quote/Vision Bento Box */}
            <m.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-3xl flex items-center justify-center relative overflow-hidden"
            >
              <div className="relative z-10 text-center">
                <p className="text-2xl font-light italic text-slate-300">
                  "Innovating the future, one line of code at a time."
                </p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-serif">“</div>
            </m.div>
          </div>
        </section>

        {/* MEMBERS SECTION */}
        <section className="py-24 px-6 lg:px-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4">Meet the Squad</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {DIVISION_DATA.members.map((member, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors group"
                >
                  <div className="aspect-square overflow-hidden bg-slate-800">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1">{member.role}</p>
                    <h3 className="text-xl font-bold text-white mb-4">{member.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                      <div>
                        <p className="text-[10px] uppercase text-slate-500 font-bold">NIM</p>
                        <p className="text-sm text-slate-300">{member.nim}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase text-slate-500 font-bold">Angkatan</p>
                        <p className="text-sm text-slate-300">{member.year}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[10px] uppercase text-slate-500 font-bold">Prodi</p>
                        <p className="text-sm text-slate-300">{member.major}</p>
                      </div>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER CALL TO ACTION */}
        <section className="py-32 text-center">
           <m.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="px-6"
           >
             <h2 className="text-3xl font-bold mb-6">Interested in joining {DIVISION_DATA.name}?</h2>
             <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all">
               Contact Division Lead
             </button>
           </m.div>
        </section>
      </div>
    </LazyMotion>
  );
}