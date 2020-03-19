var play = document.querySelector(".column .video-menu .icon-icon_play");
console.log(play);
play.onclick = function () {
  var video = document.querySelector(".column .tv-block-video>video");
  var logo = document.querySelector(".column .tv-block-video>.ykplayer-poster-logo");
  if (video.paused) {
    video.play();
    logo.style.display = "none";
  } else { 
    video.pause();
  }
}

