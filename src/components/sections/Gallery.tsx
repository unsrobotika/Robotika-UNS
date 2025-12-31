"use client";

import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/data";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState("Semua");

    const categories = ["Semua", ...new Set(GALLERY_ITEMS.map((item) => item.category))];

    const filteredItems =
        activeCategory === "Semua"
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

    const handlePrev = () => {
        if (selectedImage !== null) {
            const currentIndex = filteredItems.findIndex((_, i) => i === selectedImage);
            const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
            setSelectedImage(prevIndex);
        }
    };

    const handleNext = () => {
        if (selectedImage !== null) {
            const currentIndex = filteredItems.findIndex((_, i) => i === selectedImage);
            const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
            setSelectedImage(nextIndex);
        }
    };

    return (
        <section id="gallery" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Galeri Kegiatan
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Dokumentasi perjalanan dan momen-momen berharga Tim Robotika UNS
                    </p>
                </m.div>

                {/* Category Filter */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </m.div>

                {/* Gallery Grid */}
                <m.div
                    layout
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar"
                >
                    {filteredItems.map((item, index) => (
                        <m.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="relative flex-shrink-0 w-[80vw] md:w-auto aspect-square rounded-xl overflow-hidden cursor-pointer group snap-center"
                            onClick={() => setSelectedImage(index)}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="text-white font-medium text-sm">{item.title}</p>
                                    <p className="text-blue-400 text-xs">{item.category}</p>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </m.div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 rounded-full transition-colors"
                                aria-label="Tutup"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                }}
                                className="absolute left-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
                                aria-label="Sebelumnya"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                className="absolute right-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
                                aria-label="Selanjutnya"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image */}
                            <div
                                className="relative max-w-4xl max-h-[80vh] w-full h-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={filteredItems[selectedImage].image}
                                    alt={filteredItems[selectedImage].title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                                <p className="text-white font-medium">{filteredItems[selectedImage].title}</p>
                                <p className="text-blue-400 text-sm">{filteredItems[selectedImage].category}</p>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
