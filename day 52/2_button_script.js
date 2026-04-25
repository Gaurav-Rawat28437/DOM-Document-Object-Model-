const button=document.getElementById("secondButton")
const click2Output=document.getElementById("click2Output")


button.addEventListener("click",()=>{
    
    click2Output.textContent="button 2 click";
    click2Output.style.backgroundColor="yellow";
})

button.addEventListener("dblclick",()=>{
    
    click2Output.textContent="";
    click2Output.style.backgroundColor="white";
})