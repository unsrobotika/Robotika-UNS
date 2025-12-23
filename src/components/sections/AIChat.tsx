"use client";

import { useState, useRef } from "react";
import { m, AnimatePresence } from "motion/react";
import { X, Send, MessageCircle, Bot, User } from "lucide-react";
import { VscHubot } from "react-icons/vsc";

interface Message {
    id: number;
    role: "user" | "assistant";
    content: string;
}

// Contoh respons AI (bisa diganti dengan API sebenarnya)
const getAIResponse = async (userMessage: string): Promise<string> => {
    // Simulasi delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Response berdasarkan keyword
    const lowerMsg = userMessage.toLowerCase();

    // Salam
    if (lowerMsg.includes("halo") || lowerMsg.includes("hai") || lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
        return "Halo! 👋 Selamat datang di Robotika UNS. Ada yang bisa saya bantu hari ini? Kamu bisa bertanya tentang tim, divisi, kompetisi, atau cara bergabung!";
    }

    // Info umum Robotika
    if (lowerMsg.includes("robotika") || lowerMsg.includes("robot")) {
        return "Robotika UNS adalah tim robot terbaik di Universitas Sebelas Maret! Kami memiliki 3 tim kompetisi: Werkudara (Robot ABU), Sambergeni (Robot SAR), dan Sriwedari (Robot Tari Humanoid). 🤖";
    }

    // Info tim Werkudara
    if (lowerMsg.includes("werkudara") || lowerMsg.includes("abu")) {
        return "🔴 Tim Werkudara adalah tim Robot ABU (Asia-Pacific Broadcasting Union) kami! Tim ini berkompetisi di ajang ABU Robocon yang merupakan kompetisi robot tingkat Asia-Pasifik. Werkudara selalu berinovasi untuk menghadapi tema berbeda setiap tahunnya.";
    }

    // Info tim Sambergeni
    if (lowerMsg.includes("sambergeni") || lowerMsg.includes("sar")) {
        return "🟢 Tim Sambergeni adalah tim Robot SAR (Search and Rescue) kami! Tim ini fokus pada pengembangan robot penyelamat yang dapat beroperasi di medan bencana. Robot SAR dilengkapi sensor dan sistem navigasi canggih untuk misi pencarian dan penyelamatan.";
    }

    // Info tim Sriwedari
    if (lowerMsg.includes("sriwedari") || lowerMsg.includes("tari") || lowerMsg.includes("humanoid")) {
        return "💃 Tim Sriwedari adalah tim Robot Tari Humanoid kami! Tim ini mengembangkan robot humanoid yang dapat menari dengan gerakan tradisional Indonesia. Menggabungkan teknologi robotik dengan seni budaya Nusantara!";
    }

    // Info divisi
    if (lowerMsg.includes("divisi") || lowerMsg.includes("division")) {
        return "Kami memiliki 8 divisi:\n\n📋 Non-Teknis:\n• HR - Pengembangan SDM\n• Humas - Hubungan Masyarakat\n• Sekretaris - Administrasi\n• Bendahara - Keuangan\n\n⚙️ Teknis:\n• Desain & Manufaktur\n• Elektronis\n• Pemrograman\n• Riset & Pengembangan";
    }

    // Info cara bergabung
    if (lowerMsg.includes("bergabung") || lowerMsg.includes("join") || lowerMsg.includes("daftar") || lowerMsg.includes("rekrutmen") || lowerMsg.includes("recruitment")) {
        return "📝 Untuk bergabung dengan Robotika UNS:\n\n1. Ikuti open recruitment di awal semester ganjil\n2. Daftar melalui link yang akan dishare di media sosial\n3. Ikuti seleksi (tes tulis & wawancara)\n4. Training untuk member baru\n\nPantau terus Instagram @robotika_uns untuk info terbaru!";
    }

    // Info prestasi
    if (lowerMsg.includes("prestasi") || lowerMsg.includes("achievement") || lowerMsg.includes("juara") || lowerMsg.includes("menang") || lowerMsg.includes("award")) {
        return "🏆 Prestasi Robotika UNS:\n\n• ABU Robocon - Multiple achievements\n• Kontes Robot Indonesia (KRI) - Berbagai kategori\n• Robot SAR tingkat nasional\n• Robot Tari tingkat nasional\n\nKami terus berprestasi di tingkat regional, nasional, dan internasional!";
    }

    // Info kontak
    if (lowerMsg.includes("kontak") || lowerMsg.includes("contact") || lowerMsg.includes("hubungi") || lowerMsg.includes("email") || lowerMsg.includes("sosmed")) {
        return "📱 Hubungi Kami:\n\n• Instagram: @robotika_uns\n• Email: robotika@uns.ac.id\n• Website: robotika.uns.ac.id\n\nJangan ragu untuk menghubungi kami jika ada pertanyaan!";
    }

    // Info lokasi
    if (lowerMsg.includes("lokasi") || lowerMsg.includes("alamat") || lowerMsg.includes("tempat") || lowerMsg.includes("basecamp") || lowerMsg.includes("markas")) {
        return "📍 Lokasi Kami:\n\nBasecamp Robotika UNS berlokasi di Gedung Teknik Elektro, Fakultas Teknik, Universitas Sebelas Maret, Surakarta.\n\nKami juga memiliki workshop untuk kegiatan manufaktur dan pengembangan robot.";
    }

    // Info kompetisi
    if (lowerMsg.includes("kompetisi") || lowerMsg.includes("kontes") || lowerMsg.includes("lomba") || lowerMsg.includes("kri")) {
        return "🎯 Kompetisi yang kami ikuti:\n\n• ABU Robocon (Asia-Pasifik)\n• KRI - Kontes Robot Indonesia\n• KRSRI - Kontes Robot SAR Indonesia\n• KRTMI - Kontes Robot Tari & Musik Indonesia\n\nSetiap tahun kami berpartisipasi di berbagai ajang bergengsi!";
    }

    // Info program/kegiatan
    if (lowerMsg.includes("program") || lowerMsg.includes("kegiatan") || lowerMsg.includes("aktivitas") || lowerMsg.includes("event")) {
        return "📅 Program & Kegiatan:\n\n• Workshop rutin internal\n• Pelatihan teknis (programming, elektronik, mekanik)\n• Study tour & kunjungan industri\n• Robotik Goes to School\n• Open House untuk mahasiswa baru\n• Sharing session dengan alumni";
    }

    // Info sponsor/partnership
    if (lowerMsg.includes("sponsor") || lowerMsg.includes("partner") || lowerMsg.includes("kerjasama") || lowerMsg.includes("donasi")) {
        return "🤝 Kerjasama & Partnership:\n\nKami terbuka untuk kerjasama dengan berbagai pihak! Bentuk kerjasama:\n• Sponsorship tim\n• Partnership industri\n• Kolaborasi riset\n• CSR program\n\nHubungi tim Humas kami untuk informasi lebih lanjut!";
    }

    // Info visi misi
    if (lowerMsg.includes("visi") || lowerMsg.includes("misi") || lowerMsg.includes("tujuan") || lowerMsg.includes("goal")) {
        return "🎯 Visi & Misi Robotika UNS:\n\n📌 Visi:\nMenjadi tim robotika terdepan yang berprestasi di tingkat nasional dan internasional.\n\n📌 Misi:\n• Mengembangkan teknologi robot inovatif\n• Membangun SDM yang kompeten\n• Berkontribusi untuk kemajuan robotika Indonesia";
    }

    // Info sejarah
    if (lowerMsg.includes("sejarah") || lowerMsg.includes("berdiri") || lowerMsg.includes("awal") || lowerMsg.includes("history")) {
        return "📜 Sejarah Robotika UNS:\n\nRobotika UNS didirikan sebagai wadah pengembangan minat dan bakat mahasiswa di bidang robotika. Sejak awal berdiri, tim ini terus berkembang dan menorehkan berbagai prestasi di ajang kompetisi robot nasional dan internasional.";
    }

    // Info syarat bergabung
    if (lowerMsg.includes("syarat") || lowerMsg.includes("requirement") || lowerMsg.includes("kriteria")) {
        return "✅ Syarat Bergabung:\n\n• Mahasiswa aktif UNS\n• Memiliki minat di bidang robotika\n• Berkomitmen dan mau belajar\n• Bisa bekerja dalam tim\n• Tidak wajib punya pengalaman sebelumnya!\n\nKami akan melatih dari dasar untuk member baru 💪";
    }

    // Terima kasih
    if (lowerMsg.includes("terima kasih") || lowerMsg.includes("thanks") || lowerMsg.includes("makasih") || lowerMsg.includes("thx")) {
        return "Sama-sama! 😊 Senang bisa membantu. Jangan ragu untuk bertanya lagi jika ada hal lain yang ingin kamu ketahui tentang Robotika UNS!";
    }

    // Default response
    return "Terima kasih atas pertanyaannya! 🤖\n\nKamu bisa bertanya tentang:\n• Tim (Werkudara, Sambergeni, Sriwedari)\n• Divisi-divisi kami\n• Cara bergabung\n• Prestasi & kompetisi\n• Kontak & lokasi\n\nSilakan tanya apa saja tentang Robotika UNS!";
};

export default function AIChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now(),
            role: "user",
            content: inputValue.trim()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);

        try {
            const aiResponse = await getAIResponse(userMessage.content);
            const assistantMessage: Message = {
                id: Date.now() + 1,
                role: "assistant",
                content: aiResponse
            };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Error getting AI response:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <>
            {/* Floating Button - Kanan Bawah */}
            <m.button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full 
                           bg-gradient-to-r from-cyan-500 to-cyan-600 
                           shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 
                           transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open AI Chat"
            >
                <VscHubot className="text-white" size={28} />
            </m.button>

            {/* Chat Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
                        />

                        {/* Chat Window */}
                        <m.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] 
                                      bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                                      rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10
                                      flex flex-col overflow-hidden max-h-[600px]"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-cyan-500/20">
                                        <VscHubot className="text-cyan-400" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Robotika AI</h3>
                                        <p className="text-xs text-gray-400">Powered by AI</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                                    aria-label="Close chat"
                                >
                                    <X size={18} className="text-gray-400" />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
                                {messages.length === 0 && (
                                    <div className="text-center py-8 text-gray-400">
                                        <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                        <p className="text-sm">Halo! Ada yang bisa saya bantu?</p>
                                        <p className="text-xs mt-2 opacity-70">Tanyakan tentang Robotika UNS</p>
                                    </div>
                                )}

                                {messages.map((message) => (
                                    <m.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`flex items-start gap-2 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                                            {/* Avatar */}
                                            <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 
                                                          ${message.role === "user" ? "bg-cyan-500" : "bg-purple-500/30"}`}>
                                                {message.role === "user" ? (
                                                    <User size={14} className="text-white" />
                                                ) : (
                                                    <Bot size={14} className="text-purple-300" />
                                                )}
                                            </div>

                                            {/* Message Bubble */}
                                            <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                                                          ${message.role === "user"
                                                    ? "bg-cyan-500 text-white rounded-tr-sm"
                                                    : "bg-slate-700/50 text-gray-200 rounded-tl-sm border border-white/5"}`}>
                                                {message.content}
                                            </div>
                                        </div>
                                    </m.div>
                                ))}

                                {/* Loading indicator */}
                                {isLoading && (
                                    <m.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex justify-start"
                                    >
                                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 rounded-2xl rounded-tl-sm border border-white/5">
                                            <div className="flex gap-1">
                                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                            </div>
                                        </div>
                                    </m.div>
                                )}
                            </div>

                            {/* Input */}
                            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
                                <div className="flex items-end gap-2">
                                    <textarea
                                        ref={inputRef}
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Ketik pesan..."
                                        className="flex-1 resize-none bg-slate-800 text-white placeholder-gray-400 
                                                 rounded-xl px-4 py-3 text-sm outline-none 
                                                 border border-white/10 focus:border-cyan-500/50 transition-colors
                                                 max-h-[100px] min-h-[44px]"
                                        rows={1}
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim() || isLoading}
                                        className="p-3 rounded-xl bg-cyan-500 text-white 
                                                 hover:bg-cyan-400 disabled:opacity-50 disabled:hover:bg-cyan-500
                                                 transition-colors"
                                        aria-label="Send message"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
