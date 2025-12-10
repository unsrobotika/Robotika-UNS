
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google"; // Keep as fallback or secondary
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import CursorTrails from "@/components/ui/CursorTrails";
import { Home, Info, Users, Flag } from "lucide-react"; // Import icons

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tim Robotika UNS",
    description: "Official Landing Page of Robotika UNS - Dari Anggota Untuk Anggota",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const navItems = [
        {
            name: "Home",
            link: "#",
            icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About Us",
            link: "#philosophy",
            icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Divisions",
            link: "#divisions",
            icon: <Users className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Team",
            link: "#team",
            icon: <Flag className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <SmoothScroll>
                    <CursorTrails />
                    <FloatingNav navItems={navItems} />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
