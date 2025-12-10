"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, MessageCircle, Bot, User } from "lucide-react";
import SiriOrb from "@/components/smoothui/siri-orb";

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

    if (lowerMsg.includes("robotika") || lowerMsg.includes("robot")) {
        return "Robotika UNS adalah tim robot terbaik di Universitas Sebelas Maret! Kami memiliki 3 tim kompetisi: Werkudara (Robot ABU), Sambergeni (Robot SAR), dan Sriwedari (Robot Tari Humanoid).";
    }
    if (lowerMsg.includes("divisi") || lowerMsg.includes("division")) {
        return "Kami memiliki 4 divisi Non-Teknis (HR, Humas, Sekretaris, Bendahara) dan 4 divisi Teknis (Desain & Manufaktur, Elektronis, Pemrograman, Riset & Pengembangan).";
    }
    if (lowerMsg.includes("bergabung") || lowerMsg.includes("join") || lowerMsg.includes("daftar")) {
        return "Untuk bergabung dengan Robotika UNS, kamu bisa mengikuti open recruitment yang biasanya dibuka di awal semester. Pantau terus media sosial kami untuk info terbaru!";
    }
    if (lowerMsg.includes("halo") || lowerMsg.includes("hai") || lowerMsg.includes("hello")) {
        return "Halo! 👋 Selamat datang di Robotika UNS. Ada yang bisa saya bantu hari ini?";
    }

    return "Terima kasih atas pertanyaannya! Untuk informasi lebih lanjut tentang Robotika UNS, silakan tanyakan tentang tim, divisi, atau cara bergabung. 🤖";
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
            <motion.button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full 
                           bg-gradient-to-r from-cyan-500 to-cyan-600 
                           shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 
                           transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open AI Chat"
            >
                <SiriOrb size="32px" className="" colors={{ bg: "transparent" }} />
            </motion.button>

            {/* Chat Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
                        />

                        {/* Chat Window */}
                        <motion.div
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
                                        <SiriOrb size="24px" className="" colors={{}} />
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
                                    <motion.div
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
                                    </motion.div>
                                ))}

                                {/* Loading indicator */}
                                {isLoading && (
                                    <motion.div
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
                                    </motion.div>
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
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
