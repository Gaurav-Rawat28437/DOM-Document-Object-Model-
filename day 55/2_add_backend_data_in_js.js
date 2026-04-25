const myOl=document.getElementById("list")

const names = ["Gaurav", "Amit", "Rohit", "Neha"];

for(let item of names)
{
    const myList=document.createElement("li")
    myList.innerText=item
    myOl.appendChild(myList)
}