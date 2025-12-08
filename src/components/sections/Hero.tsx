
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
            "/images/hero-bg-placeholder.jpg",
    },
    {
        title: "Divisi Non-Teknis",
        link: "#divisions",
        thumbnail:
            "/images/placeholder.jpg", // Placeholder
    },
    {
        title: "Divisi Teknis",
        link: "#divisions",
        thumbnail:
            "/images/placeholder.jpg", // Reuse for now
    },
    {
        title: "Werkudara",
        link: "#team",
        thumbnail:
            "/images/werkudara_bot.jpg",
    },
    {
        title: "Sambergeni",
        link: "#team",
        thumbnail:
            "/images/sambergeni_bot.jpg",
    },
    {
        title: "Sriwedari",
        link: "#team",
        thumbnail:
            "/images/sriwedari_bot.jpg",
    },
    {
        title: "Prestasi 2024",
        link: "#",
        thumbnail:
            "/images/placeholder.jpg",
    },
    {
        title: "Kegiatan Bonding",
        link: "#",
        thumbnail:
            "/images/placeholder.jpg",
    },
    {
        title: "Riset & Development",
        link: "#",
        thumbnail:
            "/images/placeholder.jpg",
    },
    {
        title: "Workshop Robotika",
        link: "#",
        thumbnail:
            "/images/placeholder.jpg",
    },
    {
        title: "Kontes Robot Indonesia",
        link: "#",
        thumbnail:
            "/images/placeholder.jpg",
    },
    {
        title: "Komunitas",
        link: "#",
        thumbnail:
            "/images/placeholder.jpg",
    },
    {
        title: "Inovasi Masa Depan",
        link: "#",
        thumbnail:
            "/images/placeholder.jpg",
    },
    {
        title: "Bergabung Bersama Kami",
        link: "#",
        thumbnail:
            "/images/placeholder.jpg",
    },
    {
        title: "Teknologi Canggih",
        link: "#",
        thumbnail:
            "/images/placeholder.jpg",
    },
];
