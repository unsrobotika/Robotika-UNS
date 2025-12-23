"use client";

import { m } from "motion/react";
import Image from "next/image";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export default function Blog() {
    return (
        <section id="blog" className="py-20 bg-[#0B1120]">
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
                            Berita & Artikel
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Update terbaru seputar kegiatan, prestasi, dan perkembangan Tim Robotika UNS
                    </p>
                </m.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BLOG_POSTS.slice(0, 6).map((post, index) => (
                        <m.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                                <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-full">
                                    {post.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta */}
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>

                                {/* Read More */}
                                <a
                                    href={post.link || "#"}
                                    className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors group/link"
                                >
                                    Baca Selengkapnya
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </m.article>
                    ))}
                </div>

                {/* View All Button */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-700 transition-colors"
                    >
                        Lihat Semua Artikel
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </m.div>
            </div>
        </section>
    );
}
