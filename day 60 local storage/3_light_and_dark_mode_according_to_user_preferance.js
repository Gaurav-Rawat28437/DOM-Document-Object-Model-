const light=document.getElementById("light")
const dark =document.getElementById("dark")
const text=document.getElementById("text")

window.addEventListener("load",()=>{
    const theme=localStorage("theme")
    document.body.style.backgroundColor=(theme=="light"?"white" : "dark")
})

light.addEventListener("click",()=>{
    text.style.backgroundColor="white"
    text.style.color="black"
    document.body.style.backgroundColor="white"
    localStorage.setItem("theme","light")
})


dark.addEventListener("click",()=>{
    text.style.backgroundColor="black"
    text.style.color="white"
    document.body.style.backgroundColor="black"
     localStorage.setItem("theme","dark")
})

