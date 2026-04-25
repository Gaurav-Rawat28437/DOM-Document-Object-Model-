const nameInput=document.getElementById("nameInput")
const addBtn=document.getElementById("button")
const list=document.createElement("ul")

addBtn.addEventListener("click",()=>{

    const listItem=document.createElement("li")
    listItem.innerText=nameInput.value
    list.append(listItem)
    document.body.append(list)






    
    nameInput,value=""



})



