// // setTimeout() is not part of the JavaScript language (ECMAScript).
// // It is provided by the Browser (Web APIs).
// // In browser, it exists inside the window object:

// // JavaScript runs:
// // -   All synchronous code first
// // -   Then asynchronous code (after it is ready)



// // SET TIMEOUT

// // Syntax of setTimeout:-
// // setTimeout(function, time_in_milliseconds);
// // 1 second = 1000 milliseconds

// console.log("Start");

// setTimeout(() => {
//   console.log("Inside timeout");
// }, 0);

// console.log("End");



// // Why does this happen?

// // Because of:
// // Call Stack → executes code
// // Web APIs → handles async work
// // Callback Queue → stores finished callbacks
// // Event Loop → moves callback when stack is empty

// // Step-by-step:

// // "Start" → goes to Call Stack → prints

// // setTimeout() → Goes into Call Stack
// // Browser sees it's a timer function
// // Moves it to Web API
// // Timer starts (2 seconds)
// // setTimeout removed from Call Stack

// // "End" → goes to Call Stack → prints

// // After timer finishes → callback goes to Callback Queue
// // Event Loop pushes it to Call Stack
// // "Inside timeout" prints


// // What is clearTimeout()?
// // It is used to stop/cancel a setTimeout before it runs.
// const timer = setTimeout(() => {
//   console.log("Hello");
// }, 3000);

// // Timer will run after 3 seconds
// // timer stores the timeout ID

// clearTimeout(timer);
// // clearTimeout() runs synchronously → Call Stack 
// // Now the timeout is cancelled
// // "Hello" will NOT print





// // SET INTERVAL

// // setInterval() is like setTimeout(), but repeats the task every X milliseconds.
// // It keeps running until you stop it with clearInterval().


// // const intervalId=setInterval(() => {
  
// //   console.log("setinterval")

// // }, 4000);



// ***************important question****************//

// ----------------make your own setInterval using setTimeout----------------------//

let id=null

function mySetInterval(cb,time)
{

  id=setTimeout(()=>{

    cb()
    
    mySetInterval(cb,time)
    
  },time)

}

mySetInterval(()=>{console.log("gaurav")} ,1000)

function myClearInterval(intervalId)
{
  clearTimeout(intervalId)
}

setInterval(()=>{
  myClearInterval(id)
},5000)

