// js runs at last
// every tags in html is nodes (that nodes is object)


const dabba=document.getElementById("box")

// console.log(dabba)  : lt is object everything inside html is object


//we can do style ile this in js 
// dabba.setAttribute("style","background-color : red ; border : 5px solid black")


dabba.style.border="1px solid green"
dabba.style.backgroundColor="pink"
dabba.style["borderColor"]="yellow"


const list=document.getElementById("list")

// console.dir(list)
let listArr=list.children


// console.log(listArr)
for(let item of listArr)
{
    console.log(item)
}

