const btn=document.getElementById("btn")
const usernameInput=document.getElementById("username")
const usernamePassword=document.getElementById("password")
const userInvalid=document.getElementById("username-error")
const passwordInvalid=document.getElementById("password-error")
let  userValue
let userPassword

usernameInput.addEventListener("input",(e)=>{
    
     userValue=e.target.value
    console.log(userPassword)
})
usernamePassword.addEventListener("input",(e)=>{
    
     userPassword=e.target.value
    
})



btn.addEventListener("click",(e)=>{
e.preventDefault()


if(userValue.length>15  || userValue.length<4)
{
  userInvalid.style.display="block"
}



if(userPassword.length>20  || userPassword.length<8)
{


for(let i=0;i<passwordInvalid.length;i++)
{
     let ch=str[i]
     if( !(ch>="a" && ch<="z")  ||  !(ch>="A" && ch<="Z")  || !ch==ch.toUpperCase() || !ch==ch.toLowerCase()  || !"!#$%^&*/-+".includes(ch))
     {
          passwordInvalid.style.display="block"
          break
     }
}


}

else{

     userInvalid.innerText="looks Good"
     userInvalid.style.display="block"
      passwordInvalid.innerText="looks good"
       passwordInvalid.style.display="block"
}

})