var player = document.querySelector('.player');
var video = player.querySelector('.player__video');
var controller = player.querySelector('.player__controls');
var toggle = controller.querySelector('.toggle');
var skip = controller.querySelectorAll('[data-skip]');
var slider = controller.querySelectorAll('.player__slider');
var progress = controller.querySelector('.progress__filled');
var progressCover = controller.querySelector('.progress');


function playVideo(e){
if(video.paused){
  toggle.innerHTML = 'pause';
  video.play();
}
else{
  toggle.innerHTML = '►';
  video.pause();
}
}

function skipVideo(e){
  video.currentTime += parseFloat(e.srcElement.dataset.skip);
}

function sliderEvent(e){
   video[this.name] = e.srcElement.value;
}

function progressEvent(e){
    progress.style.flexBasis = (e.srcElement.currentTime/e.srcElement.duration)*100 +'%';
}

function progressChange(e){
  console.log(e);
  video.currentTime = (e.offsetX/progressCover.offsetWidth)*video.duration;
}

video.addEventListener('click',playVideo);
toggle.addEventListener('click',playVideo);
skip.forEach(function(i){
i.addEventListener('click',skipVideo);
})
slider.forEach(function(item){
  item.addEventListener('change',sliderEvent);
})
video.addEventListener('timeupdate',progressEvent);
progressCover.addEventListener('click',progressChange);
