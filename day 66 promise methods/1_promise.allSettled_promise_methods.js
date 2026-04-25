Promise.allSettled([
    fetch("https://dog.ceo/api/breeds/image/random").then(res=> res.json()),
    fetch("https://randomuser.me/api/").then(res=> res.json()),
    fetch("https://fapi.com/products").then(res=> res.json())
])
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})


// It always resolves with the result of all promises, even if some fail.