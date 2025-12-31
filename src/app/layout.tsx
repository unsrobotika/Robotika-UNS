import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MotionProvider from "@/components/providers/MotionProvider";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
    title: "Robotika UNS | Tim Robotika Universitas Sebelas Maret",
    description: "Selamat datang di Tim Robotika UNS! Organisasi kemahasiswaan yang berfokus pada pengembangan teknologi robotika, inovasi, dan prestasi di berbagai kompetisi robot tingkat nasional dan internasional.",
    keywords: ["robotika", "UNS", "universitas sebelas maret", "robot", "kompetisi robot", "KRI", "ABU Robocon", "mahasiswa", "solo", "surakarta"],
    authors: [{ name: "Tim Robotika UNS" }],
    creator: "Tim Robotika UNS",
    publisher: "Universitas Sebelas Maret",

    // Open Graph
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: "https://robotika.uns.ac.id",
        siteName: "Robotika UNS",
        title: "Robotika UNS | Tim Robotika Universitas Sebelas Maret",
        description: "Bergabunglah dengan Tim Robotika UNS! Kembangkan skill robotika, raih prestasi, dan jadilah bagian dari keluarga robot terbaik.",
        images: [
            {
                url: "/images/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Tim Robotika UNS",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Robotika UNS | Tim Robotika Universitas Sebelas Maret",
        description: "Bergabunglah dengan Tim Robotika UNS! Kembangkan skill robotika dan raih prestasi.",
        images: ["/images/og-image.webp"],
    },

    // Icons
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    // Metadata Base
    metadataBase: new URL("https://robotika.uns.ac.id"),

    // Robots
    robots: {
        index: true,
        follow: true,
    },
};

// Viewport configuration
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#1E40AF",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body className={`${inter.className} antialiased`}>
                <MotionProvider>
                    <SmoothScroll>
                        {children}
                    </SmoothScroll>
                </MotionProvider>
            </body>
        </html>
    );
}
