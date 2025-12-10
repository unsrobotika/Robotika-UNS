
import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-12 px-6 bg-[#050912] border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold tracking-tighter text-[--color-brand-cyan]">ROBOTIKA UNS</h3>
                    <p className="text-sm text-gray-500 mt-1">Building the Future, Today.</p>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-6 text-gray-400 text-sm">
                    <a href="https://instagram.com/robotikauns" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[--color-brand-purple] transition-colors">
                        <Instagram size={18} /> @robotikauns
                    </a>
                    <a href="tel:+6281215458338" className="flex items-center gap-2 hover:text-[--color-brand-purple] transition-colors">
                        <Phone size={18} /> 0812-1545-8338
                    </a>
                    <div className="flex items-center gap-2 hover:text-[--color-brand-purple] transition-colors cursor-pointer">
                        <MapPin size={18} /> Universitas Sebelas Maret
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-xs text-gray-600">
                    &copy; 2025 Tim Robotika UNS. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
