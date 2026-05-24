const but=document.getElementsByTagName("button")[0]
const output=document.getElementsByTagName("h2")[0]


but.addEventListener("click",()=>{

    const n1=Number(prompt("enter number 1"))
    const n2=Number(prompt("enter number 2"))
    const operation=prompt("enter the operation( +  -  *  / )")


    if (!isNaN(n1) && !isNaN(n2) && ["+","-","*","/"].includes(operation))
    {
        switch(operation){
            case "+":output.innerText=n1+n2
                        break
            case "-":output.innerText=n1-n2
                        break
            case "*":output.innerText=n1*n2
                        break
            case "/":output.innerText=n1/n2
                        break
            default:output.innerText="invalid outpuy"
                    
        }
    }
    else
    {
        output.textContent="invalid"
    }



})