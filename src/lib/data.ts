
import {
    Users,
    Megaphone,
    FileText,
    Wallet,
    Cpu,
    Code,
    Wrench,
    FlaskConical
} from 'lucide-react';

export const HERO_CONTENT = {
    title: "ROBOTIKA UNS",
    subtitle: "Dari Anggota Untuk Anggota, Mari Membangun Rumah Kita."
};

export const PHILOSOPHY_CONTENT = {
    visi: "Menjadikan Robotika UNS sebagai ruang prestasi, kemakmuran, & kemajuan teknologi.",
    misi: "Menghadirkan lingkungan aman, rendah tekanan, kekeluargaan, & keterbukaan."
};

export const NON_TECH_DIVISIONS = [
    {
        id: "hr",
        title: "Human Resources",
        icon: Users,
        shortDesc: "Evaluasi kinerja, bonding", // Shortened for card
        details: "Bertanggung jawab atas evaluasi kinerja anggota (Rapor) dan membangun chemistry antar anggota melalui kegiatan bonding rutin.",
        stats: "Focus: Internal Harmony",
        accent: "bg-purple-500",
        image: "/images/placeholder.jpg", // Placeholder
        name: "Human Resources", // Alias for title
        desc: "Evaluasi kinerja, bonding", // Alias for shortDesc
        fullDesc: "Bertanggung jawab atas evaluasi kinerja anggota (Rapor) dan membangun chemistry antar anggota melalui kegiatan bonding rutin.",
        specs: "Focus: Internal Harmony"
    },
    {
        id: "humas",
        title: "Humas Media",
        icon: Megaphone,
        shortDesc: "Partnership, Branding",
        details: "Mengelola branding organisasi, sosial media, dan menjalin kemitraan strategis dengan pihak eksternal. Target tahun ini: 2000 Followers.",
        stats: "Target: 2k Followers",
        accent: "bg-pink-500",
        image: "/images/placeholder.jpg",
        name: "Humas Media",
        desc: "Partnership, Branding",
        fullDesc: "Mengelola branding organisasi, sosial media, dan menjalin kemitraan strategis dengan pihak eksternal. Target tahun ini: 2000 Followers.",
        specs: "Target: 2k Followers"
    },
    {
        id: "sekretaris",
        title: "Sekretaris",
        icon: FileText,
        shortDesc: "Inventarisasi, Arsip",
        details: "Pusat administrasi, pengelolaan surat menyurat, pengarsipan dokumen penting, dan inventarisasi aset organisasi.",
        stats: "Focus: Administration",
        accent: "bg-blue-500",
        image: "/images/placeholder.jpg",
        name: "Sekretaris",
        desc: "Inventarisasi, Arsip",
        fullDesc: "Pusat administrasi, pengelolaan surat menyurat, pengarsipan dokumen penting, dan inventarisasi aset organisasi.",
        specs: "Focus: Administration"
    },
    {
        id: "bendahara",
        title: "Bendahara",
        icon: Wallet,
        shortDesc: "RAB, Cashflow",
        details: "Mengelola arus kas, menyusun Rencana Anggaran Biaya (RAB), dan memastikan transparansi keuangan organisasi.",
        stats: "Focus: Financial Health",
        accent: "bg-green-500",
        image: "/images/placeholder.jpg",
        name: "Bendahara",
        desc: "RAB, Cashflow",
        fullDesc: "Mengelola arus kas, menyusun Rencana Anggaran Biaya (RAB), dan memastikan transparansi keuangan organisasi.",
        specs: "Focus: Financial Health"
    }
];

export const TECH_DIVISIONS = [
    {
        id: "desain",
        title: "Desain & Manufaktur",
        icon: Wrench,
        shortDesc: "Riset bahan, CAD, Manufaktur Bodi",
        details: "Fokus pada riset material, perancangan desain CAD 3D, dan manufaktur bodi robot yang presisi.",
        stats: "Focus: Mechanical Design",
        accent: "bg-orange-500",
        image: "/images/placeholder.jpg",
        name: "Desain & Manufaktur",
        desc: "Riset bahan, CAD, Manufaktur Bodi",
        fullDesc: "Fokus pada riset material, perancangan desain CAD 3D, dan manufaktur bodi robot yang presisi.",
        specs: "Focus: Mechanical Design"
    },
    {
        id: "elektronis",
        title: "Elektronis",
        icon: Cpu,
        shortDesc: "PCB Design, Wiring, Electrical framework",
        details: "Merancang sistem kelistrikan, desain PCB, layout wiring yang rapi, dan manajemen daya robot.",
        stats: "Focus: Circuitry",
        accent: "bg-yellow-500",
        image: "/images/placeholder.jpg",
        name: "Elektronis",
        desc: "PCB Design, Wiring, Electrical framework",
        fullDesc: "Merancang sistem kelistrikan, desain PCB, layout wiring yang rapi, dan manajemen daya robot.",
        specs: "Focus: Circuitry"
    },
    {
        id: "pemrograman",
        title: "Pemrograman",
        icon: Code,
        shortDesc: "Algorithm, AI, Robot Navigation",
        details: "Mengembangkan algoritma cerdas, implementasi AI, dan sistem navigasi otonom untuk pergerakan robot.",
        stats: "Focus: Intelligence",
        accent: "bg-cyan-500",
        image: "/images/placeholder.jpg",
        name: "Pemrograman",
        desc: "Algorithm, AI, Robot Navigation",
        fullDesc: "Mengembangkan algoritma cerdas, implementasi AI, dan sistem navigasi otonom untuk pergerakan robot.",
        specs: "Focus: Intelligence"
    },
    {
        id: "rnd",
        title: "Riset & Pengembangan",
        icon: FlaskConical,
        shortDesc: "Proposal & Article writing for competitions",
        details: "Bekerja pada inovasi baru, penulisan proposal kompetisi, dan publikasi artikel ilmiah terkait teknologi robotika.",
        stats: "Focus: Innovation",
        accent: "bg-indigo-500",
        image: "/images/placeholder.jpg",
        name: "Riset & Pengembangan",
        desc: "Proposal & Article writing for competitions",
        fullDesc: "Bekerja pada inovasi baru, penulisan proposal kompetisi, dan publikasi artikel ilmiah terkait teknologi robotika.",
        specs: "Focus: Innovation"
    }
];

export const TEAMS = [
    {
        id: "rk_udara",
        name: "Werkudara",
        logo: "/images/werkudara_logo.png", // Placeholder path
        image: "/images/werkudara_bot.jpg", // Placeholder path
        desc: "Robot ABU",
        fullDesc: "Tim untuk Kontes Robot ABU Indonesia.",
        specs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: "sambergeni",
        name: "Sambergeni",
        logo: "/images/sambergeni_logo.png", // Placeholder path
        image: "/images/sambergeni_bot.jpg", // Placeholder path
        desc: "Robot SAR",
        fullDesc: "Tim untuk Kontes Robot SAR Indonesia.",
        specs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: "sriwedari",
        name: "Sriwedari",
        logo: "/images/sriwedari_logo.png", // Placeholder path
        image: "/images/sriwedari_bot.jpg", // Placeholder path
        desc: "Robot Tari Humanoid",
        fullDesc: "Tim untuk Kontes Robot Tari Humanoid.",
        specs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
];
