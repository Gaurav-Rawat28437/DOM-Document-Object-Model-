const expendIcon = document.getElementById("expend-list-button")
const playList = document.getElementById("left-container")
const rigthContainer = document.getElementById("rigth-container")
const playPauseButton=document.getElementById("play-pause-button")
const previousButton=document.getElementById("previous-button")
const nextButton=document.getElementById("next-button")
const musicRange=document.getElementById("music-range")

expendIcon.addEventListener("click", () => {

  if (expendIcon.classList.contains("fa-arrow-right")) {
    expendIcon.classList.remove("fa-arrow-right")
    expendIcon.classList.add("fa-arrow-left")
    playList.style.display = "none"
    rigthContainer.style.width = "100vw"

  }
  else {
    expendIcon.classList.remove("fa-arrow-left")
    expendIcon.classList.add("fa-arrow-right")
    playList.style.display = "flex"
    rigthContainer.style.width = "80vw"
  }
})


const songs = [
  {
    name: "Acoustic Breeze",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    img: "https://picsum.photos/id/1011/300/300"
  },
  {
    name: "Dreamy Vibes",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    img: "https://picsum.photos/id/1025/300/300"
  },
  {
    name: "Chill Mood",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    img: "https://picsum.photos/id/1035/300/300"
  },
  {
    name: "Night Drive",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    img: "https://picsum.photos/id/1043/300/300"
  },
  {
    name: "Summer Beats",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    img: "https://picsum.photos/id/1050/300/300"
  }
];

for (let item of songs) {
  let songItem = document.createElement("div");
  songItem.classList.add("songItem");

  let imgItem = document.createElement("img");
  imgItem.classList.add("imgItem");
  imgItem.setAttribute("src", item.img)

  let songNameItem = document.createElement("span")
  songNameItem.classList.add("songNameItem")
  songNameItem.innerText = item.name

  songItem.append(imgItem, songNameItem);
  playList.append(songItem);
}

const allSong = document.querySelectorAll(".songItem")

let songplay = new Audio(songs[0].src)
let songImg=document.getElementById("song-img")
let songNametext=document.getElementById("song-name")

for (let item of allSong) {

  item.addEventListener("click", (e) => {

    songplay.pause()

    let clickSongName = e.target.innerText || e.target.nextSibling.innerText

    let clickSongImg = e.target.currentSrc || e.target.previousSibling.currentSrc || e.target.children[0].src
    
    let findSong = songs.find((item1) => {
      return item1.name == clickSongName || item1.img == clickSongImg
    })

    songplay = new Audio(findSong.src)
    


    songplay.play()
    
    songImg.setAttribute("src",clickSongImg)
    
    songNametext.innerText=clickSongName
    


    playPauseButton.setAttribute("class","fa-solid fa-pause")


  })
}

playPauseButton.addEventListener("click",(e)=>{

  if(e.target.className=="fa-solid fa-play")
  {
    playPauseButton.setAttribute("class","fa-solid fa-pause")
    songplay.play()
    
    if(songImg.src=="https://cdn-icons-png.flaticon.com/512/727/727218.png")
    {
       songImg.setAttribute("src",songs[0].img)
        songNametext.innerText=songs[0].name
    }
  }
  else if(e.target.className=="fa-solid fa-pause")
  {
    playPauseButton.setAttribute("class","fa-solid fa-play")
    songplay.pause()
  }
})

nextButton.addEventListener("click",()=>{
 
  songplay.pause()
 let currentSongObject=songs.find(item=>item.src==songplay.src)
 let nextSongObjectIndex=songs.indexOf(currentSongObject)==songs.length-1? 0 : songs.indexOf(currentSongObject)+1
  
  songplay = new Audio(songs[nextSongObjectIndex].src)
  songplay.play()
  songImg.setAttribute("src",songs[nextSongObjectIndex].img)
    
  songNametext.innerText=songs[nextSongObjectIndex].name
  playPauseButton.setAttribute("class","fa-solid fa-pause")

})

previousButton.addEventListener("click",()=>{

  songplay.pause()
 let currentSongObject=songs.find(item=>item.src==songplay.src)
 let previousSongObjectIndex=songs.indexOf(currentSongObject)==0? songs.length-1 : songs.indexOf(currentSongObject)-1
 
  songplay = new Audio(songs[previousSongObjectIndex].src)
  songplay.play()
  songImg.setAttribute("src",songs[previousSongObjectIndex].img)
    
  songNametext.innerText=songs[previousSongObjectIndex].name
  playPauseButton.setAttribute("class","fa-solid fa-pause")

})


musicRange.addEventListener("progress",()=>{
  
})


