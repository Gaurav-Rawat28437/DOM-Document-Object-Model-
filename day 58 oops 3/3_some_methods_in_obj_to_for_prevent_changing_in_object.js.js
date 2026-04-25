// methods are function inside object
// here are some object methods 

let obj={
    name:"gaurav",
    age:20,
    city:"delhi"
}

Object.preventExtensions(obj)
// It prevents adding new properties to an object.
// You can modify existing properties
obj.age=30
console.log(obj)
// You can delete existing properties
delete obj.city
console.log(obj)
// You cannot add new properties



