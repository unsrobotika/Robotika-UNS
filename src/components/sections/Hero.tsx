"use client";

import { HeroParallax } from "@/components/ui/HeroParallax";
import { HERO_PRODUCTS } from "@/lib/data";

export default function Hero() {
    return <HeroParallax products={HERO_PRODUCTS} />;
}
