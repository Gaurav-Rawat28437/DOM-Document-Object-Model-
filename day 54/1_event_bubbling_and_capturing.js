const outerDiv=document.getElementById("outer")
const middleDiv=document.getElementById("middle")
const innerDiv=document.getElementById("inner")


// addEventListener syntax is like this:
// variable_name.addEventListener("click",()=>{       // click is type of event;whenever we click on that buttton of div,it we execute
//     console.log("hello")
// },use capture)     

//use capture is use to telling that when it will execute the event.
//it have 2 part and take value in boolean(true:use capturing & false :not use capturing or use bubbling)
//when it goes inside is called capturing and when it comes from inside called bubbling
//by default is use bubbling 


outerDiv.addEventListener("click",()=>{
    console.log("outerDiv click")
},true)


middleDiv.addEventListener("click",()=>{
    console.log("middleDiv click")
},false)

innerDiv.addEventListener("click",()=>{
    console.log("innerDiv click")
},true)