console.log("Spotify");

//initializing the variables
let songIndex=0;
let audioElement = new Audio('Songs/song1.mp3');
let mainPlay = document.getElementById("mainPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let mainSongName = document.getElementById('mainSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName:"Something in the Way ", filePath: "Songs/song1.mp3", coverPath: "Covers/img1.jpg"} ,
    {songName:"Beauty and a Beat  ", filePath: "Songs/song2.mp3", coverPath: "Covers/img2.jpg"} ,
    {songName:"Shooting Stars ", filePath: "Songs/song3.mp3", coverPath: "Covers/img3.jpg"} ,
    {songName:"Snow", filePath: "Songs/song4.mp3", coverPath: "Covers/img4.jpg"} ,
    {songName:"Kesariya ", filePath: "Songs/song5.mp3", coverPath: "Covers/img5.jpg"} ,
    {songName:"Adventure of a Lifetime ", filePath: "Songs/song6.mp3", coverPath: "Covers/img6.jpg"} ,
    {songName:"Rainberry ", filePath: "Songs/song7.mp3", coverPath: "Covers/img7.jpg"} ,
    {songName:"High on Life ", filePath: "Songs/song8.mp3", coverPath: "Covers/img8.jpg"} ,

    ]

    songItems.forEach((element, i)=>{ 
      element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
      element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    });

    //audioElement.play();

    //play/pause 
    mainPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0)
        {
          audioElement.play();  
          mainPlay.classList.remove('fa-play');
          mainPlay.classList.add('fa-pause');
          gif.style.opacity=1;
        }
        else
        {
          audioElement.pause()
          mainPlay.classList.remove('fa-pause');
          mainPlay.classList.add('fa-play');
          gif.style.opacity=0;
        }
    })

//Listening to the Songs played
audioElement.addEventListener('timeupdate', ()=>{
//updating bar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})
//updating song wrt the progressbar
myProgressBar.addEventListener('change',()=>{
audioElement.currentTime = myProgressBar.value*audioElement.duration/100;

})

 const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
 })
 }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
  makeAllPlays();
  songIndex = parseInt(e.target.id);
  e.target.classList.remove('fa-play');
  e.target.classList.add('fa-pause');
  audioElement.src = `songs/song${songIndex + 1}.mp3`;
  mainSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  mainPlay.classList.remove('fa-play');
  mainPlay.classList.add('fa-pause');


})
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex >= 7)
  {
    songIndex = 0;
  }
  else{
    songIndex += 1;
  }

  audioElement.src = `songs/song${songIndex + 1}.mp3`;
  mainSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  mainPlay.classList.remove('fa-play');
  mainPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
if(songIndex<=0){
    songIndex=7;
}
else{
  songIndex -= 1;
}
  audioElement.src = `songs/song${songIndex + 1}.mp3`;
  mainSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  mainPlay.classList.remove('fa-play');
  mainPlay.classList.add('fa-pause');

})
