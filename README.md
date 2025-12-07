
# Robotika UNS 2025 Landing Page

Website Landing Page untuk Tim Robotika UNS dengan tema "Futuristic Academic".
Dibangun menggunakan Next.js 14, Tailwind CSS, Framer Motion, dan Lenis Scroll.

## 🚀 Cara Menjalankan Project

1.  **Install Dependencies** (jika belum):
    ```bash
    npm install
    ```
2.  **Jalankan Server Development**:
    ```bash
    npm run dev
    ```
3.  Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 🎨 Panduan Kustomisasi Aset (Gambar & Font)

Semua file aset (gambar, font, icon) disimpan di dalam folder `public/`.

### 1. Mengganti Gambar Background Hero
*   Siapkan gambar background Anda (rekomendasi: resolusi tinggi, agak gelap).
*   Namai file tersebut: `hero-bg-placeholder.jpg`
*   Simpan di folder: `public/images/`
    *   *Path lengkap*: `d:\Coding\Robotik26\Robotika-UNS\public\images\hero-bg-placeholder.jpg`
*   Jika ingin menggunakan nama file lain, ubah kode di `src/components/sections/Hero.tsx`.

### 2. Mengganti Logo & Gambar Tim
Di halaman "Our Team" dan "Divisi", gambar diambil dari file `src/lib/data.ts`.
Untuk menggantinya:
1.  Masukkan file gambar baru Anda ke folder `public/images/`.
2.  Buka file `src/lib/data.ts`.
3.  Cari bagian `TEAMS` atau `NON_TECH_DIVISIONS`.
4.  Ubah bagian `image: "..."` atau `logo: "..."` sesuai nama file Anda.
    *   Contoh: `image: "/images/fotobanugroho.jpg"`

### 3. Mengganti Font (Custom Font)
Code saat ini mencari file font khusus di: `public/fonts/custom-font.ttf`.

*   **Langkah 1**: Siapkan file font Anda (format `.ttf`).
*   **Langkah 2**: Ubah namanya menjadi `custom-font.ttf`.
*   **Langkah 3**: Masukkan ke folder `public/fonts/`.
*   *Note*: Jika file Anda `.otf` atau namanya beda, Anda perlu mengedit `src/app/layout.tsx`.

### 4. Menambah Divisi / Tim Baru
Semua data teks ada di `src/lib/data.ts`. Anda bisa menambah atau mengurangi item di dalam array `NON_TECH_DIVISIONS`, `TECH_DIVISIONS`, atau `TEAMS` langsung di file tersebut.

---

## 🛠️ Tech Stack
*   **Framework**: Next.js 14 (App Router)
*   **Styling**: Tailwind CSS
*   **Animation**: Framer Motion
*   **Scroll**: Lenis
*   **Icons**: Lucide React
