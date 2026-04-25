const img=document.getElementById("img")
const btn=document.getElementById("btn")

// // btn.addEventListener("click",()=>{

// //     let reponse=fetch("https://dog.ceo/api/breeds/image/random")

// //     reponse
// //     .then((resp)=>{
// //         return resp.json()
// //         })
// //     .then((data)=>{
// //             let imgData=data.message
// //             img.src=imgData
// //         })


// // })



// // make with aysn-await

// btn.addEventListener("click",()=>{

//     async function getdata(){
                
//         const resp=await fetch("https://dog.ceo/api/breeds/image/random")
//         const data=await resp.json()
//          img.src=data.message
        
//     }
//     getdata()

// })

// //async in callback function

btn.addEventListener("click",async()=>{

    
                
        const resp=await fetch("https://dog.ceo/api/breeds/image/random")
        const data=await resp.json()
         img.src=data.message
        
    

})

