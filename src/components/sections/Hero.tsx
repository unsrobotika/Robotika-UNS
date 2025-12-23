
"use client";

import { HeroParallax } from "@/components/ui/HeroParallax";

export default function Hero() {
    return <HeroParallax products={products} />;
}

export const products = [
    {
        title: "Robotika UNS",
        link: "#",
        thumbnail:
            "/images/hero-bg-placeholder.webp",
    },
    {
        title: "Divisi Non-Teknis",
        link: "#divisions",
        thumbnail:
            "/images/placeholder.webp", // Placeholder
    },
    {
        title: "Divisi Teknis",
        link: "#divisions",
        thumbnail:
            "/images/placeholder.webp", // Reuse for now
    },
    {
        title: "Werkudara",
        link: "#team",
        thumbnail:
            "/images/werkudara_bot.webp",
    },
    {
        title: "Sambergeni",
        link: "#team",
        thumbnail:
            "/images/sambergeni_bot.webp",
    },
    {
        title: "Sriwedari",
        link: "#team",
        thumbnail:
            "/images/sriwedari_bot.webp",
    },
    {
        title: "Prestasi 2024",
        link: "#",
        thumbnail:
            "/images/placeholder.webp",
    },
    {
        title: "Kegiatan Bonding",
        link: "#",
        thumbnail:
            "/images/placeholder.webp",
    },
    {
        title: "Riset & Development",
        link: "#",
        thumbnail:
            "/images/placeholder.webp",
    },
    {
        title: "Workshop Robotika",
        link: "#",
        thumbnail:
            "/images/placeholder.webp",
    },
    {
        title: "Kontes Robot Indonesia",
        link: "#",
        thumbnail:
            "/images/placeholder.webp",
    },
    {
        title: "Komunitas",
        link: "#",
        thumbnail:
            "/images/placeholder.webp",
    },
    {
        title: "Inovasi Masa Depan",
        link: "#",
        thumbnail:
            "/images/placeholder.webp",
    },
    {
        title: "Bergabung Bersama Kami",
        link: "#",
        thumbnail:
            "/images/placeholder.webp",
    },
    {
        title: "Teknologi Canggih",
        link: "#",
        thumbnail:
            "/images/placeholder.webp",
    },
];
