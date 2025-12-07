
"use client";

import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PHILOSOPHY_CONTENT } from "@/lib/data";

export default function Philosophy() {
    return (
        <section className="py-32 px-4 w-full min-h-[80vh] flex flex-col justify-center items-center bg-[--background]">
            <div className="max-w-5xl text-center space-y-20">

                {/* Visi */}
                <div className="space-y-4">
                    <ScrollReveal as="h1" className="text-5xl font-semibold tracking-widest text-[--color-brand-cyan] uppercase">
                        Visi Kami
                    </ScrollReveal>
                    <ScrollReveal as="p" className="text-2xl md:text-2xl font-medium leading-tight text-[--foreground]">
                        &quot;{PHILOSOPHY_CONTENT.visi}&quot;
                    </ScrollReveal>
                </div>

                {/* Misi */}
                <div className="space-y-4">
                    <ScrollReveal as="h1" className="text-5xl font-semibold tracking-widest text-[--color-brand-purple] uppercase">
                        Misi Kami
                    </ScrollReveal>
                    <ScrollReveal as="p" className="text-2xl md:text-2xl font-medium leading-relaxed text-gray-400">
                        {PHILOSOPHY_CONTENT.misi}
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
