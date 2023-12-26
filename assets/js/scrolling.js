const slider = document.querySelector('.items');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });


    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
  
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
 
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
 


    const sliderOp = document.querySelector('.itemsOp');
    let isDownOp = false;
    let startXOp;
    let scrollLeftOp;

    sliderOp.addEventListener('mousedown', (e) => {
      isDownOp = true;
      sliderOp.classList.add('active');
      startXOp = e.pageX - sliderOp.offsetLeft;
      scrollLeftOp = sliderOp.scrollLeft;
    });


    sliderOp.addEventListener('mouseleave', () => {
      isDownOp = false;
      sliderOp.classList.remove('active');
    });
  
    sliderOp.addEventListener('mouseup', () => {
      isDownOp = false;
      sliderOp.classList.remove('active');
    });
 
    sliderOp.addEventListener('mousemove', (e) => {
      if (!isDownOp) return;
      e.preventDefault();
      const xT = e.pageX - sliderOp.offsetLeft;
      const walkT = (xT - startXOp) * 3; //scroll-fast
      sliderOp.scrollLeft = scrollLeftOp - walkT;
    });
 


    const sliderT = document.querySelector('.itemsT');
    let isDownT = false;
    let startXT;
    let scrollLeftT;

    sliderT.addEventListener('mousedown', (e) => {
      isDownT = true;
      sliderT.classList.add('active');
      startXT = e.pageX - sliderT.offsetLeft;
      scrollLeftT = sliderT.scrollLeft;
    });


    sliderT.addEventListener('mouseleave', () => {
      isDownT = false;
      sliderT.classList.remove('active');
    });
  
    sliderT.addEventListener('mouseup', () => {
      isDownT = false;
      sliderT.classList.remove('active');
    });
 
    sliderT.addEventListener('mousemove', (e) => {
      if (!isDownT) return;
      e.preventDefault();
      const xT = e.pageX - sliderT.offsetLeft;
      const walkT = (xT - startXT) * 3; //scroll-fast
      sliderT.scrollLeft = scrollLeftT - walkT;
    });

// video
let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.className = "playing";
  } catch(err) {
    playButton.className = "";
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.className = "";
  }
}