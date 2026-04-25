// setTimeout(()=>{console.log("calling pizza resturant")},2000)

// setTimeout(()=>{console.log("making pizza")},1000)


// setTimeout(()=>{console.log("delieveing the pizza")},5000)

// setTimeout(()=>{console.log("pizza eaten")},500)





//optimize



// this is syntax is called callback hell;we cannot use this syntax because it reduce the readebility
// setTimeout(()=>{

//     console.log("calling pizza resturant")
    
//     (()=>{

//         console.log("making pizza")

//         setTimeout(()=>{

//             console.log("delieveing the pizza")

//             setTimeout(()=>{

//                 console.log("pizza eaten")
//             },500)

//         },5000)

//     },1000)

// },2000)


//promise

let p= new Promise((resolve,reject)=>{

    let n=4
    if(n%2==0)
    {
        resolve("Even")
    }
    else{
        
        reject("odd")
    }
})
console.log(p)


