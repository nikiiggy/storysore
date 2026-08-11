// --- 1. PLAYLIST DATA (61 SONGS ONLINE VIA CATBOX) ---
const songs = [
    { id: 1, title: "Juicy Luicy - Lantas (STAYC Sumin Cover)", src: "https://files.catbox.moe/inrkkb.mp3", isFavorite: false },
    { id: 2, title: "Perunggu - 33X (Cover)", src: "https://files.catbox.moe/6id3jo.mp3", isFavorite: false },
    { id: 3, title: "The 1975 - About You (Cover)", src: "https://files.catbox.moe/kny9sm.mp3", isFavorite: false },
    { id: 4, title: "Sal Priadi - Ada Titik Titik Di Ujung Doa (Cover)", src: "https://files.catbox.moe/a2mpmr.mp3", isFavorite: false },
    { id: 5, title: "Ajeng Febria - Tresno Tekane Mati", src: "https://files.catbox.moe/r5yqgb.mp3", isFavorite: false },
    { id: 6, title: "Misselia - Akhir Tak Bahagia (Cover)", src: "https://files.catbox.moe/fgnm0m.mp3", isFavorite: false },
    { id: 7, title: "Rizky Febian & Adrian Khalif - Alamak", src: "https://files.catbox.moe/oqyyaf.mp3", isFavorite: false },
    { id: 8, title: "Arya Galih - Tunggal Eka", src: "https://files.catbox.moe/fvdyoh.mp3", isFavorite: false },
    { id: 9, title: "Dike Sabrina ft. Shepin Misa - Aishiteru 2", src: "https://files.catbox.moe/1uufbr.mp3", isFavorite: false },
    { id: 10, title: "Dinda Teratu - Njarem", src: "https://files.catbox.moe/641jga.mp3", isFavorite: false },
    { id: 11, title: "Dinda Teratu - Pisah", src: "https://files.catbox.moe/jm76yf.mp3", isFavorite: false },
    { id: 12, title: "D'Masiv - Diantara Kalian (Egha De Latoya Cover)", src: "https://files.catbox.moe/d9ayxy.mp3", isFavorite: false },
    { id: 13, title: "Egha De Latoya - Aku Patut Membenci Dia", src: "https://files.catbox.moe/sijdz0.mp3", isFavorite: false },
    { id: 14, title: "Egha De Latoya - Awal Yang Indah", src: "https://files.catbox.moe/kv3s4a.mp3", isFavorite: false },
    { id: 15, title: "Element - Rahasia Hati (Egha De Latoya Cover)", src: "https://files.catbox.moe/e5xoo1.mp3", isFavorite: false },
    { id: 16, title: ".Feast - Nina (Dodi Putera Cover)", src: "https://files.catbox.moe/8wzaq3.mp3", isFavorite: false },
    { id: 17, title: "Float - Pulang (Andri Guitara ft. Bintan Radhita Cover)", src: "https://files.catbox.moe/lpqrmo.mp3", isFavorite: false },
    { id: 18, title: "Kehlani - Folded (Cover)", src: "https://files.catbox.moe/x9xg7t.mp3", isFavorite: false },
    { id: 19, title: "for Revenge - Penyangkalan", src: "https://files.catbox.moe/ymb0fk.mp3", isFavorite: false },
    { id: 20, title: "for Revenge ft. Meiska - Sadrah (Acoustic)", src: "https://files.catbox.moe/90x7y5.mp3", isFavorite: false },
    { id: 21, title: "for Revenge - Sadrah", src: "https://files.catbox.moe/upyswm.mp3", isFavorite: false },
    { id: 22, title: "Gigi Perez – Sailor Song", src: "https://files.catbox.moe/uqrli7.mp3", isFavorite: false },
    { id: 23, title: "Gilga Sahid - Bukan Diriku", src: "https://files.catbox.moe/qqnqv9.mp3", isFavorite: false },
    { id: 24, title: "HAL - L (Jeje Cover)", src: "https://files.catbox.moe/o3r0sf.mp3", isFavorite: false },
    { id: 25, title: "Hasan Aftershine ft. GE Orkestra - Tekan Semene", src: "https://files.catbox.moe/51sny5.mp3", isFavorite: false },
    { id: 26, title: "Jagarta - Tersiksa Lagi (Utha Likumahuwa Cover)", src: "https://files.catbox.moe/ukfzty.mp3", isFavorite: false },
    { id: 27, title: "for Revenge - Jakarta Hari Ini (Gusti Abddie Cover)", src: "https://files.catbox.moe/46ed8w.mp3", isFavorite: false },
    { id: 28, title: "for Revenge - Jakarta Hari Ini (Slowed + Reverb)", src: "https://files.catbox.moe/cu52bd.mp3", isFavorite: false },
    { id: 29, title: "Ifan Seventeen - Jangan Paksa Rindu (Morai ft. Hendra Cover)", src: "https://files.catbox.moe/2pagtj.mp3", isFavorite: false },
    { id: 30, title: "Mira Putri ft. Ageng Music - Jangan Pernah Berubah", src: "https://files.catbox.moe/imgerx.mp3", isFavorite: false },
    { id: 31, title: "ST12 - Jangan Pernah Berubah (Egha De Latoya Cover)", src: "https://files.catbox.moe/lz0xi0.mp3", isFavorite: false },
    { id: 32, title: "Ajeng Febria ft. KKZ - Jauh Ko Pergi", src: "https://files.catbox.moe/7mwipw.mp3", isFavorite: false },
    { id: 33, title: "Jun Munthe - Rohaku", src: "https://files.catbox.moe/kdk3br.mp3", isFavorite: false },
    { id: 34, title: "Egha De Latoya - Kala Sang Surya Tenggelam", src: "https://files.catbox.moe/wjtz8e.mp3", isFavorite: false },
    { id: 35, title: "Shinta Arsinta - Kangen Mantan", src: "https://files.catbox.moe/osjynx.mp3", isFavorite: false },
    { id: 36, title: "Kaulah Segalanya", src: "https://files.catbox.moe/z78igb.mp3", isFavorite: false },
    { id: 37, title: "Kendis ft. Adis - Ours To Keep", src: "https://files.catbox.moe/4owrcr.mp3", isFavorite: false },
    { id: 38, title: "Nadhif Basalamah - Kota Ini Tak Sama Tanpamu (Angga Ramadhan Cover)", src: "https://files.catbox.moe/lwfq73.mp3", isFavorite: false },
    { id: 39, title: "L. Kidul", src: "https://files.catbox.moe/oh37cz.mp3", isFavorite: false },
    { id: 40, title: "Last Child x for Revenge - Duka x Serana", src: "https://files.catbox.moe/pokxv6.mp3", isFavorite: false },
    { id: 41, title: "Nadhif Basalamah - Bergema Sampai Selamanya (Slowed + Reverb)", src: "https://files.catbox.moe/dxdc6m.mp3", isFavorite: false },
    { id: 42, title: "Sasya Arkhisna ft. Dida - Ojo Dibandingke", src: "https://files.catbox.moe/dd1bx2.mp3", isFavorite: false },
    { id: 43, title: "Perfect Strangers", src: "https://files.catbox.moe/gwxlcx.mp3", isFavorite: false },
    { id: 44, title: "Piche Kota - Bahagia Lagi", src: "https://files.catbox.moe/5utl6v.mp3", isFavorite: false },
    { id: 45, title: "Ziva Magnolya - Pilihan Yang Terbaik (Cover)", src: "https://files.catbox.moe/8zbozu.mp3", isFavorite: false },
    { id: 46, title: "Pinkan Mambo - Kasmaran", src: "https://files.catbox.moe/en3gnu.mp3", isFavorite: false },
    { id: 47, title: "Elfa's Singers - Prahara Cinta (Aku Malu)", src: "https://files.catbox.moe/bt41u4.mp3", isFavorite: false },
    { id: 48, title: "Wizz Baker ft. Tami Aulia - Rindu Rumah", src: "https://files.catbox.moe/4qstad.mp3", isFavorite: false },
    { id: 49, title: "Afgan - Sadis (Galang Adi Prasetyo Cover)", src: "https://files.catbox.moe/gs1ldn.mp3", isFavorite: false },
    { id: 50, title: "for Revenge - Sadrah (Acoustic)", src: "https://files.catbox.moe/wd4ujc.mp3", isFavorite: false },
    { id: 51, title: "Samuel Cipta - Senja Sudut Kota (Live Cover by Groove Session ft. Azmi)", src: "https://files.catbox.moe/06w678.mp3", isFavorite: false },
    { id: 52, title: "Shinta Arsinta - Sekti", src: "https://files.catbox.moe/lv90p3.mp3", isFavorite: false },
    { id: 53, title: "Nadin Amizah - Semua Aku Dirayakan (Cover)", src: "https://files.catbox.moe/s1r94m.mp3", isFavorite: false },
    { id: 54, title: "Silvy Kumalasari ft. Sadewok - Sabar", src: "https://files.catbox.moe/5sdjdm.mp3", isFavorite: false },
    { id: 55, title: "Berharap Tak Berpisah (Strange Arrangement)", src: "https://files.catbox.moe/r0l76q.mp3", isFavorite: false },
    { id: 56, title: "Tami Aulia ft. Siho - Tekan Semene", src: "https://files.catbox.moe/pz0scw.mp3", isFavorite: false },
    { id: 57, title: "Utha Likumahuwa - Tersiksa Lagi (Bintan Radhita & Andri Guitara Cover)", src: "https://files.catbox.moe/k39kpm.mp3", isFavorite: false },
    { id: 58, title: "The 1975 - About You", src: "https://files.catbox.moe/i4sqhh.mp3", isFavorite: false },
    { id: 59, title: "Timur", src: "https://files.catbox.moe/qsvaqw.mp3", isFavorite: false },
    { id: 60, title: "Wizz Baker - Rindu Rumah", src: "https://files.catbox.moe/ln4z4n.mp3", isFavorite: false },
    { id: 61, title: "EMIN ft. JONY - Kamin (MayBae Cover)", src: "https://files.catbox.moe/7hm3h1.mp3", isFavorite: false }
];

let playQueue = [];
let currentQueueIndex = -1;
let currentTab = 'all'; // 'all' | 'favorites' | 'queue'

// DOM Elements
const audioPlayer = document.getElementById('audioPlayer');
const songListEl = document.getElementById('songList');
const currentTitleEl = document.getElementById('currentTitle');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const fxToggleBtn = document.getElementById('fxToggleBtn');
const visualizerCanvas = document.getElementById('visualizer');
const visCtx = visualizerCanvas ? visualizerCanvas.getContext('2d') : null;
const queueBadge = document.getElementById('queueBadge');

// --- WEB AUDIO API (DSP FX ENGINE) ---
let audioCtx;
let sourceNode;
let lowFilter, midFilter, highFilter;
let wetGain, dryGain, masterGain;
let analyser, analyserData;
let isAudioFxInitialized = false;
let fxEnabled = true;
let fxSilenceChecked = false;
let visRafId = null;

function initAudioEffects() {
    if (isAudioFxInitialized || !audioPlayer) return;

    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        sourceNode = audioCtx.createMediaElementSource(audioPlayer);

        lowFilter = audioCtx.createBiquadFilter();
        lowFilter.type = 'lowshelf';
        lowFilter.frequency.value = 250;
        lowFilter.gain.value = 3;

        midFilter = audioCtx.createBiquadFilter();
        midFilter.type = 'peaking';
        midFilter.frequency.value = 1500;
        midFilter.gain.value = 0;

        highFilter = audioCtx.createBiquadFilter();
        highFilter.type = 'highshelf';
        highFilter.frequency.value = 4000;
        highFilter.gain.value = -10;

        const impulseBuffer = createReverbImpulse(2.5, 0.85, 0.9);
        const convolver = audioCtx.createConvolver();
        convolver.buffer = impulseBuffer;

        wetGain = audioCtx.createGain();
        dryGain = audioCtx.createGain();
        masterGain = audioCtx.createGain();

        wetGain.gain.value = Math.pow(10, -8 / 20);
        dryGain.gain.value = 1.0;
        masterGain.gain.value = 1.0;

        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 64;
        analyserData = new Uint8Array(analyser.frequencyBinCount);

        sourceNode.connect(lowFilter);
        lowFilter.connect(midFilter);
        midFilter.connect(highFilter);

        highFilter.connect(dryGain);
        dryGain.connect(masterGain);

        highFilter.connect(convolver);
        convolver.connect(wetGain);
        wetGain.connect(masterGain);

        masterGain.connect(analyser);
        analyser.connect(audioCtx.destination);

        isAudioFxInitialized = true;
    } catch (e) {
        console.warn("Web Audio API tidak tersedia / diblokir. Player standar tetap dipakai.", e);
    }
}

// Jika host lagu (catbox) tidak mengirim header CORS, graph Web Audio akan
// diam total (spec-compliant tainted-audio behaviour) meski tidak melempar error.
// Deteksi kondisi itu sekali per lagu lalu bypass ke koneksi langsung.
function checkFxSilence() {
    if (!isAudioFxInitialized || !analyser || fxSilenceChecked) return;
    fxSilenceChecked = true;

    setTimeout(() => {
        if (!isAudioFxInitialized || audioPlayer.paused) return;
        analyser.getByteFrequencyData(analyserData);
        const sum = analyserData.reduce((a, b) => a + b, 0);
        if (sum === 0) {
            try {
                sourceNode.disconnect();
                sourceNode.connect(masterGain);
                masterGain.gain.value = 1.0;
                console.warn("Lagu ini diproteksi CORS oleh host, efek audio dinonaktifkan otomatis untuk lagu ini.");
                if (fxToggleBtn) {
                    fxToggleBtn.classList.add('disabled');
                    fxToggleBtn.title = "Efek audio tidak tersedia untuk lagu ini (CORS)";
                }
            } catch (e) { /* noop */ }
        }
    }, 700);
}

function createReverbImpulse(decay, density, diffusion) {
    const rate = audioCtx.sampleRate;
    const length = rate * decay;
    const impulse = audioCtx.createBuffer(2, length, rate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
        const n = i / length;
        const decayFactor = Math.pow(1 - n, decay * 1.5);

        if (Math.random() < density) {
            const noiseL = (Math.random() * 2 - 1) * decayFactor;
            const noiseR = (Math.random() * 2 - 1) * decayFactor;
            left[i] = noiseL * diffusion + noiseR * (1 - diffusion);
            right[i] = noiseR * diffusion + noiseL * (1 - diffusion);
        } else {
            left[i] = 0;
            right[i] = 0;
        }
    }
    return impulse;
}

function toggleAudioFX() {
    fxEnabled = !fxEnabled;
    if (fxToggleBtn) {
        fxToggleBtn.classList.toggle('active', fxEnabled);
        fxToggleBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> FX ${fxEnabled ? 'ON' : 'OFF'}`;
    }
    if (!isAudioFxInitialized || !audioCtx) return;
    const now = audioCtx.currentTime;
    wetGain.gain.setTargetAtTime(fxEnabled ? Math.pow(10, -8 / 20) : 0, now, 0.15);
    lowFilter.gain.setTargetAtTime(fxEnabled ? 3 : 0, now, 0.15);
    highFilter.gain.setTargetAtTime(fxEnabled ? -10 : 0, now, 0.15);
}

// --- App Initialization ---
window.onload = () => {
    renderSongs();
    initFireflies();

    document.body.addEventListener('click', () => {
        initAudioEffects();
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }, { once: true });
};

// --- TOAST NOTIFICATIONS ---
let toastContainer = null;
function showToast(message, icon = 'fa-list-ul') {
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    const iconEl = document.createElement('i');
    iconEl.className = `fa-solid ${icon}`;
    const textEl = document.createElement('span');
    textEl.textContent = message;
    toast.appendChild(iconEl);
    toast.appendChild(textEl);
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 2600);
}

// --- Render Song / Favorites / Queue List ---
function renderSongs() {
    songListEl.innerHTML = '';

    let list, mode;
    if (currentTab === 'favorites') {
        list = songs.filter(s => s.isFavorite);
        mode = 'library';
    } else if (currentTab === 'queue') {
        list = playQueue;
        mode = 'queue';
    } else {
        list = songs;
        mode = 'library';
    }

    if (list.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.textContent =
            currentTab === 'favorites' ? 'Belum ada lagu favorit.' :
            currentTab === 'queue' ? 'Antrean kosong. Pilih lagu dari Daftar Lagu.' :
            'Lagu tidak ditemukan.';
        songListEl.appendChild(empty);
        return;
    }

    const fragment = document.createDocumentFragment();
    list.forEach((song, i) => {
        const item = document.createElement('div');
        const isCurrentSong = mode === 'queue' ? i === currentQueueIndex : playQueue[currentQueueIndex]?.id === song.id;
        item.className = `song-item ${isCurrentSong ? 'active' : ''}`;

        const clickAction = mode === 'queue' ? `playFromQueue(${i})` : `addToQueue(${song.id})`;
        const numberLabel = mode === 'queue' ? `<span class="queue-index">${i + 1}</span>` : `<i class="fa-solid fa-music"></i>`;

        item.innerHTML = `
            <div class="song-info" onclick="${clickAction}">
                ${numberLabel}
                <span>${song.title}</span>
            </div>
            <i class="fa-solid fa-star star-btn ${song.isFavorite ? 'starred' : ''}" onclick="toggleFavorite(event, ${song.id})"></i>
        `;
        fragment.appendChild(item);
    });
    songListEl.appendChild(fragment);
}

function updateQueueBadge() {
    if (queueBadge) queueBadge.textContent = playQueue.length > 0 ? playQueue.length : '';
}

function switchTab(tab, evt) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    (evt?.target?.closest('.tab-btn') || evt?.currentTarget)?.classList.add('active');
    renderSongs();
}

let searchDebounce = null;
function filterSongs() {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
        const query = document.getElementById('searchInput').value.toLowerCase();
        const items = songListEl.getElementsByClassName('song-item');
        Array.from(items).forEach(item => {
            const title = item.innerText.toLowerCase();
            item.style.display = title.includes(query) ? 'flex' : 'none';
        });
    }, 120);
}

// --- QUEUE & PLAYER CONTROLS ---
function addToQueue(id) {
    const song = songs.find(s => s.id === id);
    if (!song) return;

    playQueue.push(song);
    showToast(`Ditambahkan ke antrean: ${song.title}`, 'fa-list-ul');
    updateQueueBadge();

    if (currentQueueIndex === -1) {
        currentQueueIndex = 0;
        loadSongFromQueue();
    } else {
        renderSongs();
    }
}

function playFromQueue(index) {
    if (index < 0 || index >= playQueue.length) return;
    currentQueueIndex = index;
    loadSongFromQueue();
    playCurrent();
}

function loadSongFromQueue() {
    if (currentQueueIndex < 0 || currentQueueIndex >= playQueue.length) return;

    const song = playQueue[currentQueueIndex];
    audioPlayer.src = song.src;
    currentTitleEl.innerText = song.title;
    fxSilenceChecked = false;
    renderSongs();
}

// Pilih lagu acak dari seluruh koleksi, dorong ke antrean, lalu putar langsung.
// Dipakai saat antrean kosong / sudah habis.
function playRandomSong() {
    if (songs.length === 0) return;
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    playQueue.push(randomSong);
    currentQueueIndex = playQueue.length - 1;
    loadSongFromQueue();
    updateQueueBadge();
    showToast(`Memutar acak: ${randomSong.title}`, 'fa-shuffle');
    playCurrent();
}

function playCurrent() {
    initAudioEffects();
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    audioPlayer.play().then(() => {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playPauseBtn.classList.add('is-playing');
        checkFxSilence();
        startVisualizer();
    }).catch(err => {
        console.error("Gagal memutar audio:", err);
    });
}

function pauseCurrent() {
    audioPlayer.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    playPauseBtn.classList.remove('is-playing');
    stopVisualizer();
}

function togglePlay() {
    if (playQueue.length === 0) {
        playRandomSong();
        return;
    }
    if (audioPlayer.paused) {
        playCurrent();
    } else {
        pauseCurrent();
    }
}

// Next selalu langsung memutar lagu berikutnya, apapun status play/pause sebelumnya.
function nextSong() {
    if (playQueue.length === 0) {
        playRandomSong();
        return;
    }
    if (currentQueueIndex < playQueue.length - 1) {
        currentQueueIndex++;
        loadSongFromQueue();
        playCurrent();
    } else {
        // Antrean habis -> lanjut lagu acak, bukan diam di tempat.
        playRandomSong();
    }
}

function prevSong() {
    if (playQueue.length === 0 || currentQueueIndex <= 0) return;
    currentQueueIndex--;
    loadSongFromQueue();
    playCurrent();
}

function toggleFavorite(e, id) {
    e.stopPropagation();
    const song = songs.find(s => s.id === id);
    if (song) {
        song.isFavorite = !song.isFavorite;
        renderSongs();
    }
}

// --- Progress Bar ---
audioPlayer.ontimeupdate = () => {
    if (!isNaN(audioPlayer.duration)) {
        progressBar.max = audioPlayer.duration;
        progressBar.value = audioPlayer.currentTime;
        currentTimeEl.innerText = formatTime(audioPlayer.currentTime);
        durationEl.innerText = formatTime(audioPlayer.duration);
    }
};

audioPlayer.onended = () => {
    if (document.getElementById('autoplayToggle').checked) {
        nextSong();
    } else {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playPauseBtn.classList.remove('is-playing');
        stopVisualizer();
    }
};

function seekSong() {
    audioPlayer.currentTime = progressBar.value;
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function adjustMusicVolume() {
    audioPlayer.volume = document.getElementById('musicVolume').value;
}

// --- FULLSCREEN FEATURE ---
function toggleFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        const docEl = document.documentElement;
        if (docEl.requestFullscreen) docEl.requestFullscreen();
        else if (docEl.webkitRequestFullscreen) docEl.webkitRequestFullscreen();
        else if (docEl.msRequestFullscreen) docEl.msRequestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
    }
}

document.addEventListener('fullscreenchange', updateFullscreenIcon);
document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
document.addEventListener('msfullscreenchange', updateFullscreenIcon);

function updateFullscreenIcon() {
    const fsBtn = document.getElementById('fullscreenBtn');
    if (!fsBtn) return;
    const isFs = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    fsBtn.innerHTML = isFs ? '<i class="fa-solid fa-compress"></i>' : '<i class="fa-solid fa-expand"></i>';
}

// --- AUDIO-REACTIVE VISUALIZER ---
function startVisualizer() {
    if (!visCtx || visRafId) return;
    drawVisualizer();
}

function stopVisualizer() {
    if (visRafId) {
        cancelAnimationFrame(visRafId);
        visRafId = null;
    }
    if (visCtx) visCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
}

function drawVisualizer() {
    visRafId = requestAnimationFrame(drawVisualizer);
    const w = visualizerCanvas.width;
    const h = visualizerCanvas.height;
    visCtx.clearRect(0, 0, w, h);

    if (!analyser) return;
    analyser.getByteFrequencyData(analyserData);

    const barCount = 28;
    const step = Math.floor(analyserData.length / barCount) || 1;
    const barWidth = w / barCount;

    for (let i = 0; i < barCount; i++) {
        const value = analyserData[i * step] || 0;
        const barHeight = Math.max(2, (value / 255) * h);
        const x = i * barWidth;
        const y = h - barHeight;
        const grad = visCtx.createLinearGradient(0, y, 0, h);
        grad.addColorStop(0, '#ffb37a');
        grad.addColorStop(1, 'rgba(255, 138, 76, 0.15)');
        visCtx.fillStyle = grad;
        visCtx.fillRect(x + 1, y, barWidth - 2, barHeight);
    }
}

function resizeVisualizer() {
    if (!visualizerCanvas) return;
    const rect = visualizerCanvas.getBoundingClientRect();
    visualizerCanvas.width = rect.width * devicePixelRatio;
    visualizerCanvas.height = rect.height * devicePixelRatio;
}
window.addEventListener('resize', resizeVisualizer);

// --- FIREFLY AMBIENT PARTICLES (lightweight canvas, no libraries) ---
function initFireflies() {
    const canvas = document.getElementById('fireflyCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let rafId = null;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function makeParticles(count) {
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.6 + 0.6,
            speedX: (Math.random() - 0.5) * 0.15,
            speedY: (Math.random() - 0.5) * 0.15,
            baseAlpha: Math.random() * 0.5 + 0.3,
            flicker: Math.random() * Math.PI * 2
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.flicker += 0.03;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            const alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(p.flicker));
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 179, 122, ${alpha})`;
            ctx.shadowBlur = 6;
            ctx.shadowColor = 'rgba(255, 138, 76, 0.6)';
            ctx.fill();
        });
        rafId = requestAnimationFrame(draw);
    }

    resize();
    makeParticles(window.innerWidth < 600 ? 14 : 24);
    draw();

    window.addEventListener('resize', () => {
        resize();
        makeParticles(window.innerWidth < 600 ? 14 : 24);
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = null;
        } else if (!rafId) {
            draw();
        }
    });
}

resizeVisualizer();
