# WWTBAM Hemodialysis — Rencana Implementasi

## Arah Produk
Game web kuis edukasi berbahasa Indonesia bergaya *Who Wants to Be a Millionaire* untuk topik hemodialisis. Pengalaman harus menegangkan namun bersih, responsif, dapat dimainkan dengan mouse dan keyboard, serta tegas bahwa materi bukan nasihat medis personal.

## Desain
- **Design movement:** medical broadcast noir — panggung kuis premium dengan panel instrumen klinis, cahaya cyan, dan aksen amber.
- **Core principles:** fokus pada pertanyaan, progres terasa penting, feedback langsung, aksesibel.
- **Color philosophy:** navy/ink untuk fokus dan ketegangan; cyan untuk pengetahuan dan status aktif; putih untuk keterbacaan; amber untuk hadiah dan momen penting.
- **Layout paradigm:** arena dua kolom asimetris: panel pertanyaan utama di kiri/tengah dan tangga hadiah vertikal di sisi kanan; mobile berubah menjadi alur bertumpuk.
- **Signature elements:** orb hemodialisis bercahaya, garis waveform pada top bar, kartu hadiah bertingkat dengan state aktif/terkunci.
- **Interaction philosophy:** setiap aksi terasa seperti kontrol studio: hover glow, lock-in, reveal, pulse timer, dan feedback suara.
- **Animation:** entrance stagger untuk panel, pulse pada timer kritis, ripple pada answer lock, flip pada lifeline, confetti pada kemenangan, shake pada jawaban salah.
- **Typography system:** Inter untuk UI dan angka; Space Grotesk untuk judul/tanda studio; fallback system sans-serif.
- **Brand essence:** kuis hemodialisis yang mengubah review klinis menjadi momen panggung yang memorable. Personality: tajam, suportif, profesional.
- **Brand voice:** “Satu keputusan. Satu level lebih dekat.” dan “Kunci jawabanmu saat sudah yakin.”
- **Wordmark & logo:** monogram `HD//15` dengan orb sirkuit sebagai simbol akses vaskular dan progres.
- **Signature brand color:** cyan `#49e6ff`.

## Implementasi
- Vanilla HTML/CSS/JavaScript + Vite agar mudah dipahami, ringan, dan GitHub-ready.
- Bank 15 pertanyaan hemodialisis dengan opsi, jawaban benar, penjelasan, dan level kesulitan.
- State machine: intro → active → locked → correct/wrong/time-up → finish.
- Lifeline 50:50, Tanya Ahli, Tanya Penonton masing-masing sekali per permainan.
- Audio engine berbasis Web Audio API: musik ambient loop dan SFX procedural untuk klik, countdown, lock, benar, salah, lifeline, menang, dan game over; kontrol mute/volume.
- Tidak menggunakan backend, akun, atau data personal.

## Struktur Proyek
- `index.html`: shell aplikasi dan semantic landmarks.
- `src/main.js`: state game, data soal, event handlers, timer, audio, animasi feedback.
- `src/styles.css`: tema visual responsive, states, keyframes, focus treatment.
- `public/manus-routes.json`: manifest route utama.
- `README.md`: instruksi lokal, build, dan deploy GitHub Pages.
- `TODO.md`: kriteria outcome yang harus tetap terlihat.
