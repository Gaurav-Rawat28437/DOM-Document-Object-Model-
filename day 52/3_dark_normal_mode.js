const button1=document.getElementsByTagName("button")[0]
const button2=document.getElementsByTagName("button")[1]

console.dir(button2)

button1.addEventListener("click",()=>{
    
    button1.parentElement.style.backgroundColor="black";
    button1.parentElement.style.color="white";
})


button2.addEventListener("click",()=>{
    
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
})

