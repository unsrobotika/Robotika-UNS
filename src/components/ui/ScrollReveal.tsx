"use client";

import { useRef, ReactNode, ElementType, useState, useEffect } from "react";
import { m, useInView } from "motion/react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;
}

export default function ScrollReveal({
    children,
    className = "",
    as: Tag = "div"
}: ScrollRevealProps) {
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile on mount
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Use inView for simpler, one-time animation (better performance)
    const isInView = useInView(container, {
        once: true, // Only animate once - much better for performance
        amount: 0.3 // Trigger when 30% visible
    });

    // Mobile: Simple fade only (lightest possible)
    // Desktop: Fade + slide + scale
    const mobileVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const desktopVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    const variants = isMobile ? mobileVariants : desktopVariants;

    return (
        <m.div
            ref={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{
                duration: isMobile ? 0.3 : 0.5, // Faster on mobile
                ease: "easeOut"
            }}
            className={className}
        >
            <Tag>{children}</Tag>
        </m.div>
    );
}
