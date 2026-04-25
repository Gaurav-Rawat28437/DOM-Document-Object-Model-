const addBtn = document.getElementById("addBtn")
const todoContainer=document.getElementById("todo")
const inProgress=document.getElementById("progress-container")

addBtn.addEventListener("click",()=>{

    const title = document.getElementById("title").value.trim()
    const desc = document.getElementById("desc").value.trim()

    if (title == "" || desc == "")
    {
        alert("enter title and description")
        return;
    }

    const card = document.createElement("div")
    card.setAttribute(Date.now())
    card.classList.add("card")
    card.draggable="true"

    

    const heading = document.createElement("h4")
    heading.innerText = title

    const para = document.createElement("p")
    para.innerText = desc

    const now = new Date();
    const dateTime = now.toLocaleString();

    const small = document.createElement("small");
    small.innerText = "Created: " + dateTime;

    card.appendChild(heading)
    card.appendChild(para)
    card.appendChild(small);

    const todoContainer = document.getElementById("todo")
    todoContainer.appendChild(card)


    // card.addEventListener("dragstart",(e)=>{
    //     const data=e.dataTransfer.setData("gaurav",e.target.id)

    // })

//  const task=JSON.parse(localStorage.getItem("tasks")) || []
//  task.push({title:desc})
//  localStorage.setItem("tasks",task)


    document.getElementById("title").value = ""
    document.getElementById("desc").value = ""



})



// todoContainer.addEventListener("dragover",(e)=>{
//     e.preventDefault()
// })


// inProgress.addEventListener("drop",()=>{
//     const addData=e.dataTransfer.ge
// })
