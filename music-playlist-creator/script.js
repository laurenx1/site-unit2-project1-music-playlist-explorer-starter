
var playlists = document.getElementsByClassName("playlists")
for (let i = 0; i < playlists.length; i++) {
    playlists[i].addEventListener("click", function () {
        openModal();
    })
}


// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("playlist-modal");
var span = document.getElementsByClassName("close")[0];
var shuffleButton = null; 

function openModal(card) {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function shuffleSongs(songs) {
    for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]]
    }
}


function populateModal(playlist) {
    console.log('yo', playlist)
    const modalContent = document.querySelector('.modal-content');
    const bannerImg = modalContent.querySelector('.banner img');
    const playlistTitle = modalContent.querySelector('.playlist-desc h1');
    const playlistCreator = modalContent.querySelector('.playlist-desc p');
    const songsList = modalContent.querySelector('.songs');
    bannerImg.src = playlist.playlist_art;
    playlistTitle.textContent = playlist.playlist_name;
    playlistCreator.textContent = playlist.playlist_creator;

    let songsHTML = '';
    playlist.songs.forEach(song => {

        songsHTML += `
            <li class="song">
                <img src=${song.cover_art}>
                <span class="song-info">
                    <h3 class="song-title">${song.title}</h3>
                    <h4 class="song-artist">${song.artist}</h4>
                    <h4 class="song-album">${song.album}<h4>
                </span>
                <p>${song.duration}</p>
            </li>
        `;
    });
    songsList.innerHTML = songsHTML;

    // const banner = document.querySelector('.banner')


    if (!shuffleButton) {
        shuffleButton = document.createElement('button');
        shuffleButton.textContent = "Shuffle Songs"; 
        shuffleButton.className = "shuffle-button"; 
        playlistCreator.parentNode.insertBefore(shuffleButton, playlistCreator.nextSibling);

        shuffleButton.addEventListener('click', () => {
            shuffleSongs(playlist.songs);
            populateModal(playlist);
        })
    }

    

    // songsList = document.querySelector('.songs');
    // songsList.innerHTML = '';
    // songs.forEach(song => {
    //     let newSong = document.createElement('li');
    //     newSong.className = "song";
    //     newSong.innerHTML = `
    //         <img src="${song.cover_art}">
    //     `;
    // })


}

function createPlaylistCards() {
    // get playlists container
    const playlistContainer = document.querySelector('.playlists');

    data.playlists.forEach(playlist => {
        let newPlaylist = document.createElement('article');
        newPlaylist.className = "playlist-card";
        newPlaylist.innerHTML = `
            <img src="${playlist.playlist_art}" class="playlist-img">
            <div class="playlist-info">
                <div class="playlist-name">
                    <h1 class="title">${playlist.playlist_name}</h1>
                    <p class="creator">${playlist.playlist_creator}</p>
                </div>
                <div class="reactions">
                    <span class=heart> "♥" </span>
                    <span class="like-count">${playlist.likeCount}</span>
                </div>
            </div>
        `;
        playlistContainer.appendChild(newPlaylist);

        newPlaylist.addEventListener('click', () => {
            populateModal(playlist);

        })

        const heart = newPlaylist.querySelector('.heart');
        heart.textContent = "♥";
        const likeCount = newPlaylist.querySelector('.like-count');

        heart.addEventListener('click', (event) => {
            event.stopPropagation();
            playlist.likeCount++; 
            likeCount.textContent = playlist.likeCount; 

            heart.classList.add('pop');

            heart.addEventListener('animationend', ()=> {
                heart.classList.remove('pop');
            }, {once: true});
        })
        
    });

}

function showFeaturedPage() {
    const featuredPage = document.getElementById('featured-page');
    const playlistContainer = document.querySelector('.playlists');
    playlistContainer.style.display = 'none';
    featuredPage.style.display = 'block';

    const randomPlaylist = data.playlists[Math.floor(Math.random() * data.playlists.length)];
    const featuredImg = document
}

console.log(data);



createPlaylistCards()