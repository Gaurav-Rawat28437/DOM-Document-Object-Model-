////callback hell of post in instagram

// function clickPicture(cb)
// {
//     setTimeout(()=>{
//         console.log("Picture click")
//         cb()
//     },4000)
// }

// function selectPicture(cb)
// {
//      setTimeout(()=>{
//         console.log("Picture Selecter")
//         cb()
//     },3000)
// }

// function applyFilter(cb)
// {
//      setTimeout(()=>{
//         console.log("Filter Applies")
//         cb()
//     },2000)
// }

// function chooseCaption(cb)
// {
//      setTimeout(()=>{
//         console.log("Caption Selector")
//         cb()
//     },1000)
// }

// function uploadPicture()
// {
//      setTimeout(()=>{
//         console.log("Picture click")
        
//     },1000)
// }


// clickPicture(()=>{
//     selectPicture(()=>{
//         applyFilter(()=>{
//             chooseCaption(()=>{
//                 uploadPicture()   
//             })
//         })
//     })
// })


// callback hell for cooking maggie


function buyMaggie(cb)
{
    setTimeout(()=>{
        console.log("buy maggie from shop")
        cb()
    },3000)
}

function boilWater(cb)
{
    setTimeout(()=>{
        
        console.log("Boiling the water")
        cb()
    },4000)
}


function addIngredient(cb)
{
    setTimeout(()=>{
        
        console.log("add ingredient in boiles water")
        cb()
    },1000)
}

function cookMaggie(cb)
{
    setTimeout(()=>{
        
        console.log("maggie is cooked")
        cb()
    },2000)
}

function eatMaggie()
{
    setTimeout(()=>{
        console.log("buy maggie from shop")
    },1000)
}


buyMaggie(()=>{
    boilWater(()=>{
        addIngredient(()=>{
            cookMaggie(()=>{
                eatMaggie()
            })
        })
    })
})