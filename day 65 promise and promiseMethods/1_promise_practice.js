const main=document.getElementById("main")

const btn=document.getElementById("button")


btn.addEventListener("click",async()=>{

    const response=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await response.json()
    console.log(data[1])

})
