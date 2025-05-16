document.addEventListener('DOMContentLoaded', () => {
    // Background Music (Homepage)
    const audioPlayer = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');

    if (audioPlayer && playButton) {
        playButton.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play().catch(error => console.error('Playback error:', error));
                playButton.textContent = 'Pause Background Music';
            } else {
                audioPlayer.pause();
                playButton.textContent = 'Play Background Music';
            }
        });
    }

    // Sample Audio & Video Data
    const audioData = [
        { title: "সে যে বসে আছে (Se Je Boshe Ache)", src: "audios/সে_যে_বসে_আছে__Se_Je_Boshe_Ache_by_Arnob_Song_Lyric(128k).m4a" },
        { title: "আজ মন খারাপের দিন (Aaj Mon Kharaper Din)", src: "audios/আজ_মন_খারাপের_দিন_Unlucky_13_by_Tarun(128k).m4a" },
        { title: "Uska Hi Banana (Slowed + Reverb)", src: "audios/Uska_Hi_Banana_Arijit_Singh___1920_Evil_Returns.m4a" },
        { title: "Badzaat OST - Wajhi Farooki", src: "audios/Badzaat___OST___Wajhi_Farooki___Imran_Ashraf___Urwa_Hocane___HAR_PAL_GEO(128k).m4a" },
        { title: "Bangla Lofi Mix (Kolkata Version)", src: "audios/Bangla_lofi_mix_kolkata_version______Lofi_chill_music_for_studying_and_traveling.(128k).m4a" },
        { title: "Bayaan - Teri Tasveer", src: "audios/Bayaan_-_Teri_Tasveer__Official_Video_(256k).mp3" },
        { title: "Bazzi - Myself", src: "audios/Bazzi_-_Myself_[Official_Music_Video](128k).m4a" },
        { title: "Be Dili Kiya Yunhi - Talha Anjum & Talha Yunus", src: "audios/Be_Dili_Kiya_Yunhi_Din_Guzar_Jayen_Gey___Remix___Talha_Anjum___Talha_Yunus__Music_Video_(256k).mp3" },
        { title: "Chal Tere Ishq Mein - Mithoon x Vishal Mishra", src: "audios/Chal_Tere_Ishq_Mein_-__Male___Mithoon_x_Vishal_Mishra___Gadar_2_.m4a" },
        { title: "Ghar Se Nikalte Hi - Amaal Mallik feat. Armaan Malik", src: "audios/Ghar_Se_Nikalte_Hi_Song___Amaal_Mallik_Feat._Armaan_Malik___Bhushan_Kumar___Angel(256k).mp3" },
        { title: "Ghor Gari", src: "audios/GhorGari.m4a" },
        { title: "Haal-E-Dil (Male Version) - Sanam Teri Kasam", src: "audios/Haal-E-Dil__Male_Version____Full_Audio_Song___Sanam_Teri_Kasam___Harshvardhan,_Mawra_Mawra___Himesh(128k).m4a" },
        { title: "Jaan Se Pyara Juni OST - Yashal Shahid", src: "audios/Jaan_Se_Pyara_Juni_-_𝗢𝗦𝗧_Slowed_Reverb_🎧_Singer__Yashal_Shahid_-_HUM_TV(256k).mp3" },
        { title: "Joganiya - Pagal Khana OST - Rahat Fateh Ali Khan", src: "audios/Joganiya___Pagal_Khana_Full_OST____Rahat_Fateh_Ali_Khan____Saba_Qamar___Starting_from_29_Jan_at_9PM(128k).m4a" },
  { title: "O Re Piya (Extended Version) - Vahaj Hanif", src: "audios/O_Re_Piya_Self_written_Extended_Version____Vahaj_Hanif(256k).mp3" }
    ];

    const videoData = [
        { title: "Heer Video", src: "videos/Heer.mp4" },
        { title: "Sanam Teri Kasam (Lyrical Video)", src: "videos/Sanam Teri Kasam, (Lyrical Video).mp4" }
    ];

    // Audio & Video Playlist Elements
    const audioList = document.getElementById('audio-list');
    const videoList = document.getElementById('video-list');
    const playlistElement = document.getElementById('audio-playlist');
    const customPlaylistElement = document.getElementById('custom-playlist');
    const videoPlaylistElement = document.getElementById('video-playlist');

    // Render Audio List
    if (audioList || playlistElement) {
        const renderAudio = (data, target, showButton = false) => {
            target.innerHTML = data.map((audio, index) => `
                <div class="audio-item">
                    <h3>${audio.title}</h3>
                    <audio controls>
                        <source src="${audio.src}" type="audio/mp4">
                        Your browser does not support the audio element.
                    </audio>
                    ${showButton ? `<button class="add-to-playlist" data-index="${index}">Add to Playlist</button>` : ''}
                </div>
            `).join('');
        };

        if (audioList) renderAudio(audioData, audioList);
        if (playlistElement) renderAudio(audioData, playlistElement, true);
    }

    // Load Custom Playlist
    const customPlaylist = JSON.parse(localStorage.getItem('customPlaylist')) || [];
    const renderCustomPlaylist = () => {
        if (customPlaylistElement) {
            customPlaylistElement.innerHTML = customPlaylist.map(audio => `
                <div class="audio-item">
                    <h3>${audio.title}</h3>
                    <audio controls>
                        <source src="${audio.src}" type="audio/mp4">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            `).join('');
        }
    };

    // Add to Custom Playlist
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-playlist')) {
            const index = event.target.getAttribute('data-index');
            const audio = audioData[index];

            if (!customPlaylist.some(item => item.src === audio.src)) {
                customPlaylist.push(audio);
                localStorage.setItem('customPlaylist', JSON.stringify(customPlaylist));
                renderCustomPlaylist();
            }
        }
    });

    renderCustomPlaylist();

    // Render Video List
    if (videoList || videoPlaylistElement) {
        const renderVideos = (data, target) => {
            target.innerHTML = data.map(video => `
                <div class="video-item">
                    <h3>${video.title}</h3>
                    <video controls width="400">
                        <source src="${video.src}" type="video/mp4">
                        Your browser does not support the video element.
                    </video>
                </div>
            `).join('');
        };

        if (videoList) renderVideos(videoData, videoList);
        if (videoPlaylistElement) renderVideos(videoData, videoPlaylistElement);
    }
});
