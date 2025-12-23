# 🤖 Robotika UNS - Landing Page

Official Landing Page untuk **Tim Robotika Universitas Sebelas Maret (UNS)**. 

Website ini dibangun dengan modern tech stack untuk memberikan pengalaman terbaik kepada pengunjung, khususnya mahasiswa UNS yang ingin bergabung dengan tim robotika.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-FF0050?style=flat-square&logo=framer)

---

## ✨ Fitur

### 🎨 Design & UI
- **Dark Theme** - Tema gelap modern dengan warna biru tua branding
- **Responsive Design** - Optimal di desktop, tablet, dan mobile
- **Smooth Animations** - Animasi halus menggunakan Framer Motion
- **Glassmorphism Effects** - Efek blur dan transparansi modern
- **Custom Scrollbar** - Scrollbar yang match dengan tema

### 📱 Navigation
- **Floating Navigation** - Navbar yang mengikuti scroll
- **Hamburger Menu** - Menu mobile dengan drawer slide-out
- **Smooth Scroll** - Scroll halus antar section menggunakan Lenis
- **Section Anchors** - Navigasi langsung ke section tertentu

### 📄 Sections
1. **Hero** - Parallax hero section dengan gambar produk/kegiatan
2. **About Us** - Tentang kami, Visi & Misi dengan flip cards
3. **Divisions** - Divisi teknis dan non-teknis dengan bento modal detail
4. **Team** - Tim robot (Werkudara, Sambergeni, Sriwedari) dengan layout radial
5. **Gallery** - Galeri foto dengan filter kategori dan lightbox
6. **Blog** - Artikel dan berita terbaru
7. **FAQ** - Pertanyaan umum dengan accordion
8. **Sponsors** - Logo sponsor dan media partner
9. **Registration** - CTA pendaftaran anggota baru
10. **Contact** - Informasi kontak dan social media
11. **Footer** - Links, kontak, dan social media
12. **AI Chat** - Chatbot AI untuk menjawab pertanyaan pengunjung

### 🔧 Technical
- **SEO Optimized** - Meta tags, OG tags, dan structured data
- **Performance** - Dynamic imports dan code splitting
- **Accessibility** - Alt text, aria labels, semantic HTML
- **TypeScript** - Type safety untuk development
- **Centralized Data** - Semua konten text di `src/lib/data.ts`

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd Robotika-UNS

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

```bash
# Build
npm run build

# Start production server
npm start
```

---

## 📁 Struktur Folder

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css               # Design system & global styles
│   ├── layout.tsx                # Root layout dengan SEO metadata
│   └── page.tsx                  # Halaman utama
│
├── components/
│   ├── sections/                 # Section components
│   │   ├── Header.tsx            # Navbar responsive + hamburger menu
│   │   ├── Hero.tsx              # Hero parallax section
│   │   ├── Philosophy.tsx        # About Us, Visi & Misi flip cards
│   │   ├── UnifiedDivisions.tsx  # Carousel divisi teknis & non-teknis
│   │   ├── TeamRadial.tsx        # Tim robot dengan layout radial
│   │   ├── Gallery.tsx           # Galeri foto dengan lightbox
│   │   ├── Blog.tsx              # Daftar artikel/berita
│   │   ├── FAQ.tsx               # Accordion FAQ
│   │   ├── Sponsors.tsx          # Logo sponsor & media partner
│   │   ├── Registration.tsx      # CTA pendaftaran
│   │   ├── Contact.tsx           # Informasi kontak
│   │   ├── Footer.tsx            # Footer dengan links
│   │   └── AIChat.tsx            # AI chatbot
│   │
│   ├── ui/                       # Reusable UI components
│   │   ├── FloatingNavbar.tsx    # Floating navigation
│   │   ├── HeroParallax.tsx      # Parallax effect untuk hero
│   │   ├── FlipCard.tsx          # Flip card untuk visi misi
│   │   ├── ScrollReveal.tsx      # Scroll reveal animation
│   │   └── ...
│   │
│   ├── providers/                # Context providers
│   │   └── MotionProvider.tsx    # Framer Motion provider
│   │
│   └── SmoothScroll.tsx          # Lenis smooth scroll wrapper
│
├── lib/
│   ├── data.ts                   # ⭐ SEMUA DATA KONTEN WEBSITE
│   └── utils.ts                  # Utility functions
│
└── hooks/                        # Custom React hooks

public/
├── MainLogo.jpg                  # Logo utama Robotika UNS
├── images/                       # Gambar assets
│   ├── placeholder.webp          # Placeholder image
│   ├── werkudara_bot.webp        # Foto robot Werkudara
│   ├── sambergeni_bot.webp       # Foto robot Sambergeni
│   ├── sriwedari_bot.webp        # Foto robot Sriwedari
│   └── ...
└── favicon.ico                   # Favicon
```

---

## 📝 Cara Mengubah Konten

**Semua konten website terpusat di file `src/lib/data.ts`.** Edit file ini untuk mengubah seluruh teks dan data yang tampil di website.

### 🧭 Navigation & Header
```typescript
export const NAV_ITEMS = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Kami", href: "#philosophy" },
    // ... tambah/edit menu navigasi
];

export const REGISTER_LINK = {
    name: "Daftar Sekarang",
    href: "https://uns.id/OpenRecruitmentRobotikaUNS",
    isExternal: true,
};
```

### 🏠 Hero Section
```typescript
export const HERO_CONTENT = {
    title: "ROBOTIKA UNS",
    subtitle: "Dari Anggota Untuk Anggota, Mari Membangun Rumah Kita."
};

export const HERO_PRODUCTS = [
    { title: "Robotika UNS", link: "#", thumbnail: "/images/hero-bg.webp" },
    // ... tambah gambar parallax
];
```

### 📖 About Us & Philosophy
```typescript
export const ABOUT_US_CONTENT = {
    title: "About Us",
    description: "Deskripsi organisasi...",
    subtitle: "Kenali lebih dekat keluarga besar Robotika UNS"
};

export const PHILOSOPHY_CONTENT = {
    visi: "Visi organisasi...",
    misi: "Misi organisasi..."
};
```

### 🔧 Divisi
```typescript
export const NON_TECH_DIVISIONS = [...];  // HR, Humas, Sekretaris, Bendahara
export const TECH_DIVISIONS = [...];       // Desain, Elektronis, Pemrograman, R&D
```

### 🤖 Tim Robot
```typescript
export const TEAMS = [
    { name: "Werkudara", desc: "Robot ABU", ... },
    { name: "Sambergeni", desc: "Robot SAR", ... },
    { name: "Sriwedari", desc: "Robot Tari Humanoid", ... }
];
```

### 🖼️ Galeri, Blog, FAQ
```typescript
export const GALLERY_ITEMS = [...];   // Item galeri
export const BLOG_POSTS = [...];      // Artikel blog
export const FAQ_ITEMS = [...];       // Pertanyaan FAQ
```

### 📞 Kontak & Sponsor
```typescript
export const CONTACT_INFO = {
    email: "robotika@uns.ac.id",
    whatsapp: "+62 812-3456-7890",
    location: "Laboratorium Robotika UNS",
    address: "...",
    socialMedia: [...]
};

export const SPONSORS = [...];        // Daftar sponsor
export const MEDIA_PARTNERS = [...];  // Media partner
```

### 📋 Registration Section
```typescript
export const REGISTRATION_CONTENT = {
    badge: "Open Recruitment 2024/2025",
    title: "Bergabung Bersama Kami",
    subtitle: "Jadilah bagian dari keluarga besar...",
    ctaButton: "Daftar Sekarang",
    ctaLink: "https://uns.id/OpenRecruitmentRobotikaUNS",
    stats: [
        { iconName: "users", value: "50+", label: "Anggota Aktif" },
        // ...
    ]
};
```

### 🏷️ Section Titles
```typescript
export const SECTION_TITLES = {
    divisions: { title: "Our Divisions", subtitle: "..." },
    team: { title: "Our Team", subtitle: "..." },
    gallery: { title: "Galeri Kegiatan", subtitle: "..." },
    // ... semua judul section
};
```

### 🔗 Footer Content
```typescript
export const FOOTER_CONTENT = {
    organizationName: "Robotika UNS",
    tagline: "Dari Anggota Untuk Anggota...",
    copyright: "© 2024 Tim Robotika UNS. All rights reserved.",
};

export const FOOTER_QUICK_LINKS = [...]; // Link navigasi footer
```

### 📝 Form Links
```typescript
export const FORM_LINKS = {
    registration: "https://uns.id/OpenRecruitmentRobotikaUNS",
    contact: "https://uns.id/OpenRecruitmentRobotikaUNS"
};
```

---

## 🎨 Design System

CSS variables tersedia di `globals.css`:

```css
:root {
  /* Primary Colors */
  --color-primary: #1E40AF;
  --color-primary-light: #3B82F6;
  --color-accent: #06B6D4;
  
  /* Background */
  --color-bg-primary: #030712;
  --color-bg-secondary: #0F172A;
  
  /* Text */
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #CBD5E1;
}
```

---

## 🚀 Deploy ke Vercel

1. Push repository ke GitHub
2. Buka [vercel.com](https://vercel.com) dan login
3. Klik "New Project"
4. Import repository dari GitHub
5. Klik "Deploy"

---

## 📜 License

© 2024 Tim Robotika UNS. All rights reserved.

---

## 🤝 Kontribusi

Ingin berkontribusi? Silakan buat pull request atau hubungi tim pengembang.

---

<p align="center">
  Dibuat dengan ❤️ oleh Tim Robotika UNS
</p>
