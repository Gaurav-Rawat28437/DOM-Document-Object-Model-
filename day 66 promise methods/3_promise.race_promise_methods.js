let p1 = new Promise((res, rej) => setTimeout(() => rej("Error"), 1000))
let p2 = new Promise(res => setTimeout(() => res("Success"), 2000))

Promise.race([p1, p2])
.then(res => console.log(res))
.catch(err => console.log(err))