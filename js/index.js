var vid = document.getElementsByClassName("vid1");
function enableAutoplay() { 
  vid.autoplay = true;
  vid.load();
}

function disableAutoplay() { 
  vid.autoplay = false;
  vid.load();
} 

function checkAutoplay() { 
  alert(vid.autoplay);
} 