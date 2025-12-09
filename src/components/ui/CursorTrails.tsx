
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorTrails() {
    const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Add new trail point
            const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
            setTrails((prev) => [...prev.slice(-20), newTrail]); // Keep last 20 points
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        // Cleanup old trails to simulate fading/disappearing
        const interval = setInterval(() => {
            setTrails((prev) => prev.slice(1));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Main Cursor */}
            <motion.div
                className="absolute h-4 w-4 rounded-full bg-[--color-brand-cyan] blur-[2px]"
                style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
            />

            {/* Trails */}
            {trails.map((trail, index) => (
                <motion.div
                    key={trail.id}
                    initial={{ opacity: 0.8, scale: 1 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute h-2 w-2 rounded-full bg-[--color-brand-cyan] blur-[1px]"
                    style={{
                        left: trail.x,
                        top: trail.y,
                        transform: "translate(-50%, -50%)"
                    }}
                />
            ))}
        </div>
    );
}
