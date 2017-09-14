const video = document.getElementById('myVideo');
const captions = document.querySelectorAll('p span');
const videoTranscript = document.querySelector('.transcript');


// Highlighting the transcript as the video plays

video.addEventListener('timeupdate', (e) => {
  for (var i = 0; i < captions.length; i++) {
    let currentTime = video.currentTime;
    let startTime = captions[i].getAttribute('data-start');
    let endTime = captions[i].getAttribute('data-end');
    if (startTime <= currentTime && endTime >= currentTime) {
       captions[i].className = 'textColor';
    } else {
      captions[i].className = '';
    }
  }
});

//When clicking on any sentence in the transcript, the video player jumps to the appropriate time in the video.

videoTranscript.addEventListener('click', (e) => {
   let target = e.target;
   let jumpToTime = target.getAttribute('data-start');
   if (target) {
     video.currentTime = jumpToTime;
   }
});
