
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

// Type untuk team member di bento modal
export interface TeamMember {
    name: string;
    role: string;
    image: string; // path to profile image
}

// Type untuk bento content
export interface BentoContent {
    headline: string;
    description: string;
    textContent: string;
    image: string;
    achievements?: string[];
    programs?: string[];
    teamMembers?: TeamMember[];
}

// Type untuk division item
export interface DivisionItem {
    id: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    shortDesc: string;
    details: string;
    stats: string;
    accent: string;
    image: string;
    name: string;
    desc: string;
    fullDesc: string;
    specs: string;
    bentoContent: BentoContent;
}
export interface DivisionItem1 {
    id: string;
    title: string;
    icon: string;
    shortDesc: string;
    details: string;
    stats: string;
    accent: string;
    image: string;
    name: string;
    desc: string;
    fullDesc: string;
    specs: string;
    bentoContent: BentoContent;
}


export const HERO_CONTENT = {
    title: "ROBOTIKA UNS",
    subtitle: "Dari Anggota Untuk Anggota, Mari Membangun Rumah Kita."
};

export const PHILOSOPHY_CONTENT = {
    visi: "Menjadikan Robotika UNS sebagai ruang prestasi, kemakmuran, & kemajuan teknologi.",
    misi: "Menghadirkan lingkungan aman, rendah tekanan, kekeluargaan, & keterbukaan."
};

export const ABOUT_US_CONTENT = {
    title: "About Us",
    description: "Robotika UNS adalah Unit Kegiatan Mahasiswa (UKM) di Universitas Sebelas Maret yang berfokus pada pengembangan teknologi robotika. Didirikan dengan semangat inovasi dan prestasi, kami menjadi wadah bagi mahasiswa untuk mengembangkan kemampuan di bidang mekanika, elektronika, dan pemrograman robot.",
    subtitle: "Kenali lebih dekat keluarga besar Robotika UNS"
};

export const NON_TECH_DIVISIONS: DivisionItem1[] = [
    {
        id: "hr",
        title: "Human Resources",
        icon: "Users",
        shortDesc: "Evaluasi kinerja, bonding",
        details: "Bertanggung jawab atas evaluasi kinerja anggota (Rapor) dan membangun chemistry antar anggota melalui kegiatan bonding rutin.",
        stats: "Focus: Internal Harmony",
        accent: "bg-purple-500",
        image: "/images/placeholder.webp",
        name: "Human Resources",
        desc: "Evaluasi kinerja, bonding",
        fullDesc: "Bertanggung jawab atas evaluasi kinerja anggota (Rapor) dan membangun chemistry antar anggota melalui kegiatan bonding rutin.",
        specs: "Focus: Internal Harmony",
        bentoContent: {
            headline: "Human Resources Division",
            description: "Divisi yang bertanggung jawab atas pengelolaan sumber daya manusia dalam organisasi Robotika UNS.",
            textContent: "HR bertugas memastikan setiap anggota merasa nyaman dan berkembang. Kami melakukan evaluasi berkala melalui sistem Rapor untuk memantau perkembangan setiap anggota. Selain itu, kami juga mengorganisir berbagai kegiatan bonding untuk mempererat hubungan antar anggota.",
            image: "/images/placeholder.webp",
            achievements: [
                "Sistem Rapor Digital 2024",
                "Monthly Bonding Events",
                "Mentorship Program"
            ],
            programs: [
                "Evaluasi Kinerja Bulanan",
                "Bonding Session",
                "Welcome Party Anggota Baru"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Koordinator", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Staff", image: "/images/placeholder-profile.webp" }
            ]
        }
    },
    {
        id: "humas",
        title: "Humas Media",
        icon: "Megaphone",
        shortDesc: "Partnership, Branding",
        details: "Mengelola branding organisasi, sosial media, dan menjalin kemitraan strategis dengan pihak eksternal. Target tahun ini: 2000 Followers.",
        stats: "Target: 2k Followers",
        accent: "bg-pink-500",
        image: "/images/placeholder.webp",
        name: "Humas Media",
        desc: "Partnership, Branding",
        fullDesc: "Mengelola branding organisasi, sosial media, dan menjalin kemitraan strategis dengan pihak eksternal. Target tahun ini: 2000 Followers.",
        specs: "Target: 2k Followers",
        bentoContent: {
            headline: "Humas & Media Division",
            description: "Wajah dan suara Robotika UNS di dunia luar. Mengelola branding, sosial media, dan kemitraan strategis.",
            textContent: "Humas Media bertanggung jawab membangun citra positif Robotika UNS. Kami mengelola seluruh platform sosial media, membuat konten kreatif, dan menjalin kerjasama dengan sponsor serta media partner untuk mendukung kegiatan organisasi.",
            image: "/images/placeholder.webp",
            achievements: [
                "1.5K+ Instagram Followers",
                "Partnership dengan 5+ Sponsor",
                "Liputan Media Nasional"
            ],
            programs: [
                "Social Media Management",
                "Content Creation",
                "Media Partnership"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Koordinator", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Staff", image: "/images/placeholder-profile.webp" }
            ]
        }
    },
    {
        id: "sekretaris",
        title: "Sekretaris",
        icon: "FileText",
        shortDesc: "Inventarisasi, Arsip",
        details: "Pusat administrasi, pengelolaan surat menyurat, pengarsipan dokumen penting, dan inventarisasi aset organisasi.",
        stats: "Focus: Administration",
        accent: "bg-blue-500",
        image: "/images/placeholder.webp",
        name: "Sekretaris",
        desc: "Inventarisasi, Arsip",
        fullDesc: "Pusat administrasi, pengelolaan surat menyurat, pengarsipan dokumen penting, dan inventarisasi aset organisasi.",
        specs: "Focus: Administration",
        bentoContent: {
            headline: "Sekretaris Division",
            description: "Pusat administrasi dan dokumentasi organisasi Robotika UNS.",
            textContent: "Sekretaris mengelola seluruh aspek administratif organisasi. Mulai dari pembuatan surat resmi, pengarsipan dokumen, hingga inventarisasi aset. Kami memastikan semua proses administrasi berjalan lancar dan terdokumentasi dengan baik.",
            image: "/images/placeholder.webp",
            achievements: [
                "Sistem Arsip Digital",
                "Database Inventaris Online",
                "Template Surat Standar"
            ],
            programs: [
                "Pengelolaan Surat Menyurat",
                "Inventarisasi Aset",
                "Dokumentasi Kegiatan"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Koordinator", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Staff", image: "/images/placeholder-profile.webp" }
            ]
        }
    },
    {
        id: "bendahara",
        title: "Bendahara",
        icon: "Wallet",
        shortDesc: "RAB, Cashflow",
        details: "Mengelola arus kas, menyusun Rencana Anggaran Biaya (RAB), dan memastikan transparansi keuangan organisasi.",
        stats: "Focus: Financial Health",
        accent: "bg-green-500",
        image: "/images/placeholder.webp",
        name: "Bendahara",
        desc: "RAB, Cashflow",
        fullDesc: "Mengelola arus kas, menyusun Rencana Anggaran Biaya (RAB), dan memastikan transparansi keuangan organisasi.",
        specs: "Focus: Financial Health",
        bentoContent: {
            headline: "Bendahara Division",
            description: "Pengelola keuangan organisasi yang memastikan stabilitas finansial Robotika UNS.",
            textContent: "Bendahara bertanggung jawab atas seluruh aspek keuangan organisasi. Kami menyusun RAB untuk setiap kegiatan, memantau arus kas, dan membuat laporan keuangan yang transparan. Tujuan kami adalah memastikan kesehatan finansial organisasi untuk mendukung semua program kerja.",
            image: "/images/placeholder.webp",
            achievements: [
                "Laporan Keuangan Transparan",
                "Sistem Budgeting Digital",
                "Zero Deficit 2024"
            ],
            programs: [
                "Penyusunan RAB",
                "Monitoring Cashflow",
                "Laporan Keuangan Bulanan"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Koordinator", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Staff", image: "/images/placeholder-profile.webp" }
            ]
        }
    }
];

export const TECH_DIVISIONS: DivisionItem1[] = [
    {
        id: "desain",
        title: "Desain & Manufaktur",
        icon: "Wrench",
        shortDesc: "Riset bahan, CAD, Manufaktur Bodi",
        details: "Fokus pada riset material, perancangan desain CAD 3D, dan manufaktur bodi robot yang presisi.",
        stats: "Focus: Mechanical Design",
        accent: "bg-orange-500",
        image: "/images/placeholder.webp",
        name: "Desain & Manufaktur",
        desc: "Riset bahan, CAD, Manufaktur Bodi",
        fullDesc: "Fokus pada riset material, perancangan desain CAD 3D, dan manufaktur bodi robot yang presisi.",
        specs: "Focus: Mechanical Design",
        bentoContent: {
            headline: "Desain & Manufaktur Division",
            description: "Tim yang merancang dan memproduksi komponen fisik robot dengan presisi tinggi.",
            textContent: "Divisi Desain & Manufaktur bertanggung jawab atas seluruh aspek mekanik robot. Kami melakukan riset material untuk menemukan bahan terbaik, merancang desain 3D menggunakan software CAD profesional, dan melakukan proses manufaktur mulai dari cutting, bending, hingga assembly final.",
            image: "/images/placeholder.webp",
            achievements: [
                "Desain Robot ABU 2024",
                "Inovasi Material Lightweight",
                "CNC Precision Parts"
            ],
            programs: [
                "Training CAD/CAM",
                "Workshop Manufaktur",
                "Riset Material Baru"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Koordinator", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Staff", image: "/images/placeholder-profile.webp" }
            ]
        }
    },
    {
        id: "elektronis",
        title: "Elektronis",
        icon: "Cpu",
        shortDesc: "PCB Design, Wiring, Electrical framework",
        details: "Merancang sistem kelistrikan, desain PCB, layout wiring yang rapi, dan manajemen daya robot.",
        stats: "Focus: Circuitry",
        accent: "bg-yellow-500",
        image: "/images/placeholder.webp",
        name: "Elektronis",
        desc: "PCB Design, Wiring, Electrical framework",
        fullDesc: "Merancang sistem kelistrikan, desain PCB, layout wiring yang rapi, dan manajemen daya robot.",
        specs: "Focus: Circuitry",
        bentoContent: {
            headline: "Elektronis Division",
            description: "Ahli kelistrikan yang membangun sistem power dan kontrol robot.",
            textContent: "Divisi Elektronis menangani seluruh aspek kelistrikan robot. Mulai dari desain PCB custom, layout wiring yang efisien, hingga power management untuk memastikan robot dapat beroperasi dengan optimal. Kami juga mengembangkan sistem sensor dan aktuator.",
            image: "/images/placeholder.webp",
            achievements: [
                "Custom PCB Controller",
                "Efficient Power System",
                "Sensor Integration"
            ],
            programs: [
                "PCB Design Training",
                "Soldering Workshop",
                "Power Management Study"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Koordinator", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Staff", image: "/images/placeholder-profile.webp" }
            ]
        }
    },
    {
        id: "pemrograman",
        title: "Pemrograman",
        icon: "Code",
        shortDesc: "Algorithm, AI, Robot Navigation",
        details: "Mengembangkan algoritma cerdas, implementasi AI, dan sistem navigasi otonom untuk pergerakan robot.",
        stats: "Focus: Intelligence",
        accent: "bg-cyan-500",
        image: "/images/placeholder.webp",
        name: "Pemrograman",
        desc: "Algorithm, AI, Robot Navigation",
        fullDesc: "Mengembangkan algoritma cerdas, implementasi AI, dan sistem navigasi otonom untuk pergerakan robot.",
        specs: "Focus: Intelligence",
        bentoContent: {
            headline: "Pemrograman Division",
            description: "Otak digital robot yang mengembangkan algoritma cerdas dan sistem navigasi.",
            textContent: "Divisi Pemrograman adalah otak dari setiap robot yang kami buat. Kami mengembangkan algoritma untuk kontrol motor, sistem navigasi otonom, computer vision untuk deteksi objek, dan implementasi AI untuk pengambilan keputusan real-time.",
            image: "/images/placeholder.webp",
            achievements: [
                "Autonomous Navigation",
                "Computer Vision System",
                "Real-time AI Decision"
            ],
            programs: [
                "Coding Bootcamp",
                "AI/ML Workshop",
                "ROS Training"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Koordinator", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Staff", image: "/images/placeholder-profile.webp" }
            ]
        }
    },
    {
        id: "rnd",
        title: "Riset & Pengembangan",
        icon: "FlaskConical",
        shortDesc: "Proposal & Article writing for competitions",
        details: "Bekerja pada inovasi baru, penulisan proposal kompetisi, dan publikasi artikel ilmiah terkait teknologi robotika.",
        stats: "Focus: Innovation",
        accent: "bg-indigo-500",
        image: "/images/placeholder.webp",
        name: "Riset & Pengembangan",
        desc: "Proposal & Article writing for competitions",
        fullDesc: "Bekerja pada inovasi baru, penulisan proposal kompetisi, dan publikasi artikel ilmiah terkait teknologi robotika.",
        specs: "Focus: Innovation",
        bentoContent: {
            headline: "Riset & Pengembangan Division",
            description: "Pusat inovasi dan pengembangan teknologi baru untuk kemajuan robotika.",
            textContent: "Divisi R&D berfokus pada eksplorasi teknologi baru dan inovasi. Kami menulis proposal untuk berbagai kompetisi robotika, melakukan riset untuk publikasi ilmiah, dan terus mencari cara baru untuk meningkatkan performa robot kami.",
            image: "/images/placeholder.webp",
            achievements: [
                "5+ Proposal Diterima",
                "Publikasi Jurnal Ilmiah",
                "Inovasi Teknologi Baru"
            ],
            programs: [
                "Research Methodology",
                "Scientific Writing",
                "Innovation Challenge"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Koordinator", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Staff", image: "/images/placeholder-profile.webp" }
            ]
        }
    }
];

// Type untuk team item
export interface TeamBentoContent {
    headline: string;
    description: string;
    robotSpecs: string[];
    competitions: string[];
    achievements?: string[];
    teamMembers?: TeamMember[];
}

export interface TeamItem {
    id: string;
    name: string;
    logo: string;
    image: string;
    desc: string;
    fullDesc: string;
    specs: string;
    bentoContent: TeamBentoContent;
}

export const TEAMS: TeamItem[] = [
    {
        id: "rk_udara",
        name: "Werkudara",
        logo: "/images/werkudara_logo.webp",
        image: "/images/werkudara_bot.webp",
        desc: "Robot ABU",
        fullDesc: "Tim untuk Kontes Robot ABU Indonesia. Robot ABU dirancang untuk mengikuti tema kompetisi yang berubah setiap tahun dengan tantangan unik.",
        specs: "Autonomous & Manual Control Robot",
        bentoContent: {
            headline: "Tim Werkudara - Robot ABU",
            description: "Tim yang berkompetisi di Kontes Robot ABU Indonesia (KRAI). Robot ABU menggabungkan kontrol manual dan otonom untuk menyelesaikan misi yang berbeda setiap tahunnya.",
            robotSpecs: [
                "Dimensi: 1.2m x 1.2m x 1.5m",
                "Sistem Penggerak: Omni-wheel",
                "Controller: STM32 + Raspberry Pi",
                "Sensor: LiDAR, IMU, Encoder"
            ],
            competitions: [
                "KRAI Regional Jawa Tengah",
                "KRAI Nasional",
                "ABU Robocon International"
            ],
            achievements: [
                "Juara Regional 2024",
                "Best Design Award",
                "Top 8 Nasional"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Team Leader", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Mechanical", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 3", role: "Electronics", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 4", role: "Programming", image: "/images/placeholder-profile.webp" }
            ]
        }
    },
    {
        id: "sambergeni",
        name: "Sambergeni",
        logo: "/images/sambergeni_logo.webp",
        image: "/images/sambergeni_bot.webp",
        desc: "Robot SAR",
        fullDesc: "Tim untuk Kontes Robot SAR Indonesia. Robot Search and Rescue dirancang untuk misi penyelamatan di medan bencana.",
        specs: "Search and Rescue Autonomous Robot",
        bentoContent: {
            headline: "Tim Sambergeni - Robot SAR",
            description: "Tim yang berkompetisi di Kontes Robot SAR Indonesia (KRSRI). Robot dirancang untuk navigasi otonom di medan berbahaya dan menyelamatkan korban.",
            robotSpecs: [
                "Dimensi: 40cm x 50cm x 30cm",
                "Sistem Penggerak: Tracked/Crawler",
                "Controller: Arduino + Jetson Nano",
                "Sensor: Thermal Camera, LiDAR, Gas Sensor"
            ],
            competitions: [
                "KRSRI Regional Jawa Tengah",
                "KRSRI Nasional",
                "RoboCup Rescue Simulation"
            ],
            achievements: [
                "Best Navigation Award",
                "Finalist Nasional 2024",
                "Innovation Award"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Team Leader", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Mechanical", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 3", role: "Electronics", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 4", role: "AI/Vision", image: "/images/placeholder-profile.webp" }
            ]
        }
    },
    {
        id: "sriwedari",
        name: "Sriwedari",
        logo: "/images/sriwedari_logo.webp",
        image: "/images/sriwedari_bot.webp",
        desc: "Robot Tari Humanoid",
        fullDesc: "Tim untuk Kontes Robot Tari Humanoid. Robot humanoid yang dapat menari mengikuti irama musik tradisional Indonesia.",
        specs: "Humanoid Dancing Robot",
        bentoContent: {
            headline: "Tim Sriwedari - Robot Humanoid",
            description: "Tim yang berkompetisi di Kontes Robot Seni Tari Indonesia (KRSTI). Robot humanoid yang memadukan teknologi robotika dengan seni tari tradisional.",
            robotSpecs: [
                "Tinggi: 60cm",
                "DOF: 24 Servo Motors",
                "Controller: CM-530 + OpenCR",
                "Audio: Synchronized Music System"
            ],
            competitions: [
                "KRSTI Regional Jawa Tengah",
                "KRSTI Nasional",
                "RoboCup Humanoid Dance"
            ],
            achievements: [
                "Best Performance 2024",
                "Juara 2 Regional",
                "Best Choreography Award"
            ],
            teamMembers: [
                { name: "Anggota 1", role: "Team Leader", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 2", role: "Mechanical", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 3", role: "Motion Design", image: "/images/placeholder-profile.webp" },
                { name: "Anggota 4", role: "Programming", image: "/images/placeholder-profile.webp" }
            ]
        }
    }
];

// ===================================
// GALLERY DATA
// ===================================
export interface GalleryItem {
    id: string;
    title: string;
    image: string;
    category: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: "gallery-1",
        title: "Kompetisi KRI 2024",
        image: "/images/placeholder.webp",
        category: "Kompetisi"
    },
    {
        id: "gallery-2",
        title: "Workshop PCB Design",
        image: "/images/placeholder.webp",
        category: "Workshop"
    },
    {
        id: "gallery-3",
        title: "Bonding Anggota Baru",
        image: "/images/placeholder.webp",
        category: "Kegiatan"
    },
    {
        id: "gallery-4",
        title: "Demo Robot Werkudara",
        image: "/images/placeholder.webp",
        category: "Kompetisi"
    },
    {
        id: "gallery-5",
        title: "Latihan Tim SAR",
        image: "/images/placeholder.webp",
        category: "Kegiatan"
    },
    {
        id: "gallery-6",
        title: "Penampilan Robot Tari",
        image: "/images/placeholder.webp",
        category: "Kompetisi"
    },
    {
        id: "gallery-7",
        title: "Rapat Tahunan",
        image: "/images/placeholder.webp",
        category: "Kegiatan"
    },
    {
        id: "gallery-8",
        title: "Kunjungan Industri",
        image: "/images/placeholder.webp",
        category: "Workshop"
    }
];

// ===================================
// BLOG DATA
// ===================================
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    link?: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "blog-1",
        title: "Robotika UNS Raih Juara di KRI 2024",
        excerpt: "Tim Werkudara berhasil membawa pulang medali emas pada Kontes Robot Indonesia 2024 yang diselenggarakan di Surabaya.",
        image: "/images/placeholder.webp",
        category: "Prestasi",
        date: "15 Nov 2024",
        readTime: "3 menit",
        link: "#"
    },
    {
        id: "blog-2",
        title: "Open Recruitment Anggota Baru 2024/2025",
        excerpt: "Pendaftaran anggota baru Tim Robotika UNS telah dibuka! Bergabunglah bersama kami untuk mengembangkan teknologi robotika.",
        image: "/images/placeholder.webp",
        category: "Pengumuman",
        date: "1 Nov 2024",
        readTime: "2 menit",
        link: "https://uns.id/OpenRecruitmentRobotikaUNS"
    },
    {
        id: "blog-3",
        title: "Workshop Dasar Pemrograman Robot",
        excerpt: "Belajar dasar-dasar pemrograman robot menggunakan Arduino dan ROS. Terbuka untuk umum dengan kuota terbatas.",
        image: "/images/placeholder.webp",
        category: "Workshop",
        date: "20 Okt 2024",
        readTime: "4 menit",
        link: "#"
    },
    {
        id: "blog-4",
        title: "Kolaborasi dengan Industri: Kunjungan ke PT XYZ",
        excerpt: "Tim Robotika UNS melakukan kunjungan industri ke perusahaan teknologi untuk mempelajari implementasi robotika di dunia nyata.",
        image: "/images/placeholder.webp",
        category: "Kegiatan",
        date: "10 Okt 2024",
        readTime: "5 menit",
        link: "#"
    },
    {
        id: "blog-5",
        title: "Tips Mempersiapkan Diri untuk Kompetisi Robot",
        excerpt: "Panduan lengkap bagaimana mempersiapkan mental, teknis, dan tim untuk menghadapi kompetisi robot tingkat nasional.",
        image: "/images/placeholder.webp",
        category: "Tips",
        date: "5 Okt 2024",
        readTime: "6 menit",
        link: "#"
    },
    {
        id: "blog-6",
        title: "Mengenal Lebih Dekat Divisi Elektronis",
        excerpt: "Apa saja yang dipelajari di divisi elektronis? Simak penjelasan lengkapnya di artikel ini.",
        image: "/images/placeholder.webp",
        category: "Divisi",
        date: "28 Sep 2024",
        readTime: "4 menit",
        link: "#"
    }
];

// ===================================
// FAQ DATA
// ===================================
export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
    {
        id: "faq-1",
        question: "Bagaimana cara mendaftar menjadi anggota Robotika UNS?",
        answer: "Kamu bisa mendaftar melalui link pendaftaran yang tersedia di website ini. Pendaftaran dibuka setiap awal semester. Isi formulir dengan lengkap dan ikuti seluruh rangkaian seleksi yang akan diinformasikan lebih lanjut."
    },
    {
        id: "faq-2",
        question: "Apakah harus dari jurusan teknik untuk bergabung?",
        answer: "Tidak! Robotika UNS terbuka untuk seluruh mahasiswa aktif UNS dari berbagai jurusan. Kami memiliki divisi teknis dan non-teknis, sehingga kamu bisa menyesuaikan dengan minat dan kemampuanmu."
    },
    {
        id: "faq-3",
        question: "Apa saja yang dipelajari di Robotika UNS?",
        answer: "Di divisi teknis, kamu akan belajar desain mekanik (CAD), elektronika, pemrograman robot, dan AI. Di divisi non-teknis, kamu akan belajar tentang manajemen event, public relations, keuangan, dan administrasi organisasi."
    },
    {
        id: "faq-4",
        question: "Berapa biaya untuk bergabung?",
        answer: "Tidak ada biaya pendaftaran. Namun, ada iuran anggota per semester yang digunakan untuk operasional organisasi dan kegiatan. Besaran iuran akan diinformasikan saat seleksi."
    },
    {
        id: "faq-5",
        question: "Bagaimana jadwal kegiatan di Robotika UNS?",
        answer: "Kegiatan rutin dilakukan di luar jam kuliah, biasanya di sore hingga malam hari. Jadwal fleksibel dan bisa disesuaikan dengan jadwal kuliah masing-masing anggota."
    },
    {
        id: "faq-6",
        question: "Apakah freshmen/mahasiswa baru bisa bergabung?",
        answer: "Tentu saja! Kami sangat welcome untuk mahasiswa baru. Tidak perlu pengalaman sebelumnya, yang penting adalah kemauan untuk belajar dan berkontribusi."
    },
    {
        id: "faq-7",
        question: "Kompetisi apa saja yang diikuti oleh Robotika UNS?",
        answer: "Kami aktif mengikuti Kontes Robot Indonesia (KRI) yang meliputi KRAI (Robot ABU), KRSRI (Robot SAR), dan KRSTI (Robot Tari). Selain itu, kami juga mengikuti kompetisi robotika lainnya baik tingkat nasional maupun internasional."
    },
    {
        id: "faq-8",
        question: "Di mana lokasi basecamp/bengkel Robotika UNS?",
        answer: "Basecamp Robotika UNS terletak di Gedung Fakultas Teknik, Universitas Sebelas Maret, Kentingan, Surakarta. Silakan hubungi kami untuk informasi lebih lanjut."
    }
];

// ===================================
// CONTACT DATA
// ===================================
export interface SocialMedia {
    platform: string;
    link: string;
    username?: string;
}

export interface ContactInfo {
    email: string;
    whatsapp: string;
    phone?: string;
    location: string;
    address: string;
    operatingHours: string;
    socialMedia: SocialMedia[];
}

export const CONTACT_INFO: ContactInfo = {
    email: "robotika@uns.ac.id",
    whatsapp: "+62 812-3456-7890",
    location: "Graha Ormawa 2, UNS",
    address: "Graha Ormawa 2, Universitas Sebelas Maret, Kentingan, Surakarta",
    operatingHours: "Senin - Jumat, 16:00 - 21:00 WIB",
    socialMedia: [
        {
            platform: "Instagram",
            link: "https://instagram.com/robotika_uns",
            username: "@robotika_uns"
        },
        {
            platform: "Youtube",
            link: "https://youtube.com/@robotikaans",
            username: "Robotika UNS"
        },
        {
            platform: "LinkedIn",
            link: "https://linkedin.com/company/robotika-uns",
            username: "Robotika UNS"
        }
    ]
};

// ===================================
// SPONSORS DATA
// ===================================
export interface Sponsor {
    id: string;
    name: string;
    logo: string;
    link?: string;
    tier?: "platinum" | "gold" | "silver" | "bronze";
}

export const SPONSORS: Sponsor[] = [
    {
        id: "sponsor-1",
        name: "Sponsor 1",
        logo: "/images/placeholder.webp",
        link: "#",
        tier: "platinum"
    },
    {
        id: "sponsor-2",
        name: "Sponsor 2",
        logo: "/images/placeholder.webp",
        link: "#",
        tier: "gold"
    },
    {
        id: "sponsor-3",
        name: "Sponsor 3",
        logo: "/images/placeholder.webp",
        link: "#",
        tier: "gold"
    },
    {
        id: "sponsor-4",
        name: "Sponsor 4",
        logo: "/images/placeholder.webp",
        link: "#",
        tier: "silver"
    }
];

export const MEDIA_PARTNERS: Sponsor[] = [
    {
        id: "media-1",
        name: "Media Partner 1",
        logo: "/images/placeholder.webp",
        link: "#"
    },
    {
        id: "media-2",
        name: "Media Partner 2",
        logo: "/images/placeholder.webp",
        link: "#"
    },
    {
        id: "media-3",
        name: "Media Partner 3",
        logo: "/images/placeholder.webp",
        link: "#"
    },
    {
        id: "media-4",
        name: "Media Partner 4",
        logo: "/images/placeholder.webp",
        link: "#"
    },
    {
        id: "media-5",
        name: "Media Partner 5",
        logo: "/images/placeholder.webp",
        link: "#"
    }
];

// ===================================
// NAVIGATION DATA
// ===================================
export interface NavItem {
    name: string;
    href: string;
    isExternal?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Kami", href: "#philosophy" },
    { name: "Divisi", href: "#divisions" },
    { name: "Tim", href: "#team" },
    { name: "Galeri", href: "#gallery" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
];

export const REGISTER_LINK: NavItem = {
    name: "Daftar Sekarang",
    href: "https://uns.id/OpenRecruitmentRobotikaUNS",
    isExternal: true,
};

// ===================================
// FOOTER DATA
// ===================================
export const FOOTER_QUICK_LINKS: NavItem[] = [
    { name: "Tentang Kami", href: "#philosophy" },
    { name: "Divisi", href: "#divisions" },
    { name: "Tim Robot", href: "#team" },
    { name: "Galeri", href: "#gallery" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
];

export const FOOTER_CONTENT = {
    organizationName: "Robotika UNS",
    tagline: "Dari Anggota Untuk Anggota, Mari Membangun Rumah Kita.",
    description: "Unit Kegiatan Mahasiswa Robotika Universitas Sebelas Maret. Wadah pengembangan inovasi dan prestasi di bidang robotika.",
    copyright: `© ${new Date().getFullYear()} Tim Robotika UNS. All rights reserved.`,
    madeWithLove: "Dibuat dengan ❤️ oleh Tim Robotika UNS",
};

// ===================================
// REGISTRATION SECTION DATA
// ===================================
export interface StatItem {
    iconName: "users" | "trophy" | "cpu" | "sparkles";
    value: string;
    label: string;
}

export const REGISTRATION_CONTENT = {
    badge: "Open Recruitment 2024/2025",
    title: "Bergabung Bersama Kami",
    subtitle: "Jadilah bagian dari keluarga besar Robotika UNS. Kembangkan skill, raih prestasi, dan ciptakan robot impianmu bersama kami!",
    ctaButton: "Daftar Sekarang",
    ctaLink: "https://uns.id/OpenRecruitmentRobotikaUNS",
    secondaryButton: "Punya Pertanyaan?",
    secondaryLink: "#faq",
    note: "* Terbuka untuk seluruh mahasiswa aktif Universitas Sebelas Maret",
    stats: [
        { iconName: "users" as const, value: "50+", label: "Anggota Aktif" },
        { iconName: "trophy" as const, value: "20+", label: "Prestasi" },
        { iconName: "cpu" as const, value: "3", label: "Tim Robot" },
        { iconName: "sparkles" as const, value: "8", label: "Divisi" },
    ] as StatItem[],
};

// ===================================
// HERO PARALLAX PRODUCTS
// ===================================
export interface HeroProduct {
    title: string;
    link: string;
    thumbnail: string;
}

export const HERO_PRODUCTS: HeroProduct[] = [
    {
        title: "Robotika UNS",
        link: "#",
        thumbnail: "/images/hero-bg-placeholder.webp",
    },
    {
        title: "Divisi Non-Teknis",
        link: "#divisions",
        thumbnail: "/images/placeholder.webp",
    },
    {
        title: "Divisi Teknis",
        link: "#divisions",
        thumbnail: "/images/placeholder.webp",
    },
    {
        title: "Werkudara",
        link: "#team",
        thumbnail: "/images/werkudara_bot.webp",
    },
    {
        title: "Sambergeni",
        link: "#team",
        thumbnail: "/images/sambergeni_bot.webp",
    },
    {
        title: "Sriwedari",
        link: "#team",
        thumbnail: "/images/sriwedari_bot.webp",
    },
    {
        title: "Prestasi 2024",
        link: "#",
        thumbnail: "/images/placeholder.webp",
    },
    {
        title: "Kegiatan Bonding",
        link: "#",
        thumbnail: "/images/placeholder.webp",
    },
    {
        title: "Riset & Development",
        link: "#",
        thumbnail: "/images/placeholder.webp",
    },
    {
        title: "Workshop Robotika",
        link: "#",
        thumbnail: "/images/placeholder.webp",
    },
    {
        title: "Kontes Robot Indonesia",
        link: "#",
        thumbnail: "/images/placeholder.webp",
    },
    {
        title: "Komunitas",
        link: "#",
        thumbnail: "/images/placeholder.webp",
    },
    {
        title: "Inovasi Masa Depan",
        link: "#",
        thumbnail: "/images/placeholder.webp",
    },
    {
        title: "Bergabung Bersama Kami",
        link: "#",
        thumbnail: "/images/placeholder.webp",
    },
    {
        title: "Teknologi Canggih",
        link: "#",
        thumbnail: "/images/placeholder.webp",
    },
];

// ===================================
// SECTION TITLES
// ===================================
export const SECTION_TITLES = {
    divisions: {
        title: "Our Divisions",
        subtitle: "Kenali divisi-divisi yang ada di Robotika UNS",
        techTitle: "Divisi Teknis",
        nonTechTitle: "Divisi Non-Teknis",
    },
    team: {
        title: "Our Team",
        subtitle: "Tim robot yang siap berkompetisi",
    },
    gallery: {
        title: "Galeri Kegiatan",
        subtitle: "Dokumentasi kegiatan dan momen berharga Robotika UNS",
    },
    blog: {
        title: "Blog & Berita",
        subtitle: "Artikel dan berita terbaru dari Robotika UNS",
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Pertanyaan yang sering diajukan tentang Robotika UNS",
    },
    sponsors: {
        title: "Sponsors & Partners",
        subtitle: "Terima kasih kepada sponsor dan partner yang mendukung kami",
        sponsorLabel: "Our Sponsors",
        mediaPartnerLabel: "Media Partners",
    },
    contact: {
        title: "Hubungi Kami",
        subtitle: "Punya pertanyaan? Jangan ragu untuk menghubungi kami",
    },
};

// ===================================
// GOOGLE FORM LINKS
// ===================================
export const FORM_LINKS = {
    registration: "https://uns.id/OpenRecruitmentRobotikaUNS",
    contact: "https://uns.id/OpenRecruitmentRobotikaUNS"
};
