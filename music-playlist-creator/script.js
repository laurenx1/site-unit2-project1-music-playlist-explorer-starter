
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
    
    // iterate over each playlist in the data
    data.playlists.forEach(playlist => {
        const playlistCard = document.createElement('article');
        playlistCard.classList.add('playlist-card');

        // NEED COVER ART
        const playlistArt = document.createElement('img');
        playlistArt.src = playlist.playlist_art; 
        playlistArt.className = 'playlist-img'
        playlistCard.appendChild(playlistArt)
    

        // playlist info container
        const playlistInfo = document.createElement('div');
        playlistInfo.classList.add('playlist-info');

        // playlist name container
        const playlistName = document.createElement('div');
        playlistInfo.classList.add('playlist-name');

        // add playlist title
        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = playlist.playlist_name; 
        playlistName.appendChild(title);

        // add playlist creator
        const creator = document.createElement('p');
        creator.classList.add('creator');
        creator.textContent = `by ${playlist.playlist_creator}`;
        playlistName.appendChild(creator);

        // append playlist name container to playlist info container
        playlistInfo.appendChild(playlistName); 

        //create reactions container
        const reactions = document.createElement('div');
        reactions.classList.add('reactions');
        
        // add heart icon
        const heartIcon = document.createElement('img'); 
        heartIcon.src = 'assets/img/pink_heart.png'
        heartIcon.alt = 'heart';
        reactions.appendChild(heartIcon);

        // add like count 
        const likeCount = document.createElement('p');
        likeCount.classList.add('like-count');
        likeCount.textContent = playlist.likeCount; 
        reactions.appendChild(likeCount); 

        // append reactions container to playlist info container
        playlistInfo.appendChild(reactions);

        // append playlist info container to playlist card
        playlistCard.appendChild(playlistInfo);

        // append playlist card to playlists container
        playlistContainer.appendChild(playlistCard);

        playlistCard.addEventListener('click', () => {
            // appendSong function that does the same thing lol
        })
    })

}

document.addEventListener('DOMContentLoaded', function() {
    createPlaylistCards(); 
})

createPlaylistCards()