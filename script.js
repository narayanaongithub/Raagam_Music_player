let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let myGif = document.getElementById('gif');
let myGiff = document.getElementById('giff');
let masterSongName1 = document.getElementById('masterSongName1');
let masterSongName2 = document.getElementById('masterSongName2');
let timeStamp = document.getElementsByClassName('timestamp');
let smallPlayButton = document.getElementsByClassName('songItemPlay');




let songs=[
    {songName:'Baby', filePath:'songs/1.mp3', coverPath:'covers/cover1.png'},
    {songName:'Let Me Love You', filePath:'songs/2.mp3', coverPath:'covers/cover2.png'},
    {songName:'Passori', filePath:'songs/3.mp3', coverPath:'covers/cover3.png'},
    {songName:'Jalebi Baby', filePath:'songs/4.mp3', coverPath:'covers/cover4.png'},
    {songName:'Unstoppable', filePath:'songs/5.mp3', coverPath:'covers/cover5.png'},
    {songName:'Arabic Kuthu', filePath:'songs/6.mp3', coverPath:'covers/cover6.png'},
    {songName:'Manike', filePath:'songs/7.mp3', coverPath:'covers/cover7.png'},
    {songName:'My Name is Billa', filePath:'songs/8.mp3', coverPath:'covers/cover8.jpg'},
    {songName:'Naatu Naatu', filePath:'songs/9.mp3', coverPath:'covers/cover9.jpg'},
    {songName:'Raamam Raaghavam', filePath:'songs/10.mp3', coverPath:'covers/cover10.jpg'},
    {songName:'Sulthana', filePath:'songs/11.mp3', coverPath:'covers/cover11.jpg'},
    {songName:'Neethoney Dance', filePath:'songs/12.mp3', coverPath:'covers/cover12.jpg'},
    {songName:'Swing Zara', filePath:'songs/13.mp3', coverPath:'covers/cover13.jpg'},
    {songName:'Dheera Dheera', filePath:'songs/14.mp3', coverPath:'covers/cover14.jpg'},
    {songName:'Salaam Rocky Bhai', filePath:'songs/15.mp3', coverPath:'covers/cover15.jpg'},
    {songName:'Yem Cheddam', filePath:'songs/16.mp3', coverPath:'covers/cover16.jpg'},
    {songName:'Uppenantha E prema', filePath:'songs/17.mp3', coverPath:'covers/cover17.jpg'},
    {songName:'My Love is Gone', filePath:'songs/18.mp3', coverPath:'covers/cover18.jpg'},
    {songName:'Gudilo Badilo', filePath:'songs/19.mp3', coverPath:'covers/cover19.jpg'},
    {songName:'Vaadu Nadipe', filePath:'songs/20.mp3', coverPath:'covers/cover20.jpg'},
    {songName:'DJ Tillu Peru', filePath:'songs/21.mp3', coverPath:'covers/cover21.jpg'}
];
// // Handle Play/Pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        myGif.style.opacity = 1;
        myGiff.style.opacity = 1;
    }
    else 
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        myGif.style.opacity = 0;
        myGiff.style.opacity = 0;
    }
})

// Updating of progress bar
audioElement.addEventListener('timeupdate', ()=>{
    console.log("timeupdate")
    progress = parseInt(100* audioElement.currentTime/audioElement.duration);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        timeStamp.innerHtml = audioElement.currentTime;
        if(audioElement.paused || audioElement.currentTime <= 0){
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src= `songs/${songIndex+1}.mp3`;
            masterSongName1.innerText = songs[songIndex].songName;
            masterSongName2.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            myGif.style.opacity = 1;
            myGiff.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else{
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.src= `songs/${songIndex+1}.mp3`;
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            myGif.style.opacity = 0;
            myGiff.style.opacity = 0;
        }
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 20){
        songIndex=0
    }
    else{
        songIndex +=1
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName1.innerText = songs[songIndex].songName;
    masterSongName2.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    myGif.style.opacity = 1;
    myGiff.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    myGif.style.opacity = 0;
    myGiff.style.opacity = 0;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex=0
    }
    else{
        songIndex -=1
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName1.innerText = songs[songIndex].songName;
    masterSongName2.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    myGif.style.opacity = 1;
    myGiff.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

previous.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        myGif.style.opacity = 1;
        myGiff.style.opacity = 1;
    }
    else 
    {
        myGif.style.opacity = 0;
        myGiff.style.opacity = 0;
    }
})
next.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        myGif.style.opacity = 1;
        myGiff.style.opacity = 1;
    }
    else 
    {
        myGif.style.opacity = 0;
        myGiff.style.opacity = 0;
    }
})

document.getElementById('back10sec').addEventListener('click', ()=>{
    audioElement.currentTime -= 5;
    audioElement.play();
    myGif.style.opacity = 1;
    myGiff.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('forward10sec').addEventListener('click', ()=>{
    audioElement.currentTime += 5;
    audioElement.play();
    myGif.style.opacity = 1;
    myGiff.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
var len = songIndex.length - 1;

function playSong() {
audioElement.src = songs[songIndex];
audioElement.play();
}




audioElement.addEventListener('ended', function(){
            songIndex++;
            audioElement.src= `songs/${songIndex+1}.mp3`;
            masterSongName1.innerText = songs[songIndex].songName;
            masterSongName2.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            myGif.style.opacity = 1;
            myGiff.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle'); 

            if(songIndex >= songs.length){
                songIndex=0;
}

});

