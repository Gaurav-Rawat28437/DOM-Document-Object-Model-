const container=document.getElementById("container")


const leftContainer=document.createElement("div")
leftContainer.classList.add("leftContainer")


const title=document.createElement("input")
title.classList.add("title")
title.setAttribute("placeholder","title")

const br=document.createElement("br")

const disc=document.createElement("input")
disc.classList.add("disc")
disc.setAttribute("placeholder","discription")

const addBtn=document.createElement("button")
addBtn.classList.add("addBtn")
addBtn.innerText="Add Task"


leftContainer.append(title,br,disc,addBtn)
container.appendChild(leftContainer)

//create right side container
const rigthContainer=document.createElement("div")
rigthContainer.classList.add("rigthContainer")


//store value
let titleValue
title.addEventListener("input",(e)=>{
     titleValue=e.target.value
})
let discValue
disc.addEventListener("input",(e)=>{
    discValue=e.target.value
})

addBtn.addEventListener("click",()=>{


    if(title.value=="" && disc.value=="")
    {
        alert("please enter something you idiot")
        return
    }
    
    const smallDiv=document.createElement("div")
    smallDiv.classList.add("smallDiv")
    const leftSmall=document.createElement("div")
    leftSmall.classList.add("leftSmall")
    const heading=document.createElement("h3")
    const paragraph=document.createElement("p")
    const removeBtn=document.createElement("button")

    heading.innerText=titleValue
    paragraph.innerText=discValue
    removeBtn.innerText="X"

    leftSmall.append(heading,paragraph)
    smallDiv.append(leftSmall,removeBtn)
    rigthContainer.appendChild(smallDiv)
    container.appendChild(rigthContainer)

    title.value=""
    disc.value=""

    removeBtn.addEventListener("click",()=>{
       smallDiv.remove()

    })


})







