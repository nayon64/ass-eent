let videoPlayer = document.getElementById("video-player");
let myPlayer = document.getElementById("myVideo");
let home = document.getElementById("home");

// video play function
const playVideo = (file) => {
  myPlayer.src = file;
  videoPlayer.style.display = "block";
  home.style.display="none"
};

// video stop function
const stopVideo = () => {
  videoPlayer.style.display = "none";
  home.style.display = "block";
};
