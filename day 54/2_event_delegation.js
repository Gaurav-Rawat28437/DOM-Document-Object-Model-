const container=document.getElementById("container")



container.addEventListener("click",(e)=>{
   
   
   
    


    if(e.target.id!="container")
    {
        console.log(`${e.target.innerText} is added to cart`)
    }
})