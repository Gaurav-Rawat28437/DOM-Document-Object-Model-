const container=document.getElementById("container")

// adding event listener to parent instead of many child elements.

container.addEventListener("click",(e)=>{

    if(e.target.id!="container")
    {
        console.log(`${e.target.innerText} is added to cart`)
    }
})