
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google"; // Keep as fallback or secondary
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import CursorTrails from "@/components/ui/CursorTrails";

const inter = Inter({ subsets: ["latin"] });
// Setup local font. We use a variable so we can use it in Tailwind config or arbitrary values
// const customFont = localFont({
//     src: [
//         {
//             path: '../../public/fonts/custom-font.ttf',
//             weight: '400',
//             style: 'normal',
//         }
//     ],
//     variable: "--font-custom",
//     display: "swap",
// });

export const metadata: Metadata = {
    title: "Tim Robotika UNS",
    description: "Official Landing Page of Robotika UNS - Dari Anggota Untuk Anggota",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* <body className={`${inter.className} ${customFont.variable} antialiased`}> */}
            <body className={`${inter.className} antialiased`}>
                <SmoothScroll>
                    <CursorTrails />
                    <Navbar />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
