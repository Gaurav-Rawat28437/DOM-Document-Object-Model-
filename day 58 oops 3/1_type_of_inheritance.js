// type of inheritance

// 1) single inheritance
// 2) multi-level inheritance
// 3) hierarchy inheritance
// 4) multiple inheritance

// prototype is an object from which other objects can inherit properties and methods.
// it is like a parent

// JavaScript is related to OOP because it follows prototype-based objects.
// In JavaScript, everything is an object (almost) except null and undefined.
// Objects can inherit from other objects using prototype.
// This is called Prototype-based OOP.
// Yes, JavaScript supports OOP because it follows prototype-based inheritance where objects inherit properties and methods from other objects.


const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

  console.log("---- Single Inheritance ----");
  const parent = {
    greet() {
      console.log("Hello from parent");
    }
  };

  const child = Object.create(parent);
  child.greet();


  console.log("---- Multi-level Inheritance ----");
  const grandParent = {
    sayHi() {
      console.log("Hi from grandparent");
    }
  };

  const parent2 = Object.create(grandParent);
  const child2 = Object.create(parent2);

  child2.sayHi();


  console.log("---- Hierarchical Inheritance ----");
  const parent3 = {
    speak() {
      console.log("Speaking...");
    }
  };

  const childA = Object.create(parent3);
  const childB = Object.create(parent3);

  childA.speak();
  childB.speak();


  console.log("---- Multiple Inheritance (using mixin) ----");
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };

  const result = Object.assign({}, obj1, obj2);
  console.log(result);

});