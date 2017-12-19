<<<<<<< HEAD
var video = document.querySelector('video');
var played = document.querySelector('.play');
var sliders = document.querySelectorAll('.slider');
var fullscreen = document.querySelector('.fullscreen');
var bar = document.querySelector('.bar');
var barCover = document.querySelector('.bar-cover');
//play || pause funxction
function playEvent() {
  if(video.paused){
    video.play();
    played.innerHTML = '<i class="fas fa-pause fa-lg"></i>';
  }
  else{
    video.pause();
    played.innerHTML = '<i class="fas fa-play fa-lg"></i>';
  }
}

// sliders volume and speed event
function sliderEvent(e){
console.log(e.srcElement.name);
if(e.srcElement.name == 'volume'){
video.volume = e.srcElement.value;
}
else if(e.srcElement.name == 'playbackspeed'){
  console.log(e);
  video.playbackRate = e.srcElement.value;
}
}

// fullscreen function
var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);

if (!fullScreenEnabled) {
   fullscreen.style.display = 'none';
}

var handleFullscreen = function() {
   if (isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setFullscreenData(false);
   }
   else {
      if (video.requestFullscreen) video.requestFullscreen();
      else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
      else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen();
      else if (video.msRequestFullscreen) video.msRequestFullscreen();
      setFullscreenData(true);
   }
}

var isFullScreen = function() {
   return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}

var setFullscreenData = function(state) {
   video.setAttribute('data-fullscreen', !!state);
}

document.addEventListener('fullscreenchange', function(e) {
   setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
});
document.addEventListener('webkitfullscreenchange', function() {
   setFullscreenData(!!document.webkitIsFullScreen);
});
document.addEventListener('mozfullscreenchange', function() {
   setFullscreenData(!!document.mozFullScreen);
});
document.addEventListener('msfullscreenchange', function() {
   setFullscreenData(!!document.msFullscreenElement);
});

function progressEvent(e){
    bar.style.flexBasis = (e.srcElement.currentTime/e.srcElement.duration)*100 +'%';
}

function progressChange(e){
  console.log(e);
  video.currentTime = (e.offsetX/barCover.offsetWidth)*video.duration;
}

video.addEventListener('click',playEvent);
played.addEventListener('click',playEvent);
fullscreen.addEventListener('click',handleFullscreen);
sliders.forEach(function(){
  this.addEventListener('change',sliderEvent);
})
barCover.addEventListener('click',progressChange);
video.addEventListener('timeupdate',progressEvent);
=======
var video = document.querySelector('video');
var played = document.querySelector('.play');
var sliders = document.querySelectorAll('.slider');
var fullscreen = document.querySelector('.fullscreen');
var bar = document.querySelector('.bar');
var barCover = document.querySelector('.bar-cover');
//play || pause funxction
function playEvent() {
  if(video.paused){
    video.play();
    played.innerHTML = '<i class="fas fa-pause fa-lg"></i>';
  }
  else{
    video.pause();
    played.innerHTML = '<i class="fas fa-play fa-lg"></i>';
  }
}

// sliders volume and speed event
function sliderEvent(e){
console.log(e.srcElement.name);
if(e.srcElement.name == 'volume'){
video.volume = e.srcElement.value;
}
else if(e.srcElement.name == 'playbackspeed'){
  console.log(e);
  video.playbackRate = e.srcElement.value;
}
}

// fullscreen function
var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);

if (!fullScreenEnabled) {
   fullscreen.style.display = 'none';
}

var handleFullscreen = function() {
   if (isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setFullscreenData(false);
   }
   else {
      if (video.requestFullscreen) video.requestFullscreen();
      else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
      else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen();
      else if (video.msRequestFullscreen) video.msRequestFullscreen();
      setFullscreenData(true);
   }
}

var isFullScreen = function() {
   return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}

var setFullscreenData = function(state) {
   video.setAttribute('data-fullscreen', !!state);
}

document.addEventListener('fullscreenchange', function(e) {
   setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
});
document.addEventListener('webkitfullscreenchange', function() {
   setFullscreenData(!!document.webkitIsFullScreen);
});
document.addEventListener('mozfullscreenchange', function() {
   setFullscreenData(!!document.mozFullScreen);
});
document.addEventListener('msfullscreenchange', function() {
   setFullscreenData(!!document.msFullscreenElement);
});

function progressEvent(e){
    bar.style.flexBasis = (e.srcElement.currentTime/e.srcElement.duration)*100 +'%';
}

function progressChange(e){
  console.log(e);
  video.currentTime = (e.offsetX/barCover.offsetWidth)*video.duration;
}

video.addEventListener('click',playEvent);
played.addEventListener('click',playEvent);
fullscreen.addEventListener('click',handleFullscreen);
sliders.forEach(function(){
  this.addEventListener('change',sliderEvent);
})
barCover.addEventListener('click',progressChange);
video.addEventListener('timeupdate',progressEvent);
>>>>>>> f07081d26fb3ebc8e8b127bb74f0db2bfe0c9b76
