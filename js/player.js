let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove("fa-pause"); //when the song is paused  removes the class pause
        ctrlIcon.classList.add("fa-play");  //add class play when song is paused
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause"); //add class pause during the song is playing
        ctrlIcon.classList.remove("fa-play"); //remove the play class when the song is playing
    }
}

if(song.play()){
    setInterval(() =>{
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause"); //add class pause during the song is playing
    ctrlIcon.classList.remove("fa-play");
}