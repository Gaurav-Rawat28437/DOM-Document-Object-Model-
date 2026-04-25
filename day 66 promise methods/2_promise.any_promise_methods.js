Promise.any([
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

//Promise.any() can go to catch, but only when all promises reject.
//Promise.any(), every time you run it again (or reload the page), it can return a new result object/value.