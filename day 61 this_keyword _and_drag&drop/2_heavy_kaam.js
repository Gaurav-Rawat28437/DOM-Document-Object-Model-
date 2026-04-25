const myBtn=document.getElementById("button")

myBtn.addEventListener("click",(e)=>{
    if(e.isTrusted)
    {
       
        console.log("heavly kaaam")
    }
})