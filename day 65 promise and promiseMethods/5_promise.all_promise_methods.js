
//  Promise.all()
//     Runs multiple promises in parallel.
//     If all resolve → success.
//     If one rejects

// Promise.all([
//     Promise.resolve([1,3,5,7,9]),
//     Promise.resolve(["a","e","i","o","u"]),
//     Promise.resolve([true,false,true,true,false,false,false]),
//     Promise.resolve({Name:"gaurav",age:20}),
//     Promise.reject("rejected promise")
// ])
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


Promise.all([
    fetch("https://dog.ceo/api/breeds/image/random").then(res=> res.json()),
    fetch("https://randomuser.me/api/").then(res=> res.json()),
    fetch("https://fakestoreapi.com/products").then(res=> res.json())
])
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})