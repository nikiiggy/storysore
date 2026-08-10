// --- 1. PLAYLIST DATA (61 SONGS) ---
const songs = [
    { id: 1, title: "Juicy Luicy - Lantas (STAYC Sumin Cover)", src: "audio/[STAYTUNED] Juicy Luicy ‘Lantas‘ COVER _ STAYC Sumin.mp3", isFavorite: false },
    { id: 2, title: "Perunggu - 33X (Cover)", src: "audio/33X - Perunggu (Cover).mp3", isFavorite: false },
    { id: 3, title: "The 1975 - About You (Cover)", src: "audio/About You by The 1975 (Cover).mp3", isFavorite: false },
    { id: 4, title: "Sal Priadi - Ada Titik Titik Di Ujung Doa (Cover)", src: "audio/Ada Titik Titik Di Ujung Doa - Sal Priadi (Cover).mp3", isFavorite: false },
    { id: 5, title: "Ajeng Febria - Tresno Tekane Mati", src: "audio/AJENG FEBRIA - TRESNO TEKANE MATI _ JENENGMU TAK UKIR SAKJRONING ATI _ (OFFICIAL LIVE MUSIC VIDEO).mp3", isFavorite: false },
    { id: 6, title: "Misselia - Akhir Tak Bahagia (Cover)", src: "audio/Akhir Tak Bahagia - Misselia (cover).mp3", isFavorite: false },
    { id: 7, title: "Rizky Febian & Adrian Khalif - Alamak", src: "audio/Alamak - Rizky Febian & Adrian Khalif (Live Arrangement).mp3", isFavorite: false },
    { id: 8, title: "Arya Galih - Tunggal Eka", src: "audio/ARYA GALIH - TUNGGAL EKA _ DC.CONGYENG (OFFICIAL LIVE MUSIC VIDEO) _ DC MUSIK.mp3", isFavorite: false },
    { id: 9, title: "Dike Sabrina ft. Shepin Misa - Aishiteru 2", src: "audio/DIKE SABRINA Feat. SHEPIN MISA - AISHITERU 2 ( Official Live Music Video ) _ DS MUSIC.mp3", isFavorite: false },
    { id: 10, title: "Dinda Teratu - Njarem", src: "audio/DINDA TERATU - NJAREM ( Official Live Video Royal Music ).mp3", isFavorite: false },
    { id: 11, title: "Dinda Teratu - Pisah", src: "audio/DINDA TERATU - PISAH ( Official Live Video Royal Music ).mp3", isFavorite: false },
    { id: 12, title: "D'Masiv - Diantara Kalian (Egha De Latoya Cover)", src: "audio/D'MASIV  DIANTARA KALIAN __ COVER BY EGHA DE LATOYA.mp3", isFavorite: false },
    { id: 13, title: "Egha De Latoya - Aku Patut Membenci Dia", src: "audio/EGHA DE LATOYA - AKU PATUT MEMBENCI DIA ( TERE ) ACOUSTIC COVER.mp3", isFavorite: false },
    { id: 14, title: "Egha De Latoya - Awal Yang Indah", src: "audio/EGHA DE LATOYA - AWAL YANG INDAH ( TERE ) ACOUSTIC COVER.mp3", isFavorite: false },
    { id: 15, title: "Element - Rahasia Hati (Egha De Latoya Cover)", src: "audio/Element - Rahasia Hati by Egha De Latoya.mp3", isFavorite: false },
    { id: 16, title: ".Feast - Nina (Dodi Putera Cover)", src: "audio/Feast - Nina (COVER BY_ DODI PUTERA) #feast #coversong #nina.mp3", isFavorite: false },
    { id: 17, title: "Float - Pulang (Andri Guitara ft. Bintan Radhita Cover)", src: "audio/Float - Pulang (Andri Guitara ft Bintan Radhita) cover.mp3", isFavorite: false },
    { id: 18, title: "Kehlani - Folded (Cover)", src: "audio/Folded - Kehlani (Cover).mp3", isFavorite: false },
    { id: 19, title: "for Revenge - Penyangkalan", src: "audio/for Revenge - Penyangkalan (Official Lyric Video).mp3", isFavorite: false },
    { id: 20, title: "for Revenge ft. Meiska - Sadrah (Acoustic)", src: "audio/for Revenge - Sadrah ft. Meiska (Acoustic).mp3", isFavorite: false },
    { id: 21, title: "for Revenge - Sadrah", src: "audio/For Revenge - Sadrah, sudahlah kali ini aku kalah  ( Lirik ).mp3", isFavorite: false },
    { id: 22, title: "Gigi Perez - Sailor Song", src: "audio/Gigi Perez – Sailor Song (live for The Current).mp3", isFavorite: false },
    { id: 23, title: "Gilga Sahid - Bukan Diriku", src: "audio/GILGA SAHID - BUKAN DIRIKU ( Royal Music Live - Jamming Session ).mp3", isFavorite: false },
    { id: 24, title: "HAL - L (Jeje Cover)", src: "audio/HAL - L (Cover) __ Jeje..mp3", isFavorite: false },
    { id: 25, title: "Hasan Aftershine ft. GE Orkestra - Tekan Semene", src: "audio/HASAN AFTERSHINE FEAT GE ORKESTRA - TEKAN SEMENE __ GEOPARK NIGHT SPECTA 2025.mp3", isFavorite: false },
    { id: 26, title: "Jagarta - Tersiksa Lagi (Utha Likumahuwa Cover)", src: "audio/JAGARTA - TERSIKSA LAGI UTHA LIKUMAHUWA (COVER) #JAGARTA 4K.mp3", isFavorite: false },
    { id: 27, title: "for Revenge - Jakarta Hari Ini (Gusti Abddie Cover)", src: "audio/JAKARTA HARI INI - FOR REVENGE ( COVER BY GUSTI ABDDIE X TEMAN NGKRONGAN ).mp3", isFavorite: false },
    { id: 28, title: "for Revenge - Jakarta Hari Ini (Slowed + Reverb)", src: "audio/Jakarta Hari Ini - For Revenge ( Slowed + Reverb ).mp3", isFavorite: false },
    { id: 29, title: "Ifan Seventeen - Jangan Paksa Rindu (Morai ft. Hendra Cover)", src: "audio/Jangan Paksa Rindu (Beda) - Ifan Seventeen _ Cover By Morai ft. Hendra.mp3", isFavorite: false },
    { id: 30, title: "Mira Putri ft. Ageng Music - Jangan Pernah Berubah", src: "audio/JANGAN PERNAH BERUBAH - Mira Putri ft Ageng Music (Official Live Music).mp3", isFavorite: false },
    { id: 31, title: "ST12 - Jangan Pernah Berubah (Egha De Latoya Cover)", src: "audio/JANGAN PERNAH BERUBAH - ST12 _ COVER BY EGHA DE LATOYA.mp3", isFavorite: false },
    { id: 32, title: "Ajeng Febria ft. KKZ - Jauh Ko Pergi", src: "audio/JAUH KO PERGI (SA CERITAKAN PADA BINTANG BINTANG) - AJENG FEBRIA FT. KKZ D BLG OM NIRWANA COMEBACK.mp3", isFavorite: false },
    { id: 33, title: "Jun Munthe - Rohaku", src: "audio/Jun Munthe - Rohaku (Lyric Video).mp3", isFavorite: false },
    { id: 34, title: "Egha De Latoya - Kala Sang Surya Tenggelam", src: "audio/KALA SANG SURYA TENGGELAM _ EGHA DE LATOYA.mp3", isFavorite: false },
    { id: 35, title: "Shinta Arsinta - Kangen Mantan", src: "audio/KANGEN MANTAN - SHINTA ARSINTA (Official Music Live) Sumpah aku iki kangen.mp3", isFavorite: false },
    { id: 36, title: "Kaulah Segalanya", src: "audio/Kaulah Segalanya.mp3", isFavorite: false },
    { id: 37, title: "Kendis ft. Adis - Ours To Keep", src: "audio/Kendis - ours to keep (feat. adis) (Official Lyric Video).mp3", isFavorite: false },
    { id: 38, title: "Nadhif Basalamah - Kota Ini Tak Sama Tanpamu (Angga Ramadhan Cover)", src: "audio/KOTA INI TAK SAMA TANPAMU - NADHIF BASALAMAH (COVER BY ANGGA RAMADHAN).mp3", isFavorite: false },
    { id: 39, title: "L. Kidul", src: "audio/L. KIDUL.mp3", isFavorite: false },
    { id: 40, title: "Last Child x for Revenge - Duka x Serana", src: "audio/LAST CHILD X FOR REVENGE -- DUKA X SERANA BY FOR (PRINCE FER).mp3", isFavorite: false },
    { id: 41, title: "Nadhif Basalamah - Bergema Sampai Selamanya (Slowed + Reverb)", src: "audio/nadhif basalamah - bergema sampai selamanya ( slowed + reverb).mp3", isFavorite: false },
    { id: 42, title: "Sasya Arkhisna ft. Dida - Ojo Dibandingke", src: "audio/Ojo Dibadingke - Sasya Arkhisna ft Dida (Official Music Live) Wong ko ngene kok dibanding-bandingke.mp3", isFavorite: false },
    { id: 43, title: "Perfect Strangers", src: "audio/Perfect Strangers.mp3", isFavorite: false },
    { id: 44, title: "Piche Kota - Bahagia Lagi", src: "audio/Piche Kota - Bahagia Lagi (Lyric Video).mp3", isFavorite: false },
    { id: 45, title: "Ziva Magnolya - Pilihan Yang Terbaik (Cover)", src: "audio/Pilihan Yang Terbaik - Ziva Magnolya (Cover).mp3", isFavorite: false },
    { id: 46, title: "Pinkan Mambo - Kasmaran", src: "audio/PINKAN MAMBO - KASMARAN _ The Fusion Experiment.mp3", isFavorite: false },
    { id: 47, title: "Elfa's Singers - Prahara Cinta (Aku Malu)", src: "audio/prahara cinta (aku malu) elfa singer [dirtycaps re-drum] FREEDOWNLOAD.mp3", isFavorite: false },
    { id: 48, title: "Wizz Baker ft. Tami Aulia - Rindu Rumah", src: "audio/RINDU RUMAH - WIZZ BAKER _ TAMI AULIA.mp3", isFavorite: false },
    { id: 49, title: "Afgan - Sadis (Galang Adi Prasetyo Cover)", src: "audio/Sadis - Afgan ( LIVE COVER ) Galang adi prasetyo.mp3", isFavorite: false },
    { id: 50, title: "for Revenge - Sadrah (Acoustic)", src: "audio/Sadrah - Acoustic.mp3", isFavorite: false },
    { id: 51, title: "Samuel Cipta - Senja Sudut Kota (Groove Session ft. Azmi Cover)", src: "audio/Samuel Cipta - Senja Sudut Kota (Live Cover by Groove Session ft. Azmi).mp3", isFavorite: false },
    { id: 52, title: "Shinta Arsinta - Sekti", src: "audio/SEKTI - SHINTA ARSINTA - (Official Music Live) Ombak gedhe tak sebrangi.mp3", isFavorite: false },
    { id: 53, title: "Nadin Amizah - Semua Aku Dirayakan (Cover)", src: "audio/Semua Aku Dirayakan - Nadin Amizah (cover).mp3", isFavorite: false },
    { id: 54, title: "Silvy Kumalasari ft. Sadewok - Sabar", src: "audio/Silvy Kumalasari Feat Sadewok - Sabar (Official Music Video) _ Duh Sayang Ngapuntene Saestu.mp3", isFavorite: false },
    { id: 55, title: "Berharap Tak Berpisah (Strange Arrangement)", src: "audio/STRANGE ARRANGEMENT ‼️ BERHARAP TAK BERPISAH - ICM Production _ #viral #fyp #fypシ.mp3", isFavorite: false },
    { id: 56, title: "Tami Aulia ft. Siho - Tekan Semene", src: "audio/TAMI AULAI ft SIHO _ TEKAN SEMENE - AFTERSHINE.mp3", isFavorite: false },
    { id: 57, title: "Utha Likumahuwa - Tersiksa Lagi (Bintan Radhita & Andri Guitara Cover)", src: "audio/Tersiksa Lagi - Utha Likumahuwa (Bintan Radhita, Andri Guitara) cover.mp3", isFavorite: false },
    { id: 58, title: "The 1975 - About You", src: "audio/The 1975 - About You (Official).mp3", isFavorite: false },
    { id: 59, title: "Timur", src: "audio/Timur.mp3", isFavorite: false },
    { id: 60, title: "Wizz Baker - Rindu Rumah", src: "audio/Wizz Baker - Rindu Rumah - Official Music Video (WBProject2020).mp3", isFavorite: false },
    { id: 61, title: "EMIN ft. JONY - Kamin (MayBae Cover)", src: "audio/Камин (Kamin) - EMIN ft. JONY _ MayBae cover _ Official Music Video.mp3", isFavorite: false }
];

let currentSongIndex = -1;
let currentTab = 'all';

// DOM Elements
const audioPlayer = document.getElementById('audioPlayer');
const oceanPlayer = document.getElementById('oceanPlayer');
const campfirePlayer = document.getElementById('campfirePlayer');
const songListEl = document.getElementById('songList');
const currentTitleEl = document.getElementById('currentTitle');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

// --- WEB AUDIO API (DSP FX ENGINE) ---
let audioCtx;
let sourceNode;
let lowFilter, midFilter, highFilter;
let wetGain, dryGain;
let isAudioFxInitialized = false;

function initAudioEffects() {
    if (isAudioFxInitialized) return;

    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        sourceNode = audioCtx.createMediaElementSource(audioPlayer);

        // Equalizer: Low (+3dB), Mid (0dB), High (-10dB)
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

        // Reverb DSP
        const impulseBuffer = createReverbImpulse(2.5, 0.85, 0.9);
        const convolver = audioCtx.createConvolver();
        convolver.buffer = impulseBuffer;

        wetGain = audioCtx.createGain();
        dryGain = audioCtx.createGain();

        wetGain.gain.value = Math.pow(10, -8 / 20);
        dryGain.gain.value = 1.0;

        // Connections
        sourceNode.connect(lowFilter);
        lowFilter.connect(midFilter);
        midFilter.connect(highFilter);

        highFilter.connect(dryGain);
        dryGain.connect(audioCtx.destination);

        highFilter.connect(convolver);
        convolver.connect(wetGain);
        wetGain.connect(audioCtx.destination);

        isAudioFxInitialized = true;
    } catch (e) {
        console.warn("Web Audio API dikunci oleh browser (CORS/Security Policy saat offline). Menggunakan pemutar audio standar.", e);
    }
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

// App Initialization
window.onload = () => {
    renderSongs();

    // Setting Suara Awal Ambient di 20% (0.2)
    oceanPlayer.volume = 0.2;
    campfirePlayer.volume = 0.2;

    // First interaction handler
    document.body.addEventListener('click', () => {
        initAudioEffects();
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        if (oceanPlayer.paused) oceanPlayer.play().catch(() => {});
        if (campfirePlayer.paused) campfirePlayer.play().catch(() => {});
    }, { once: true });
};

// Render Songs
function renderSongs() {
    songListEl.innerHTML = '';
    const filtered = songs.filter(s => currentTab === 'all' || (currentTab === 'favorites' && s.isFavorite));

    filtered.forEach((song) => {
        const item = document.createElement('div');
        item.className = `song-item ${songs[currentSongIndex]?.id === song.id ? 'active' : ''}`;

        item.innerHTML = `
            <div class="song-info" onclick="playSongById(${song.id})">
                <i class="fa-solid fa-music"></i>
                <span>${song.title}</span>
            </div>
            <i class="fa-solid fa-star star-btn ${song.isFavorite ? 'starred' : ''}" onclick="toggleFavorite(event, ${song.id})"></i>
        `;
        songListEl.appendChild(item);
    });
}

function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderSongs();
}

function filterSongs() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const items = songListEl.getElementsByClassName('song-item');

    Array.from(items).forEach(item => {
        const title = item.innerText.toLowerCase();
        item.style.display = title.includes(query) ? 'flex' : 'none';
    });
}

// Player Controls
function playSongById(id) {
    initAudioEffects();
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    currentSongIndex = songs.findIndex(s => s.id === id);
    const song = songs[currentSongIndex];

    audioPlayer.src = song.src;
    currentTitleEl.innerText = song.title;
    
    audioPlayer.play().then(() => {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }).catch(err => {
        console.error("Gagal memutar audio:", err);
    });

    renderSongs();
}

function togglePlay() {
    initAudioEffects();
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    if (currentSongIndex === -1 && songs.length > 0) {
        playSongById(songs[0].id);
        return;
    }

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function nextSong() {
    if (songs.length === 0) return;
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSongById(songs[currentSongIndex].id);
}

function toggleFavorite(e, id) {
    e.stopPropagation();
    const song = songs.find(s => s.id === id);
    if (song) {
        song.isFavorite = !song.isFavorite;
        renderSongs();
    }
}

// Progress Bar
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

// Volume Controls
function adjustMusicVolume() {
    audioPlayer.volume = document.getElementById('musicVolume').value;
}

function adjustOceanVolume() {
    oceanPlayer.volume = document.getElementById('oceanVolume').value;
}

function adjustCampfireVolume() {
    campfirePlayer.volume = document.getElementById('campfireVolume').value;
}

function toggleOcean() {
    const btn = document.getElementById('oceanToggleBtn');
    if (oceanPlayer.paused) {
        oceanPlayer.play();
        btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    } else {
        oceanPlayer.pause();
        btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
}

function toggleCampfire() {
    const btn = document.getElementById('campfireToggleBtn');
    if (campfirePlayer.paused) {
        campfirePlayer.play();
        btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    } else {
        campfirePlayer.pause();
        btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
}