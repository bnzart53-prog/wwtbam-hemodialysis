const prizeLadder = [
  'Rp 100.000', 'Rp 200.000', 'Rp 300.000', 'Rp 500.000', 'Rp 1.000.000',
  'Rp 2.000.000', 'Rp 4.000.000', 'Rp 8.000.000', 'Rp 16.000.000',
  'Rp 32.000.000', 'Rp 64.000.000', 'Rp 125.000.000', 'Rp 250.000.000',
  'Rp 500.000.000', 'Rp 1.000.000.000'
];

const questions = [
  { level: 1, difficulty: 'FOUNDATION', category: 'Dasar Hemodialisis', prompt: 'Apa tujuan utama hemodialisis?', options: ['Menggantikan sebagian fungsi ginjal dalam menyaring darah', 'Meningkatkan produksi hormon pertumbuhan', 'Mengobati semua jenis infeksi', 'Menggantikan fungsi paru-paru'], answer: 0, explanation: 'Hemodialisis membantu membuang zat sisa metabolisme dan kelebihan cairan ketika fungsi ginjal tidak memadai.', expert: 'Pilih opsi yang berkaitan langsung dengan penyaringan darah. Hemodialisis bekerja sebagai terapi pengganti ginjal.', audience: [76, 9, 8, 7] },
  { level: 2, difficulty: 'FOUNDATION', category: 'Akses Vaskular', prompt: 'Akses vaskular yang menghubungkan arteri dan vena secara bedah disebut...', options: ['AV fistula', 'Kateter urin', 'Port intratekal', 'Kanula nasal'], answer: 0, explanation: 'AV fistula adalah hubungan langsung antara arteri dan vena, umumnya dibuat untuk akses hemodialisis jangka panjang.', expert: 'Istilahnya mengandung dua pembuluh yang dihubungkan: arteri dan vena.', audience: [81, 6, 8, 5] },
  { level: 3, difficulty: 'FOUNDATION', category: 'Fisiologi', prompt: 'Perpindahan zat terlarut melewati membran semipermeabel karena perbedaan konsentrasi disebut...', options: ['Difusi', 'Koagulasi', 'Filtrasi glomerulus', 'Oksigenasi'], answer: 0, explanation: 'Difusi adalah perpindahan zat terlarut dari konsentrasi tinggi ke rendah melewati membran semipermeabel.', expert: 'Bayangkan zat bergerak mengikuti gradien konsentrasi.', audience: [72, 12, 8, 8] },
  { level: 4, difficulty: 'FOUNDATION', category: 'Ultrafiltrasi', prompt: 'Dalam hemodialisis, ultrafiltrasi terutama digunakan untuk...', options: ['Mengeluarkan kelebihan cairan', 'Menaikkan kadar hemoglobin secara langsung', 'Membentuk fistula baru', 'Mensterilkan ruang rawat'], answer: 0, explanation: 'Ultrafiltrasi mengeluarkan air melalui perbedaan tekanan transmembran untuk membantu mengontrol kelebihan cairan.', expert: 'Kuncinya ada pada kata “kelebihan cairan”, bukan zat terlarut.', audience: [79, 7, 7, 7] },
  { level: 5, difficulty: 'CLINICAL', category: 'Keselamatan Pasien', prompt: 'Pemeriksaan yang paling penting dilakukan sebelum kanulasi AV fistula adalah...', options: ['Menilai thrill dan bruit', 'Mengukur tinggi badan saja', 'Memberi minum sebanyak-banyaknya', 'Mengompres mata'], answer: 0, explanation: 'Thrill dan bruit membantu menilai adanya aliran pada akses vaskular. Penilaian tetap mengikuti protokol dan kewenangan klinis setempat.', expert: 'Cari dua tanda yang merefleksikan aliran darah pada akses.', audience: [87, 4, 5, 4] },
  { level: 6, difficulty: 'CLINICAL', category: 'Antikoagulasi', prompt: 'Mengapa antikoagulan sering digunakan selama hemodialisis?', options: ['Mencegah pembekuan darah di sirkuit ekstrakorporeal', 'Menaikkan suhu dialisat', 'Menggantikan elektrolit sepenuhnya', 'Membuat pasien tertidur'], answer: 0, explanation: 'Darah yang bersirkulasi di luar tubuh berisiko membeku; antikoagulasi membantu menjaga sirkuit tetap paten sesuai protokol.', expert: 'Pikirkan risiko darah berada di dalam tubing dan dialyzer.', audience: [84, 5, 6, 5] },
  { level: 7, difficulty: 'CLINICAL', category: 'Dialiser', prompt: 'Komponen dialiser yang menjadi tempat pertukaran zat antara darah dan dialisat adalah...', options: ['Membran semipermeabel', 'Manset tekanan darah', 'Sensor oksigen ruangan', 'Selang oksigen'], answer: 0, explanation: 'Membran semipermeabel memisahkan kompartemen darah dan dialisat sehingga pertukaran zat dapat berlangsung.', expert: 'Komponen ini menjadi “batas” dua kompartemen.', audience: [74, 10, 8, 8] },
  { level: 8, difficulty: 'ADVANCED', category: 'Hemodinamik', prompt: 'Penurunan tekanan darah selama sesi hemodialisis dapat berkaitan dengan...', options: ['Pengeluaran cairan yang terlalu cepat dibanding pengisian ulang vaskular', 'Peningkatan penglihatan malam', 'Bertambahnya massa tulang dalam hitungan menit', 'Peningkatan volume sirkulasi secara otomatis'], answer: 0, explanation: 'Jika laju pengeluaran cairan melampaui kemampuan pengisian ulang intravaskular, hipotensi dapat terjadi. Respons klinis mengikuti protokol unit.', expert: 'Bandingkan laju cairan yang dikeluarkan dengan kemampuan tubuh mengisi kembali ruang vaskular.', audience: [78, 8, 7, 7] },
  { level: 9, difficulty: 'ADVANCED', category: 'Elektrolit', prompt: 'Elektrolit yang sangat penting dipantau karena perubahan cepat dapat memengaruhi irama jantung adalah...', options: ['Kalium', 'Fluorida gigi', 'Iodium kulit', 'Klorofil'], answer: 0, explanation: 'Kalium berperan pada eksitabilitas neuromuskular dan jantung. Interpretasi hasil serta tindakan wajib mengikuti penilaian klinis.', expert: 'Fokus pada elektrolit yang paling dikenal terkait potensial membran dan ritme jantung.', audience: [88, 4, 4, 4] },
  { level: 10, difficulty: 'ADVANCED', category: 'Adekuasi', prompt: 'Kt/V dan URR digunakan untuk membantu menilai...', options: ['Adekuasi pembersihan dialisis', 'Kekuatan genggaman tangan', 'Kualitas tidur malam', 'Kejernihan lensa dialiser'], answer: 0, explanation: 'Kt/V dan URR adalah ukuran yang umum digunakan untuk mengevaluasi kecukupan pembersihan urea selama terapi.', expert: 'Keduanya adalah metrik evaluasi performa dialisis, bukan pemeriksaan fisik.', audience: [83, 6, 6, 5] },
  { level: 11, difficulty: 'ADVANCED', category: 'Infeksi', prompt: 'Prinsip paling penting untuk menurunkan risiko infeksi terkait akses vaskular adalah...', options: ['Teknik aseptik dan kebersihan tangan yang konsisten', 'Menggosok akses dengan bahan apa saja', 'Membiarkan balutan terbuka sepanjang hari', 'Mengabaikan perubahan kulit'], answer: 0, explanation: 'Kebersihan tangan, teknik aseptik, dan observasi tanda infeksi merupakan prinsip keselamatan penting sesuai kebijakan fasilitas.', expert: 'Pilih tindakan yang menjadi fondasi pencegahan infeksi di setiap prosedur.', audience: [92, 3, 3, 2] },
  { level: 12, difficulty: 'EXPERT', category: 'Termoregulasi', prompt: 'Perubahan suhu dialisat perlu diperhatikan karena dapat berpengaruh pada...', options: ['Respons hemodinamik dan kenyamanan pasien', 'Warna rambut dalam satu sesi', 'Panjang AV fistula', 'Jumlah elektrode ECG'], answer: 0, explanation: 'Suhu dialisat dapat memengaruhi kenyamanan dan respons hemodinamik; pengaturan mengikuti resep dan kebijakan klinis.', expert: 'Hubungkan suhu dengan respons sirkulasi, bukan anatomi akses.', audience: [80, 8, 7, 5] },
  { level: 13, difficulty: 'EXPERT', category: 'Air dan Dialisat', prompt: 'Mengapa kualitas air sangat penting dalam layanan hemodialisis?', options: ['Air menjadi komponen besar dialisat dan kontaminan dapat berdampak serius', 'Air hanya digunakan untuk membersihkan lantai', 'Air tidak pernah bersentuhan dengan sistem dialisis', 'Air hanya memengaruhi suara mesin'], answer: 0, explanation: 'Air olahan adalah komponen utama dialisat. Kontaminasi kimia atau mikrobiologis dapat berisiko bagi pasien sehingga pengawasan kualitas sangat penting.', expert: 'Pertimbangkan volume air yang masuk ke dalam pembuatan dialisat.', audience: [90, 3, 4, 3] },
  { level: 14, difficulty: 'EXPERT', category: 'Komplikasi', prompt: 'Kram otot selama hemodialisis paling sering berkaitan dengan...', options: ['Perubahan volume cairan dan perfusi otot', 'Pertumbuhan kuku mendadak', 'Peningkatan pendengaran', 'Perubahan warna iris'], answer: 0, explanation: 'Kram dapat berkaitan dengan perubahan volume, perfusi, atau faktor lain; evaluasi dan penanganan mengikuti protokol klinis.', expert: 'Pilih opsi yang berkaitan dengan keseimbangan cairan dan aliran darah.', audience: [75, 10, 8, 7] },
  { level: 15, difficulty: 'MILLION', category: 'Clinical Reasoning', prompt: 'Pernyataan manakah yang paling tepat tentang edukasi pasien hemodialisis?', options: ['Edukasi harus individual, menggunakan bahasa yang dipahami, dan diverifikasi dengan teach-back', 'Semua pasien menerima instruksi yang sama tanpa melihat konteks', 'Edukasi cukup diberikan satu kali di awal terapi', 'Edukasi hanya membahas mesin, bukan perawatan mandiri'], answer: 0, explanation: 'Edukasi efektif perlu disesuaikan, menggunakan bahasa yang dipahami, dan diverifikasi dengan teach-back agar pemahaman dapat dinilai.', expert: 'Jawaban terbaik menggabungkan individualisasi, komunikasi jelas, dan verifikasi pemahaman.', audience: [94, 2, 2, 2] }
];

const state = {
  screen: 'intro', current: 0, phase: 'idle', selected: null, eliminated: new Set(),
  hints: { expert: '', audience: null }, lifelines: { fifty: true, expert: true, audience: true },
  timeLeft: 30, timerId: null, transitionId: null, startedAt: null,
  audio: { muted: false, volume: 0.42 }
};

const app = document.querySelector('#app');
const announcer = document.querySelector('#sr-announcer');

class AudioEngine {
  constructor() { this.ctx = null; this.master = null; this.musicTimer = null; this.musicNodes = []; }
  ensure() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.master = this.ctx.createGain(); this.master.gain.value = state.audio.muted ? 0 : state.audio.volume; this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  setVolume(value) { state.audio.volume = Number(value); if (this.master && !state.audio.muted) this.master.gain.value = state.audio.volume; }
  setMuted(muted) { state.audio.muted = muted; if (this.master) this.master.gain.value = muted ? 0 : state.audio.volume; }
  tone(freq, duration = 0.12, type = 'sine', when = 0, gain = 0.11) {
    if (state.audio.muted) return;
    this.ensure();
    const now = this.ctx.currentTime + when;
    const oscillator = this.ctx.createOscillator(); const envelope = this.ctx.createGain();
    oscillator.type = type; oscillator.frequency.setValueAtTime(freq, now);
    envelope.gain.setValueAtTime(0.0001, now); envelope.gain.exponentialRampToValueAtTime(gain, now + 0.015); envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(envelope); envelope.connect(this.master); oscillator.start(now); oscillator.stop(now + duration + 0.02);
  }
  sequence(notes, type = 'sine', gain = 0.12) { notes.forEach((note, index) => this.tone(note, 0.16, type, index * 0.11, gain)); }
  startMusic() {
    this.ensure(); if (this.musicTimer) return;
    const playPad = () => {
      if (state.audio.muted) return;
      this.tone(130.81, 1.9, 'triangle', 0, 0.025); this.tone(196, 1.9, 'sine', 0.06, 0.018); this.tone(261.63, 1.9, 'sine', 0.12, 0.014);
    };
    playPad(); this.musicTimer = window.setInterval(playPad, 2100);
  }
  stopMusic() { if (this.musicTimer) window.clearInterval(this.musicTimer); this.musicTimer = null; }
  click() { this.tone(440, 0.07, 'sine', 0, 0.07); }
  tick() { this.tone(780, 0.07, 'square', 0, 0.06); }
  lock() { this.sequence([330, 440, 554.37], 'sawtooth', 0.08); }
  correct() { this.sequence([392, 523.25, 659.25, 783.99], 'sine', 0.14); }
  wrong() { this.sequence([260, 220, 164.81], 'sawtooth', 0.14); }
  lifeline() { this.sequence([523.25, 659.25, 783.99], 'triangle', 0.11); }
  win() { this.sequence([392, 493.88, 587.33, 783.99, 987.77], 'sine', 0.16); }
  gameover() { this.sequence([392, 329.63, 261.63, 196], 'triangle', 0.15); }
}
const audio = new AudioEngine();

function currency(value) { return value; }
function currentQuestion() { return questions[state.current]; }
function safeText(text) { return text.replaceAll('<', '&lt;').replaceAll('>', '&gt;'); }
function announce(text) { announcer.textContent = text; }
function clearTimers() { if (state.timerId) window.clearInterval(state.timerId); if (state.transitionId) window.clearTimeout(state.transitionId); state.timerId = null; state.transitionId = null; }
function resetGame() {
  clearTimers(); state.screen = 'game'; state.current = 0; state.phase = 'active'; state.selected = null; state.eliminated = new Set(); state.hints = { expert: '', audience: null }; state.lifelines = { fifty: true, expert: true, audience: true }; state.timeLeft = 30; state.startedAt = Date.now(); audio.startMusic(); startTimer(); render();
}
function startTimer() {
  if (state.timerId) window.clearInterval(state.timerId);
  state.timerId = window.setInterval(() => {
    if (state.phase !== 'active') return;
    state.timeLeft -= 1;
    if (state.timeLeft <= 5 && state.timeLeft > 0) audio.tick();
    if (state.timeLeft <= 0) { state.timeLeft = 0; resolveAnswer(null, 'timeup'); }
    render();
  }, 1000);
}
function selectAnswer(index) { if (state.phase !== 'active' || state.eliminated.has(index)) return; state.selected = index; audio.click(); render(); announce(`Opsi ${String.fromCharCode(65 + index)} dipilih. Tekan Enter atau tombol Kunci Jawaban untuk mengunci.`); }
function lockAnswer() { if (state.phase !== 'active' || state.selected === null) return; audio.lock(); resolveAnswer(state.selected, 'locked'); }
function resolveAnswer(index, reason = 'locked') {
  if (state.phase !== 'active') return;
  clearTimers(); state.phase = reason === 'timeup' ? 'timeup' : (index === currentQuestion().answer ? 'correct' : 'wrong');
  if (state.phase === 'correct') audio.correct(); else audio.wrong();
  render(); announce(state.phase === 'correct' ? 'Jawaban benar.' : 'Jawaban belum tepat.');
}
function nextStep() {
  if (state.phase === 'correct' && state.current === questions.length - 1) { state.screen = 'win'; state.phase = 'win'; audio.stopMusic(); audio.win(); render(); makeConfetti(); return; }
  if (state.phase !== 'correct') { state.screen = 'loss'; state.phase = 'loss'; audio.stopMusic(); audio.gameover(); render(); return; }
  state.current += 1; state.phase = 'active'; state.selected = null; state.eliminated = new Set(); state.hints = { expert: '', audience: null }; state.timeLeft = 30; startTimer(); audio.click(); render(); announce(`Level ${state.current + 1}. Pertanyaan baru dimulai.`);
}
function useLifeline(type) {
  if (state.phase !== 'active' || !state.lifelines[type]) return;
  const question = currentQuestion(); state.lifelines[type] = false; audio.lifeline();
  if (type === 'fifty') {
    const wrong = question.options.map((_, i) => i).filter(i => i !== question.answer).sort(() => Math.random() - 0.5).slice(0, 2); state.eliminated = new Set(wrong); if (state.selected !== null && state.eliminated.has(state.selected)) state.selected = null;
  }
  if (type === 'expert') state.hints.expert = question.expert;
  if (type === 'audience') state.hints.audience = question.audience;
  render(); announce(`Lifeline ${type === 'fifty' ? '50:50' : type === 'expert' ? 'Tanya Ahli' : 'Tanya Penonton'} digunakan.`);
}
function renderIntro() {
  return `<main class="intro-screen">
    <div class="ambient-grid"></div><div class="intro-orb"><span class="orb-ring ring-a"></span><span class="orb-ring ring-b"></span><span class="orb-core">HD</span></div>
    <div class="intro-copy"><div class="eyebrow"><span class="eyebrow-dot"></span> MEDICAL QUIZ STUDIO // 01</div><h1>WHO WANTS TO BE<br><em>A HEMODIALYSIS<br>CHAMPION?</em></h1><p>Uji pengetahuanmu. Naikkan level. Kunci jawabanmu dengan yakin.</p>
      <div class="intro-actions"><button class="primary-button glow-button" data-action="start"><span>Mulai Permainan</span><span class="button-arrow">→</span></button><div class="key-hint"><kbd>ENTER</kbd> untuk mulai <span>•</span> <kbd>M</kbd> suara</div></div>
    </div>
    <aside class="intro-card"><div class="card-label">FORMAT PERMAINAN</div><div class="stat-row"><strong>15</strong><span>level pertanyaan<br><small>hingga Rp 1 Miliar</small></span></div><div class="card-divider"></div><div class="lifeline-preview"><span>50:50</span><span>Tanya Ahli</span><span>Tanya Penonton</span></div><p class="disclaimer"><span>ⓘ</span> Materi bersifat edukatif dan bukan pengganti nasihat medis profesional.</p></aside>
    <footer class="intro-footer"><span>HEMODIALYSIS / KNOWLEDGE UNDER PRESSURE</span><span>Keyboard ready · Audio reactive</span></footer>
  </main>`;
}
function renderTopbar() {
  return `<header class="topbar"><div class="brand-mark"><span class="brand-orb">HD</span><span><strong>WWTBAM</strong><small>HEMODIALYSIS EDITION</small></span></div><div class="top-meta"><span class="live-pill"><i></i> LIVE QUIZ</span><span class="question-count">QUESTION ${String(state.current + 1).padStart(2, '0')} / 15</span><button class="icon-button" data-action="mute" aria-label="${state.audio.muted ? 'Aktifkan suara' : 'Matikan suara'}">${state.audio.muted ? '◼' : '◉'}</button><input class="volume-range" data-action="volume" type="range" min="0" max="1" step="0.01" value="${state.audio.volume}" aria-label="Volume" /></div></header>`;
}
function renderPrizeLadder() {
  return `<aside class="ladder-panel"><div class="panel-kicker">TANGGA HADIAH <span>15 LEVEL</span></div><div class="ladder-list">${prizeLadder.map((value, i) => { const isCurrent = i === state.current && state.screen === 'game'; const isPast = i < state.current; const isMilestone = [4, 9, 14].includes(i); return `<div class="ladder-step ${isCurrent ? 'current' : ''} ${isPast ? 'past' : ''} ${isMilestone ? 'milestone' : ''}"><span class="ladder-index">${String(i + 1).padStart(2, '0')}</span><span class="ladder-value">${currency(value)}</span>${isCurrent ? '<span class="current-marker">◂</span>' : ''}</div>`; }).reverse().join('')}</div><div class="secure-note"><span class="secure-icon">✦</span><span><b>SAFE ZONE</b><small>Level 5 · Rp 1.000.000</small></span></div></aside>`;
}
function renderLifelines() {
  const button = (key, icon, label, sub) => `<button class="lifeline-button ${state.lifelines[key] ? '' : 'used'}" data-lifeline="${key}" ${state.lifelines[key] ? '' : 'disabled'}><span class="life-icon">${icon}</span><span><b>${label}</b><small>${state.lifelines[key] ? sub : 'SUDAH DIGUNAKAN'}</small></span></button>`;
  return `<div class="lifelines"><div class="section-label">LIFELINES <span>• SEKALI PERMAINAN</span></div><div class="lifeline-row">${button('fifty', '½', '50:50', 'Hapus 2 opsi')}${button('expert', '✦', 'Tanya Ahli', 'Dapatkan clue')}${button('audience', '◒', 'Penonton', 'Lihat polling')}</div></div>`;
}
function renderHints() {
  const q = currentQuestion();
  if (state.hints.expert) return `<div class="hint-card expert-hint"><span class="hint-icon">✦</span><div><b>AHLI MENJAWAB</b><p>${safeText(state.hints.expert)}</p></div></div>`;
  if (state.hints.audience) return `<div class="hint-card audience-hint"><div class="hint-title"><span class="hint-icon">◒</span><b>HASIL POLLING PENONTON</b></div><div class="poll-bars">${state.hints.audience.map((n, i) => `<div class="poll-item"><span>${String.fromCharCode(65 + i)}</span><div class="poll-track"><i style="width:${n}%"></i></div><strong>${n}%</strong></div>`).join('')}</div></div>`;
  return `<div class="hint-card quiet-hint"><span class="hint-icon">⌁</span><span>Gunakan lifeline saat kamu butuh sinyal tambahan.</span></div>`;
}
function renderQuestion() {
  const q = currentQuestion(); const phase = state.phase; const result = ['correct', 'wrong', 'timeup'].includes(phase);
  const selectedLetter = state.selected === null ? '' : String.fromCharCode(65 + state.selected);
  const message = phase === 'correct' ? 'JAWABAN BENAR' : phase === 'wrong' ? 'JAWABAN SALAH' : phase === 'timeup' ? 'WAKTU HABIS' : '';
  return `<section class="game-main"><div class="question-head"><div><span class="question-tag">LEVEL ${String(q.level).padStart(2, '0')} / ${q.difficulty}</span><h2>${safeText(q.category)}</h2></div><div class="timer ${state.timeLeft <= 8 ? 'critical' : ''}"><span class="timer-ring"><b>${String(state.timeLeft).padStart(2, '0')}</b><small>SEC</small></span><span>TIME<br><small>REMAINING</small></span></div></div>
    <div class="question-card ${result ? `result-${phase}` : ''}"><div class="question-number">Q${String(q.level).padStart(2, '0')}</div><p class="question-text">${safeText(q.prompt)}</p><div class="answers">${q.options.map((option, i) => { const isDisabled = state.eliminated.has(i); const isSelected = state.selected === i; const isCorrect = result && i === q.answer; const isWrong = result && isSelected && i !== q.answer; return `<button class="answer ${isSelected ? 'selected' : ''} ${isDisabled ? 'eliminated' : ''} ${isCorrect ? 'revealed-correct' : ''} ${isWrong ? 'revealed-wrong' : ''}" data-answer="${i}" ${isDisabled || result ? 'disabled' : ''}><span class="answer-letter">${String.fromCharCode(65 + i)}</span><span>${safeText(option)}</span><span class="answer-state">${isCorrect ? '✓' : isWrong ? '×' : ''}</span></button>`; }).join('')}</div>
      ${result ? `<div class="result-strip ${phase}"><span class="result-mark">${phase === 'correct' ? '✓' : phase === 'timeup' ? '⌛' : '×'}</span><div><b>${message}</b><p>${safeText(q.explanation)}</p></div></div>` : `<div class="lock-row"><span class="selection-readout">${state.selected === null ? 'PILIH SATU JAWABAN' : `TERPILIH: <b>${selectedLetter}</b> — ${safeText(q.options[state.selected])}`}</span><button class="lock-button" data-action="lock" ${state.selected === null ? 'disabled' : ''}>KUNCI JAWABAN <span>↳</span></button></div>`}
    </div>${renderHints()}${renderLifelines()}<div class="game-footnote"><span>Tekan <kbd>1</kbd>–<kbd>4</kbd> untuk memilih · <kbd>ENTER</kbd> untuk mengunci</span><span>Konten edukatif · bukan nasihat medis personal</span></div></section>`;
}
function renderResult(type) {
  const won = type === 'win'; const reached = won ? prizeLadder[14] : prizeLadder[Math.max(0, state.current - 1)];
  return `<main class="result-screen ${won ? 'win-screen' : 'loss-screen'}"><div class="result-glow"></div>${won ? '<div class="confetti-seed"></div>' : '<div class="loss-scan"></div>'}<div class="result-content"><div class="result-eyebrow">${won ? 'TRANSMISSION COMPLETE' : 'SESSION TERMINATED'}</div><div class="result-icon">${won ? '✦' : '×'}</div><h1>${won ? 'YOU ARE A<br><em>HEMODIALYSIS<br>CHAMPION.</em>' : 'GAME<br><em>OVER.</em>'}</h1><p>${won ? 'Pengetahuanmu menembus seluruh 15 level.' : state.phase === 'loss' && state.current === 0 ? 'Tetap tenang. Setiap jawaban adalah langkah belajar.' : 'Jawaban yang tepat adalah bagian dari proses belajar.'}</p><div class="result-score"><span>HADIAH TERAKHIR</span><strong>${reached}</strong></div><button class="primary-button glow-button" data-action="restart"><span>Main Lagi</span><span class="button-arrow">↻</span></button><div class="result-note">Materi bersifat edukatif dan bukan pengganti nasihat medis profesional.</div></div></main>`;
}
function render() {
  if (state.screen === 'intro') app.innerHTML = renderIntro();
  else if (state.screen === 'game') app.innerHTML = `<main class="game-shell">${renderTopbar()}<div class="game-layout">${renderQuestion()}${renderPrizeLadder()}</div></main>`;
  else app.innerHTML = renderResult(state.screen);
}
function makeConfetti() {
  const colors = ['#49e6ff', '#ffc857', '#ffffff', '#a67bff']; const layer = document.createElement('div'); layer.className = 'confetti-layer';
  for (let i = 0; i < 70; i += 1) { const piece = document.createElement('i'); piece.style.left = `${Math.random() * 100}%`; piece.style.animationDelay = `${Math.random() * 1.8}s`; piece.style.background = colors[i % colors.length]; piece.style.transform = `rotate(${Math.random() * 360}deg)`; layer.appendChild(piece); }
  document.body.appendChild(layer); window.setTimeout(() => layer.remove(), 4300);
}

document.addEventListener('click', (event) => {
  const answer = event.target.closest('[data-answer]'); if (answer) { selectAnswer(Number(answer.dataset.answer)); return; }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'start') { audio.ensure(); audio.click(); resetGame(); }
  if (action === 'restart') { audio.ensure(); audio.click(); resetGame(); }
  if (action === 'lock') lockAnswer();
  if (action === 'mute') { audio.setMuted(!state.audio.muted); audio.click(); render(); }
  if (action === 'next') nextStep();
  const lifeline = event.target.closest('[data-lifeline]')?.dataset.lifeline; if (lifeline) useLifeline(lifeline);
});
document.addEventListener('input', (event) => { if (event.target.matches('[data-action="volume"]')) { audio.ensure(); audio.setVolume(event.target.value); } });
document.addEventListener('keydown', (event) => {
  if (state.screen === 'intro' && event.key === 'Enter') { audio.ensure(); resetGame(); }
  if (state.screen !== 'game') return;
  if (/^[1-4]$/.test(event.key)) selectAnswer(Number(event.key) - 1);
  if (event.key === 'Enter') { if (state.phase === 'active') lockAnswer(); else if (['correct', 'wrong', 'timeup'].includes(state.phase)) nextStep(); }
  if (event.key.toLowerCase() === 'm') { audio.setMuted(!state.audio.muted); render(); }
  if (event.key.toLowerCase() === 'r' && state.phase !== 'active') nextStep();
});

const originalRender = render;
function renderWithNext() { originalRender(); if (state.screen === 'game' && ['correct', 'wrong', 'timeup'].includes(state.phase)) { const card = document.querySelector('.question-card'); if (card) { const button = document.createElement('button'); button.className = 'next-button'; button.dataset.action = 'next'; button.innerHTML = state.phase === 'correct' && state.current === questions.length - 1 ? 'LIHAT HASIL <span>→</span>' : state.phase === 'correct' ? 'LANJUT KE LEVEL BERIKUTNYA <span>→</span>' : 'LIHAT HASIL <span>→</span>'; card.appendChild(button); } } }
render = renderWithNext;
render();
