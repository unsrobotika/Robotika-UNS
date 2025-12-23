"use client";

import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="border-b border-white/5 last:border-0"
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-5 text-left group"
                aria-expanded={isOpen}
            >
                <span className="text-white font-medium pr-4 group-hover:text-blue-400 transition-colors">
                    {question}
                </span>
                <m.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-blue-400" : "text-slate-400"}`} />
                </m.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-slate-400 leading-relaxed">
                            {answer}
                        </p>
                    </m.div>
                )}
            </AnimatePresence>
        </m.div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/10 mb-4">
                        <HelpCircle className="w-8 h-8 text-blue-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Pertanyaan Umum
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Jawaban untuk pertanyaan yang sering ditanyakan seputar Tim Robotika UNS
                    </p>
                </m.div>

                {/* FAQ Accordion */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-white/5"
                >
                    {FAQ_ITEMS.map((item, index) => (
                        <FAQItem
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                            index={index}
                        />
                    ))}
                </m.div>

                {/* Still Have Questions */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-10"
                >
                    <p className="text-slate-400 mb-4">
                        Masih punya pertanyaan lain?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-colors"
                    >
                        Hubungi Kami
                    </a>
                </m.div>
            </div>
        </section>
    );
}
