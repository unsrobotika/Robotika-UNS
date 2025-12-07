
"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.5, // Slower, heavier feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth ease
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            // smoothTouch: false, // Default
            // touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
