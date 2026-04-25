// THIS KEYWORD

// Global Scope
// In browser → this points to window object
// window === this === globalThis

console.log(this); // window (browser)


// Inside Normal Function

// Non-strict mode:
// this → window

// Strict mode:
// this → undefined

"use strict";
function test() {
  console.log(this); // undefined
}
test();


// Inside Objects

const obj = {

  // Normal function (method)
  // this → object itself
  a: function () {
    console.log(this);
  },

  // Arrow function
  // Arrow functions don't have their own this
  // They take this from parent scope (lexical scope)
  // Here parent is global → window
  b: () => {
    console.log(this);
  },

  // Nested arrow function
  // Arrow takes this from its parent (c)
  // So it points to object
  c: function () {
    const d = () => {
      console.log(this);
    };
    d();
  },

  // Arrow inside arrow
  // Parent scope is global → window
  e: () => {
    const f = () => {
      console.log(this);
    };
    f();
  }
};

obj.a(); // object
obj.b(); // window
obj.c(); // object
obj.e(); // window



// In DOM
// In event handler, this -> HTML element itself

// <button onclick="alert(this)">Click</button>


// globalThis
// Works in browser + Node
// Safe way to access global object

console.log(globalThis);





// call, apply, bind

function introduce(city) {
  
  console.log(`My name is ${this.firstname + this.lastname} and my age is ${this.age} and I live in ${city}`)
}

const p1 = {
  firstname: "Gaurav",
  lastname: "Rawat",
  age: 20
};

const p2 = {
  firstname: "Bopender",
  lastname: "Jogi",
   age: 22
};

// call()
// Calls function immediately
// Arguments passed separately
console.log("this is call methods")
// Pass arguments separately
introduce.call(p1, "Delhi");
introduce.call(p2, "uttrakhand")


// apply()
// Calls function immediately
// Arguments passed inside array
console.log("this is apply methods")
// Pass arguments as array
introduce.apply(p2, ["Mumbai"]);


// bind()
// Does NOT call immediately
// Returns new function
// Call later
console.log("this is bind methods")
// Returns new function, call later
const fn = introduce.bind(p1, "Noida");
fn();


