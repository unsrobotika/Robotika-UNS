"use client";

import { LazyMotion, domAnimation } from "motion/react";
import { ReactNode } from "react";

interface MotionProviderProps {
    children: ReactNode;
}

/**
 * MotionProvider - Wrapper untuk LazyMotion dari Framer Motion
 * 
 * Menggunakan `domAnimation` untuk mengurangi bundle size secara signifikan:
 * - Full motion: ~50KB
 * - domAnimation: ~15KB
 * 
 * Komponen yang menggunakan `m` (bukan `motion`) akan mendapat benefit ini.
 */
export default function MotionProvider({ children }: MotionProviderProps) {
    return (
        <LazyMotion features={domAnimation} strict>
            {children}
        </LazyMotion>
    );
}
