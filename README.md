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
- **Cursor Trail Effect** - Efek cursor interaktif

### 📱 Navigation
- **Floating Navigation** - Navbar yang mengikuti scroll
- **Hamburger Menu** - Menu mobile dengan drawer slide-out
- **Smooth Scroll** - Scroll halus antar section menggunakan Lenis
- **Section Anchors** - Navigasi langsung ke section tertentu

### 📄 Sections
1. **Hero** - Parallax hero section dengan gambar produk/kegiatan
2. **Philosophy** - Visi, Misi, dan filosofi organisasi
3. **Divisions** - Divisi teknis dan non-teknis dengan modal detail
4. **Team** - Tim robot (Werkudara, Sambergeni, Sriwedari)
5. **Gallery** - Galeri foto dengan filter kategori dan lightbox
6. **Blog** - Artikel dan berita terbaru
7. **FAQ** - Pertanyaan umum dengan accordion
8. **Sponsors** - Logo sponsor dan media partner
9. **Registration** - CTA pendaftaran anggota baru
10. **Contact** - Informasi kontak dan social media
11. **Footer** - Links, kontak, dan social media

### 🔧 Technical
- **SEO Optimized** - Meta tags, OG tags, dan structured data
- **Performance** - Dynamic imports dan code splitting
- **Accessibility** - Alt text, aria labels, semantic HTML
- **TypeScript** - Type safety untuk development

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
│   │   ├── Philosophy.tsx        # Visi & misi dengan flip cards
│   │   ├── UnifiedDivisions.tsx  # Carousel divisi teknis & non-teknis
│   │   ├── TeamRadial.tsx        # Tim robot dengan layout radial
│   │   ├── Gallery.tsx           # Galeri foto dengan lightbox
│   │   ├── Blog.tsx              # Daftar artikel/berita
│   │   ├── FAQ.tsx               # Accordion FAQ
│   │   ├── Sponsors.tsx          # Logo sponsor & media partner
│   │   ├── Registration.tsx      # CTA pendaftaran
│   │   ├── Contact.tsx           # Informasi kontak
│   │   ├── Footer.tsx            # Footer dengan links
│   │   └── AIChat.tsx            # AI chatbot (opsional)
│   │
│   ├── ui/                       # Reusable UI components
│   │   ├── FloatingNavbar.tsx    # Floating navigation
│   │   ├── HeroParallax.tsx      # Parallax effect untuk hero
│   │   ├── CursorTrails.tsx      # Cursor effect
│   │   └── ...
│   │
│   ├── providers/                # Context providers
│   │   └── MotionProvider.tsx    # Framer Motion provider
│   │
│   └── SmoothScroll.tsx          # Lenis smooth scroll wrapper
│
├── lib/
│   ├── data.ts                   # Data content (EDIT INI UNTUK MENGUBAH KONTEN)
│   └── utils.ts                  # Utility functions
│
└── hooks/                        # Custom React hooks
    └── ...

public/
├── MainLogo.jpg                  # Logo utama Robotika UNS
├── images/                       # Gambar assets
│   ├── placeholder.webp          # Placeholder image
│   ├── werkudara_bot.webp        # Foto robot Werkudara
│   ├── sambergeni_bot.webp       # Foto robot Sambergeni
│   └── ...
└── favicon.ico                   # Favicon
```

---

## 📝 Cara Mengubah Konten

Semua konten website terpusat di file `src/lib/data.ts`. Edit file ini untuk mengubah:

### Hero & Philosophy
```typescript
export const HERO_CONTENT = {
    title: "ROBOTIKA UNS",
    subtitle: "Tagline kamu di sini"
};

export const PHILOSOPHY_CONTENT = {
    visi: "Visi organisasi...",
    misi: "Misi organisasi..."
};
```

### Divisi
```typescript
export const NON_TECH_DIVISIONS = [...];  // Divisi non-teknis
export const TECH_DIVISIONS = [...];       // Divisi teknis
```

### Tim Robot
```typescript
export const TEAMS = [
    { name: "Werkudara", ... },
    { name: "Sambergeni", ... },
    { name: "Sriwedari", ... }
];
```

### Galeri, Blog, FAQ
```typescript
export const GALLERY_ITEMS = [...];   // Item galeri
export const BLOG_POSTS = [...];      // Artikel blog
export const FAQ_ITEMS = [...];       // Pertanyaan FAQ
```

### Kontak & Sponsor
```typescript
export const CONTACT_INFO = {...};    // Info kontak
export const SPONSORS = [...];        // Daftar sponsor
export const MEDIA_PARTNERS = [...];  // Media partner
```

### Link Google Form
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
