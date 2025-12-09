"use client";

import React, { useState } from "react";
import { motion, easeInOut } from "motion/react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
    title: string;
    description: string;
    subtitle?: string;
    image?: string;
    className?: string;
    frontClassName?: string;
    backClassName?: string;
}

export function FlipCard({
    title,
    description,
    subtitle,
    image,
    className,
    frontClassName,
    backClassName,
}: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const isTouchDevice =
        typeof window !== "undefined" && "ontouchstart" in window;

    const handleClick = () => {
        if (isTouchDevice) setIsFlipped(!isFlipped);
    };

    const handleMouseEnter = () => {
        if (!isTouchDevice) setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        if (!isTouchDevice) setIsFlipped(false);
    };

    const cardVariants = {
        front: { rotateY: 0, transition: { duration: 0.5, ease: easeInOut } },
        back: { rotateY: 180, transition: { duration: 0.5, ease: easeInOut } },
    };

    return (
        <div
            className={cn(
                "group relative h-80 w-full max-w-sm perspective-1000 cursor-pointer lg:w-96", // Default sizes
                className
            )}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* FRONT */}
            <motion.div
                className={cn(
                    "absolute inset-0 backface-hidden flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-center shadow-2xl",
                    frontClassName
                )}
                animate={isFlipped ? "back" : "front"}
                variants={cardVariants}
                style={{ transformStyle: "preserve-3d" }}
            >
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="mb-6 h-24 w-24 rounded-full object-cover shadow-lg border-2 border-white/20"
                    />
                )}
                <h2 className="text-3xl font-bold tracking-wider text-white uppercase mb-2">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-sm font-medium text-cyan-400 tracking-widest uppercase">
                        {subtitle}
                    </p>
                )}

                <div className="mt-8 text-xs text-slate-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                    Hover to Reveal
                </div>
            </motion.div>

            {/* BACK */}
            <motion.div
                className={cn(
                    "absolute inset-0 backface-hidden flex flex-col items-center justify-center rounded-2xl border border-cyan-500/20 bg-slate-950 p-8 text-center shadow-2xl shadow-cyan-900/10",
                    backClassName
                )}
                initial={{ rotateY: 180 }}
                animate={isFlipped ? "front" : "back"}
                variants={cardVariants}
                style={{ transformStyle: "preserve-3d", rotateY: 180 }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none rounded-2xl"></div>

                <h3 className="text-xl font-bold text-cyan-400 mb-6">{title}</h3>
                <p className="text-lg leading-relaxed text-slate-300 font-medium">
                    &quot;{description}&quot;
                </p>
            </motion.div>
        </div>
    );
}
