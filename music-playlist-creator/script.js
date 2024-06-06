
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