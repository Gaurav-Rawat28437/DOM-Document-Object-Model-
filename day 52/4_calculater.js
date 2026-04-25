const but=document.getElementsByTagName("button")
const output=document.getElementsByTagName("h2")


but.addEventListener("click",()=>{

    const n1=Number(prompt("enter number 1"))
    const n2=Number(prompt("enter number 2"))
    const operation=Number(prompt("enter the operation( +  -  *  / )"))


    if (!isNaN(n1) && !isNaN(n2) && ["+","-","*","/"].includes(operation))
    {

    }
    else
    {
        output.textContent="invalid"
    }



})