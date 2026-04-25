// Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation.
//  A Promise is an object that represents a value that will come in the future.

// Used for:
// API calls
// File reading
// Database work
// setTimeout

// promise has 3 States

// Pending → Waiting
// Resolved (Fulfilled) → Success
// Rejected → Failed

const url="https://hp-api.onrender.com/api/characters"

const reponse=fetch(url)

reponse
.then((res)=>{
    return res.json()
})
.then((data)=>{
    for(let item of data)
    {
        // let card=
    }
})



// setTimeout and setInterval were designed long before Promises existed (ES6 added Promises in 2015).

// They are callback-based, not async/await-friendly by default.

// They return a timer ID, not a future value:

// let id = setTimeout(() => console.log("Hi"), 1000);
// console.log(id); // something like 1


