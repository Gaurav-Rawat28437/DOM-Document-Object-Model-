const myBtn=document.getElementById("button")

myBtn.addEventListener("click",(e)=>{
    if(e.isTrusted)
    {
       
        console.log("heavly kaaam")
    }
})


// Meaning:
// e.isTrusted → checks if event is real or fake
// 1. Real user event

// When user clicks button:

// button.addEventListener("click", (e) => {
//     console.log(e.isTrusted)
// })

// Output:

// true

// Because:

// real mouse click
// real keyboard action
// 2. Fake (programmatic) event

// If event is triggered using JS:

// myBtn.click()

// Then:

// e.isTrusted = false
// Your code meaning
// if(e.isTrusted)

// 👉 run code only if user actually clicked

// So:

// console.log("heavly kaaam")

// runs only for real user action.