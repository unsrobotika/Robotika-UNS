# Robotika UNS - Landing Page

Official Landing Page untuk **Tim Robotika Universitas Sebelas Maret (UNS)**. 

Website ini dibangun dengan modern tech stack untuk memberikan pengalaman terbaik kepada pengunjung, khususnya mahasiswa UNS yang ingin bergabung dengan tim robotika.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-FF0050?style=flat-square&logo=framer)

---

## Fitur

### Design & UI
- **Dark Theme** - Tema gelap modern dengan warna biru tua branding
- **Responsive Design** - Optimal di desktop, tablet, dan mobile
- **Smooth Animations** - Animasi halus menggunakan Framer Motion
- **Glassmorphism Effects** - Efek blur dan transparansi modern
- **Custom Scrollbar** - Scrollbar yang match dengan tema

### Navigation
- **Floating Navigation** - Navbar yang mengikuti scroll
- **Hamburger Menu** - Menu mobile dengan drawer slide-out
- **Smooth Scroll** - Scroll halus antar section menggunakan Lenis
- **Section Anchors** - Navigasi langsung ke section tertentu

### Sections
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

### Technical
- **SEO Optimized** - Meta tags, OG tags, dan structured data
- **Performance** - Dynamic imports dan code splitting
- **Accessibility** - Alt text, aria labels, semantic HTML
- **TypeScript** - Type safety untuk development
- **Centralized Data** - Semua konten text di `src/lib/data.ts`

---

## Quick Start

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

## Penjelasan Detail File & Struktur Proyek

Berikut adalah panduan lengkap mengenai file-file penting dalam proyek ini. Pahami struktur ini untuk memudahkan proses editing.

### 1. **Core System (`src/app/`)**
Folder ini mengatur routing dan kerangka utama website.
- **`layout.tsx`**: File induk dari seluruh halaman. Mengatur font (Inter, Robotika), metadata SEO (Title, Description), dan membungkus halaman dengan `smooth-scroll`. Edit file ini jika ingin mengubah favicon atau meta tags.
- **`page.tsx`**: Halaman utama (Homepage). File ini menyusun urutan section (Hero -> About -> Divisions -> dst). Jika ingin mengubah urutan tampilan website, ubah di sini.
- **`globals.css`**: Menyimpan variabel warna (CSS Variables) dan style global. Style reset dan konfigurasi Tailwind Custom ada di sini.

### 2. **Pusat Konten (`src/lib/`)**
- **`data.ts`** (**SANGAT PENTING**): File ini adalah "Database" sederhana website. **90% pengeditan teks dan gambar dilakukan di sini.** Berisi:
  - Teks Navigasi & Footer (`NAV_ITEMS`, `FOOTER_CONTENT`)
  - Konten Hero & Produk Parallax (`HERO_CONTENT`, `HERO_PRODUCTS`)
  - Data Divisi Teknis & Non-Teknis (`TECH_DIVISIONS`)
  - Profil Tim Robot (`TEAMS`)
  - Data Galeri, Blog, FAQ, dan Sponsor.
- **`utils.ts`**: Fungsi bantuan (utility) untuk menggabungkan class name (cn). Jarang perlu diedit.

### 3. **Komponen Bagian (`src/components/sections/`)**
Setiap file di sini mewakili satu blok tampilan di website (dari atas ke bawah):
- **`Header.tsx`**: Navbar bagian atas. Mengatur logo dan menu responsif (Mobile Drawer).
- **`Hero.tsx`**: Bagian paling atas website (Parallax effect). Memanggil `HeroParallax.tsx`.
- **`Philosophy.tsx`**: Section "Tentang Kami". Menampilkan Visi & Misi menggunakan kartu bolak-balik (`FlipCard`).
- **`UnifiedDivisions.tsx`**: Menampilkan daftar Divisi. Menggunakan `HorizontalScrollCarousel` untuk non-teknis dan Grid untuk teknis. Membuka `BentoModal` saat diklik.
- **`TeamRadial.tsx`**: Menampilkan 3 Tim Robot (Werkudara, Sambergeni, Sriwedari) dalam layout melingkar yang futuristik. Membuka `TeamBentoModal`.
- **`Gallery.tsx`**: Galeri foto kegiatan dengan filter kategori.
- **`Blog.tsx`**: Daftar berita atau artikel terbaru.
- **`FAQ.tsx`**: Daftar pertanyaan yang sering diajukan (Accordion).
- **`Sponsors.tsx`**: Carousel logo sponsor dan media partner.
- **`Registration.tsx`**: Form/CTA untuk pendaftaran anggota baru.
- **`Contact.tsx`**: Informasi kontak (Alamat, Email, Map).
- **`Footer.tsx`**: Bagian paling bawah website (Copyright & Links).
- **`AIChat.tsx`**: Chatbot Floating di pojok kanan bawah.

### 4. **Komponen UI (`src/components/ui/`)**
Komponen visual yang dapat digunakan kembali (Reusable):
- **`HeroParallax.tsx`**: Efek animasi scrolling canggih pada bagian Hero (Produk bergerak saat discroll).
- **`FloatingNavbar.tsx`**: Navbar yang muncul/hilang saat discroll (Dynamic Island style).
- **`BentoModal.tsx`**: Modal popup detail untuk Divisi. Menggunakan layout grid bento box.
- **`TeamBentoModal.tsx`**: Modal popup khusus untuk Detail Tim Robot (Layout sedikit berbeda dari divisi).
- **`FlipCard.tsx`**: Kartu Visi Misi yang bisa berputar saat di-hover.
- **`ScrollReveal.tsx`**: Wrapper animasi agar elemen muncul perlahan (fade-in) saat discroll.
- **`HorizontalScrollCarousel.jsx`**: Logic untuk scroll menyamping pada bagian Divisi Non-Teknis.

### 5. **Assets (`public/`)**
Tempat menyimpan file statis (Gambar, Icon, Logo).
- **`images/`**: Folder utama gambar.
- **`favicon.ico`**: Ikon tab browser.
- **`MainLogo.jpg`**: Logo utama website.

---

## Cara Mengubah Konten

**Semua konten website terpusat di file `src/lib/data.ts`.** Edit file ini untuk mengubah seluruh teks dan data yang tampil di website.

### Navigation & Header
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

### Hero Section
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

### About Us & Philosophy
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

### Divisi
```typescript
export const NON_TECH_DIVISIONS = [...];  // HR, Humas, Sekretaris, Bendahara
export const TECH_DIVISIONS = [...];       // Desain, Elektronis, Pemrograman, R&D
```

### Tim Robot
```typescript
export const TEAMS = [
    { name: "Werkudara", desc: "Robot ABU", ... },
    { name: "Sambergeni", desc: "Robot SAR", ... },
    { name: "Sriwedari", desc: "Robot Tari Humanoid", ... }
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

### Registration Section
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

### Section Titles
```typescript
export const SECTION_TITLES = {
    divisions: { title: "Our Divisions", subtitle: "..." },
    team: { title: "Our Team", subtitle: "..." },
    gallery: { title: "Galeri Kegiatan", subtitle: "..." },
    // ... semua judul section
};
```

### Footer Content
```typescript
export const FOOTER_CONTENT = {
    organizationName: "Robotika UNS",
    tagline: "Dari Anggota Untuk Anggota...",
    copyright: "© 2024 Tim Robotika UNS. All rights reserved.",
};

export const FOOTER_QUICK_LINKS = [...]; // Link navigasi footer
```

### Form Links
```typescript
export const FORM_LINKS = {
    registration: "https://uns.id/OpenRecruitmentRobotikaUNS",
    contact: "https://uns.id/OpenRecruitmentRobotikaUNS"
};
```

---

## Design System

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

## Deploy ke Vercel

1. Push repository ke GitHub
2. Buka [vercel.com](https://vercel.com) dan login
3. Klik "New Project"
4. Import repository dari GitHub
5. Klik "Deploy"

---

## License

© 2024 Tim Robotika UNS. All rights reserved.

---

## Kontribusi

Ingin berkontribusi? Silakan buat pull request atau hubungi tim pengembang.

---

<p align="center">
  Dibuat oleh Tim Robotika UNS
</p>
