
"use client";
import React from "react";
import { m, useScroll, useTransform, useSpring, MotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HERO_CONTENT } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const [isMobile, setIsMobile] = React.useState(false);

    // Use layout effect to avoid hydration mismatch if possible, or simple effect
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);

    // Mobile data: take 9 items for 3x3 grid
    const mobileProducts = products.slice(0, 9);

    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 50]),
        springConfig
    );

    // MOBILE VIEW: Static Angled Grid Background with Brick Layout
    if (isMobile) {
        // Brick layout: Row 1 (2 items centered), Row 2 (3 items), Row 3 (3 items), Row 4 (2 items left)
        const row1 = products.slice(0, 3);   // 3 items
        const row2 = products.slice(3, 6);   // 3 items
        const row3 = products.slice(6, 9);   // 3 items
        const row4 = products.slice(9, 12);  // 3 items

        return (
            <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#0B1120] flex items-center justify-center">

                {/* Static Background Grid with Brick Layout and 3D Transform */}
                <div
                    className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none"
                    style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <div
                        className="flex flex-col gap-1 origin-center"
                        style={{
                            width: "200vw",
                            transform: "rotateX(15deg) rotateZ(15deg) scale(3.0) translateY(-5%)",
                        }}
                    >
                        {/* Row 1: 2 items offset right (centered) */}
                        <div className="flex gap-1 justify-center pl-[15%]">
                            {row1.map((product, idx) => (
                                <div
                                    key={`row1-${product.title}`}
                                    className="relative w-[30%] aspect-[16/10] rounded overflow-hidden shadow-2xl bg-slate-900 border border-white/10"
                                >
                                    <Image
                                        src={product.thumbnail}
                                        fill
                                        sizes="50vw"
                                        className="object-cover"
                                        alt={product.title}
                                        priority={idx < 2}
                                        fetchPriority={idx < 2 ? "high" : "auto"}
                                        loading={idx < 2 ? "eager" : "lazy"}
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>
                            ))}
                        </div>

                        {/* Row 2: 3 items full width */}
                        <div className="flex gap-1 justify-center">
                            {row2.map((product) => (
                                <div
                                    key={`row2-${product.title}`}
                                    className="relative w-[30%] aspect-[16/10] rounded overflow-hidden shadow-2xl bg-slate-900 border border-white/10"
                                >
                                    <Image
                                        src={product.thumbnail}
                                        fill
                                        sizes="50vw"
                                        className="object-cover"
                                        alt={product.title}
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>
                            ))}
                        </div>

                        {/* Row 3: 3 items full width offset left */}
                        <div className="flex gap-1 justify-center pr-[20%]">
                            {row3.map((product) => (
                                <div
                                    key={`row3-${product.title}`}
                                    className="relative w-[30%] aspect-[16/10] rounded overflow-hidden shadow-2xl bg-slate-900 border border-white/10"
                                >
                                    <Image
                                        src={product.thumbnail}
                                        fill
                                        sizes="50vw"
                                        className="object-cover"
                                        alt={product.title}
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>
                            ))}
                        </div>

                        {/* Row 4: 2 items offset left */}
                        <div className="flex gap-1 justify-start pl-[5%]">
                            {row4.map((product) => (
                                <div
                                    key={`row4-${product.title}`}
                                    className="relative w-[30%] aspect-[16/10] rounded overflow-hidden shadow-2xl bg-slate-900 border border-white/10"
                                >
                                    <Image
                                        src={product.thumbnail}
                                        fill
                                        sizes="50vw"
                                        className="object-cover"
                                        alt={product.title}
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full px-4">
                    <Header isMobile={true} />
                </div>

                {/* Gradient Fade at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent z-10" />
            </div>
        );
    }

    // DESKTOP VIEW: Existing Parallax
    return (
        <div
            ref={ref}
            className="h-[180vh] py-0 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#0B1120]"
        >
            <Header />
            <m.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <m.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20">
                    {firstRow.map((product, index) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                            priority={true}
                        />
                    ))}
                </m.div>
                <m.div className="flex flex-row mb-20 space-x-10 ">
                    {secondRow.map((product, index) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                            priority={index < 2}
                        />
                    ))}
                </m.div>
                <m.div className="flex flex-row-reverse space-x-reverse space-x-10">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </m.div>
            </m.div>
        </div>
    );
};

export const Header = ({ isMobile = false }) => {
    return (
        <div className={`max-w-7xl relative mx-auto py-20 ${isMobile ? 'md:py-20 text-center' : 'md:py-40'} px-4 w-full left-0 top-0`}>
            {/* Super Grafis Background */}
            <div className="absolute top-0 right-0 -z-10 opacity-30 pointer-events-none select-none overflow-hidden">
                <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow origin-center scale-150 md:scale-100">
                    <circle cx="300" cy="300" r="150" stroke="#3B82F6" strokeWidth="2" strokeDasharray="10 10" />
                    <circle cx="300" cy="300" r="200" stroke="#06B6D4" strokeWidth="1" strokeDasharray="20 10" />
                    <circle cx="300" cy="300" r="250" stroke="#8B5CF6" strokeWidth="0.5" />
                    <path d="M300 50 L300 550 M50 300 L550 300" stroke="white" strokeOpacity="0.1" />
                </svg>
            </div>

            <ScrollReveal>
                <h1 className={`text-5xl md:text-8xl font-bold dark:text-white text-white leading-tight font-robotika tracking-wide ${isMobile ? 'text-left' : 'md:text-center text-left'}`}>
                    {HERO_CONTENT.title}
                </h1>
                <p className={`max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-neutral-200 ${isMobile ? 'text-left mx-0' : 'md:text-center md:mx-auto text-left mx-0'}`}>
                    {HERO_CONTENT.subtitle}
                </p>
            </ScrollReveal>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
    priority = false,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
    priority?: boolean;
}) => {
    return (
        <m.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-64 w-[25rem] md:h-96 md:w-[30rem] relative shrink-0 bg-slate-900 rounded-xl overflow-hidden border border-white/10"
        >
            <Link href={product.link} className="block group-hover/product:shadow-2xl h-full w-full relative">
                <Image
                    src={product.thumbnail}
                    fill
                    priority={priority}
                    fetchPriority={priority ? "high" : "auto"}
                    loading={priority ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30rem"
                    quality={80}
                    className="object-cover object-center absolute inset-0"
                    alt={product.title}
                />

                {/* Overlay */}
                <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black/80 transition duration-500 pointer-events-none"></div>

                <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-xl transition duration-500">
                    {product.title}
                </h2>
            </Link>
        </m.div>
    );
};

// Simplified Card for Mobile Not used anymore as we are using direct div in the map
const MobileProductCard = () => { return null };

