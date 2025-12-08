
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

## 📖 Tutorial Lengkap: Menambah & Mengedit Komponen

Bagian ini menjelaskan cara membuat komponen baru (misalnya tombol khusus, kartu, atau section baru) dan cara mengeditnya.

### 📁 Struktur Folder Komponen
*   `src/components/ui/` -> Tempat komponen kecil/reusable (contoh: Button, Card, Typography).
*   `src/components/sections/` -> Tempat bagian besar halaman (contoh: Hero, About, Footer).
*   `src/app/page.tsx` -> Halaman utama yang menyusun semua component sections.

### ➕ Cara Menambahkan Komponen Baru

Misalkan kita ingin membuat komponen baru bernama `NotificationBanner`.

#### Langkah 1: Buat File Baru
Buat file baru di folder yang sesuai, misal: `src/components/ui/NotificationBanner.tsx`.

#### Langkah 2: Tulis Kode Dasar (Boilerplate)
Gunakan snippet `rfc` (React Functional Component) atau copas kode ini:

```tsx
"use client"; // Tambahkan jika menggunakan hooks atau animasi

import React from "react";
import { motion } from "framer-motion"; // Opsional: jika pakai animasi

interface NotificationBannerProps {
    message: string;
    type?: "info" | "warning";
}

export default function NotificationBanner({ message, type = "info" }: NotificationBannerProps) {
    // Tentukan warna berdasarkan type
    const bgColor = type === "warning" ? "bg-yellow-500" : "bg-blue-500";

    return (
        <div className={`p-4 rounded-lg text-white ${bgColor} shadow-lg mb-4`}>
            <p className="font-bold">Notifikasi:</p>
            <p>{message}</p>
        </div>
    );
}
```

#### Langkah 3: Gunakan Komponen di Halaman
Buka file tempat Anda ingin menampilkan komponen ini, misalnya `src/app/page.tsx`.

1.  **Import komponen** di bagian atas file:
    ```tsx
    import NotificationBanner from "@/components/ui/NotificationBanner";
    ```
2.  **Panggil komponen** di dalam return JSX:
    ```tsx
    export default function Home() {
        return (
            <main ...>
                <NotificationBanner message="Selamat Datang di Robotika UNS!" />
                <Hero />
                ...
            </main>
        )
    }
    ```

---

### ✏️ Cara Mengedit Komponen

#### 1. Mengubah Tampilan (Styling)
Project ini menggunakan **Tailwind CSS**. Edit `className` untuk mengubah gaya.
*   **Warna**: `bg-red-500`, `text-slate-100`
*   **Ukuran**: `w-full`, `h-64`, `p-4` (padding), `m-4` (margin)
*   **Flexbox**: `flex`, `justify-center`, `items-center`

Contoh mengubah warna teks menjadi kuning:
```tsx
// Sebelum
<p className="text-white">Halo</p>

// Sesudah
<p className="text-yellow-400 font-bold">Halo</p>
```

#### 2. Mengubah Data / Konten
Jika konten bersifat statis (langsung di kode), cari teksnya di file `.tsx` dan ubah.
Jika konten bersifat dinamis (diambil dari data), cek file `src/lib/data.ts`.
*   Buka `src/lib/data.ts`.
*   Cari variabel array yang sesuai (misal `TEAMS` atau `NON_TECH_DIVISIONS`).
*   Edit text atau link gambar di situ.

---

## 🎨 Panduan Kustomisasi Aset

### 1. Mengganti Gambar Background
*   Simpan gambar di `public/images/`.
*   Edit `src/components/sections/Hero.tsx` untuk mengubah path gambar background.

### 2. Mengganti Logo & Gambar Tim
*   Simpan file baru di `public/images/`.
*   Buka `src/lib/data.ts` dan update properti `image` atau `logo`.

### 3. Font
*   Ganti file di `public/fonts/` atau edit konfigurasi font di `src/app/layout.tsx`.

---

## 🎠 Panduan Khusus: Edit Apple Cards Carousel

Bagian ini khusus untuk mengedit konten pada Carousel Divisi dan Tim.

### 1. Lokasi Data
Semua data teks dan gambar untuk carousel diambil dari file:
`src/lib/data.ts`

### 2. Cara Edit
1.  Buka `src/lib/data.ts`.
2.  Temukan variabel:
    *   `NON_TECH_DIVISIONS`: Carousel Divisi Non-Teknis.
    *   `TECH_DIVISIONS`: Carousel Divisi Teknis.
    *   `TEAMS`: Carousel Tim Robot.
3.  Untuk mengubah **Gambar**:
    *   Pastikan file gambar ada di folder `public/images/`.
    *   Ubah property `image` pada item data.
    *   Contoh: `image: "/images/foto-baru.jpg"`
    *   *Note: Gunakan nama file yang unik untuk menghindari caching yang agresif.*
4.  Untuk mengubah **Teks**:
    *   Ubah property `title` (Judul), `shortDesc` (Deskripsi Singkat), `details` (Deskripsi Lengkap), atau `specs` (Spesifikasi).

### 3. Mengatasi Gambar Kosong (Error 404)
Jika gambar di carousel tidak muncul atau blank putih, itu karena file gambar tidak ditemukan di folder `public`.
Cek terminal saat menjalankan `npm run dev` untuk melihat file mana yang hilang.

**Daftar gambar yang saat ini dicari oleh sistem (harus ada di `public/images/`):**
*   `/images/placeholder_hr.jpg`
*   `/images/placeholder_humas.jpg`
*   `/images/placeholder_sekretaris.jpg`
*   `/images/placeholder_bendahara.jpg`
*   `/images/werkudara_bot.jpg`

Solusi: Tambahkan file gambar dengan nama-nama tersebut, atau edit `src/lib/data.ts` untuk menggunakan nama file gambar yang Anda miliki.

---

## 🛠️ Status & Error Checking
Jika ada error saat development:
1.  Cek terminal `npm run dev` untuk pesan error.
2.  Jika error styling tidak muncul, pastikan class Tailwind benar.
3.  Jalankan `npm run build` untuk pengecekan menyeluruh sebelum deploy.
