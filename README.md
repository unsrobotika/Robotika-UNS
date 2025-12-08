
# 🤖 Dokumentasi Proyek Web Robotika UNS

Selamat datang di repository website **Tim Robotika UNS**. Dokumen ini dibuat untuk memandu Anda memahami struktur kode, fungsi setiap file, dan cara mengedit website ini dengan mudah.

---

## 🏗️ Struktur Proyek (High-Level)

Website ini dibangun menggunakan **Next.js 14** (App Router), **Tailwind CSS** untuk styling, dan **Framer Motion** untuk animasi. Berikut adalah peta navigasi folder utama:

```
d:\Coding\Robotik26\Robotika-UNS\
├── public/                 # File aset statis (Gambar, Logo, Font)
├── src/
│   ├── app/                # Halaman utama & Layout global
│   ├── components/         # Kumpulan komponen UI & Section
│   ├── lib/                # Data statis & Fungsi utilitas
│   └── hooks/              # Custom React Hooks
└── README.md               # Panduan ini
```

---

## 📂 Penjelasan Detail Per File

Berikut adalah penjelasan fungsi dari file-file penting yang akan sering Anda akses:

### 1. `src/app/` (Halaman & Routing)
Folder ini adalah "otak" dari routing website.
*   **`page.tsx`**: Halaman utama (Home). File ini menyatukan semua bagian website (Hero, Philosophy, Carousel, dll). Di sini juga tempat kita mengatur konten popup carousel.
*   **`layout.tsx`**: Wrapper global. Berisi Navbar, Font setting, dan Smooth Scroll yang avkan muncul di *setiap* halaman.
*   **`globals.css`**: CSS utama. Berisi konfigurasi Tailwind dan variabel warna global.

### 2. `src/lib/` (Pusat Data)
*   **`data.ts` ⭐️ PENTING**: File ini adalah **DATABASE** sederhana website ini.
    *   Berisi semua teks, judul, deskripsi, dan link gambar.
    *   Edit file ini jika Anda hanya ingin mengubah isi konten (seperti nama divisi, deskripsi tim, foto profil) tanpa menyentuh kode tampilan.
    *   Variabel utama: `HERO_CONTENT`, `PHILOSOPHY_CONTENT`, `NON_TECH_DIVISIONS`, `TECH_DIVISIONS`, `TEAMS`.

### 3. `src/components/sections/` (Bagian-Bagian Halaman)
Komponen besar yang menyusun halaman utama `page.tsx`.
*   **`Hero.tsx`**: Tampilan layar awal (paling atas). Saat ini menggunakan efek *Parallax* (gambar bergerak saat discroll).
*   **`Philosophy.tsx`**: Bagian Visi & Misi. Menggunakan background Hexagon animasi.
*   **`Footer.tsx`**: Bagian paling bawah (Copyright, Social Media, Alamat).

### 4. `src/components/ui/` (Komponen Kecil & Interaktif)
Komponen reusable yang dipakai di dalam sections.
*   **`FloatingNavbar.tsx`**: Menu navigasi yang "mengambang" di atas.
*   **`AppleCardsCarousel.tsx`**: Carousel (slider) kartu bergaya Apple untuk menampilkan Divisi & Tim.
*   **`HeroParallax.tsx`**: Logika animasi untuk bagian Hero.
*   **`ScrollReveal.tsx`**: Wrapper animasi agar elemen muncul perlahan (fade-in) saat discroll.
*   **`HexagonBackground.tsx`**: Komponen background pola hexagon.

---

## 🛠️ Panduan Mengedit (How-To)

### 📝 Mengedit Teks & Data
Hampir 90% konten website bisa diedit lewat **`src/lib/data.ts`**.
1.  Buka `src/lib/data.ts`.
2.  Cari teks yang ingin diubah.
3.  Simpan file (`Ctrl + S`), website akan update otomatis.

### 🖼️ Mengganti Gambar
1.  Siapkan file gambar (usahakan `.jpg` atau `.webp` agar ringan).
2.  Masukkan file ke folder **`public/images/`**.
3.  Buka `src/lib/data.ts`.
4.  Cari bagian `image:` atau `thumbnail:` dan ganti path-nya sesuai nama file baru.
    *   Contoh: `image: "/images/foto-baru.jpg"`

### 🎠 Mengedit Isi Popup Carousel (Layar Besar)
Konten detail yang muncul saat kartu carousel diklik diatur di **`src/app/page.tsx`**.
1.  Buka `src/app/page.tsx`.
2.  Cari function `mapToCards`.
3.  Edit bagian variabel `const content = (...)`. Anda bisa menambah paragraf atau elemen HTML lain di situ.

---

## 🚀 Cara Menjalankan Project

Jika Anda baru pertama kali download project ini:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Jalankan Server Lokal**:
    ```bash
    npm run dev
    ```
3.  Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## ⚠️ Troubleshooting Common Issues

*   **Gambar Tidak Muncul (404)**: Pastikan nama file di folder `public/images/` persis sama dengan yang ditulis di kode (besar kecil huruf berpengaruh).
*   **Build Error**: Jika gagal saat `npm run build`, biasanya ada error TypeScript (tipe data salah) atau import file yang tidak ditemukan. Cek terminal untuk pesan error detail.
