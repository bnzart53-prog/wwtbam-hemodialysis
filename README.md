# WWTBAM Hemodialysis

Game kuis edukasi bergaya *Who Wants to Be a Millionaire* dengan topik hemodialisis. Dibuat sebagai proyek web ringan, responsif, dan siap dimasukkan ke repository GitHub.

## Fitur

Game memiliki 15 level hingga hadiah Rp 1.000.000.000, tangga hadiah dengan safe zone, 15 pertanyaan berbahasa Indonesia, timer 30 detik, lifeline 50:50, Tanya Ahli, dan Tanya Penonton. Feedback jawaban dilengkapi animasi lock/reveal, transisi antarlevel, timer kritis, layar menang/kalah, dan confetti.

Audio dibangkitkan langsung di browser menggunakan Web Audio API, jadi tidak perlu mengunduh file suara tambahan. Tersedia ambient music loop, klik, countdown, lock answer, jawaban benar, jawaban salah, lifeline, kemenangan, dan game over. Volume serta mute dapat dikontrol dari top bar. Browser akan mengaktifkan audio setelah interaksi pertama pengguna.

Konten ditulis sebagai materi edukasi umum dan selalu disertai disclaimer; bukan pengganti nasihat medis profesional atau protokol fasilitas.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan Vite. Untuk production build:

```bash
npm run build
npm run preview
```

## GitHub Pages

Proyek ini dapat di-deploy sebagai static site. Jika menggunakan GitHub Actions, gunakan Node.js 20+, jalankan `npm ci`, `npm run build`, lalu upload folder `dist/` ke GitHub Pages. Bila repository memakai project path, tambahkan `base` di `vite.config.js` sesuai nama repository.

## Struktur

- `index.html` — entry HTML dan metadata.
- `src/main.js` — state machine, pertanyaan, lifeline, timer, keyboard, dan audio.
- `src/styles.css` — tema visual, responsive layout, animation, dan accessibility states.
- `public/manus-routes.json` — manifest route untuk preview.
- `plan.md` dan `TODO.md` — keputusan desain dan outcome produk.

## Keyboard

`Enter` mulai / kunci jawaban / lanjut, `1`–`4` memilih opsi, `M` mute/unmute, dan `R` lanjut setelah hasil jawaban.

## Catatan lisensi

Kode dan materi dapat disesuaikan untuk kebutuhan pembelajaran internal. Tinjau kembali akurasi klinis bersama educator atau clinical lead sebelum penggunaan dalam pelatihan formal.
