
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType; // Allow rendering as h1, p, span, etc.
}

export default function ScrollReveal({
    children,
    className = "",
    as: Component = "div"
}: ScrollRevealProps) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "center 0.5"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    // Optional: subtle parallax or scale
    const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

    // If the user passed a specific tag like "h1" or "p", we want to render that,
    // but we need a motion component. motion[Component] might be tricky if Component is a string variable.
    // Easiest way in Framer Motion is usually just 'motion.div' or 'motion.create(Component)'.
    // For simplicity here, we'll wrap a motion.span or motion.div around the content or style it directly.
    // Actually, let's just use motion.div by default or spread props if we use motion<any>.

    // To keep it simple and type-safe:
    const MotionComponent = motion(Component as any);

    return (
        <MotionComponent
            ref={container}
            style={{ opacity, y }}
            className={`will-change-opacity ${className}`}
        >
            {children}
        </MotionComponent>
    );
}
