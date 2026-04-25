// sync js is execute first then aync js will execute











// //set timeout
// console.log("A") // is sync js
// setTimeout(()=>{console.log("it will take 3 sec to execute")},3000)   // is async js
// console.log("B")
// console.log("B")
// console.log("B")
// console.log("B")
// console.log("B")





// //setInterval
// // it will execute every 3 sec ,it means it is ready to execute
// console.log("A")
// setInterval(()=>{console.log("it will take 3 sec to execute")},3000)
// console.log("B")
// console.log("B")





// // example
// console.log("A")
// setInterval(()=>{console.log("D")},5000)
// for(let i=0;i<10000000000;i++)
// {

// }
// console.log("B")
// setInterval(()=>{console.log("C")},2000)



//leave setTimeout


console.log("A")
let id =setTimeout(()=>{console.log("C")},2000)

console.log("B")
clearTimeout(id)
