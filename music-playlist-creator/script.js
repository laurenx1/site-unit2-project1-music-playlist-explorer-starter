
var playlists = document.getElementsByClassName("playlists")
for (let i = 0; i < playlists.length; i++){
    playlists[i].addEventListener("click", function() {
        openModal();
    })
}


// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("playlist-modal");
var span = document.getElementsByClassName("close")[0];

function openModal(card) {
   modal.style.display = "block";
}

span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

function createPlaylistCards() {
    // get playlists container
    const playlistContainer = document.querySelector('.playlists');
    let playlistHTML = ''; 

    data.playlists.forEach(playlist => {
        playlistHTML += `
            <article class="playlist-card">
                <img src="${playlist.playlist_art}" class="playlist-img">
                <div class="playlist-info">
                    <div class="playlist-name">
                        <h1 class="title">${playlist.playlist_name}</h1>
                        <p class="creator">${playlist.playlist_creator}</p>
                    </div>
                    <div class="reactions">
                        <img src="assets/img/pink_heart.png" alt="heart">
                        <p class="like-count">${playlist.likeCount}</p>
                    </div>
                </div>
            </article>
        `;
    });
    playlistContainer.innerHTML = playlistHTML;

    




}

console.log(data);

document.addEventListener('DOMContentLoaded', function() {
     createPlaylistCards(); 
 })

createPlaylistCards()