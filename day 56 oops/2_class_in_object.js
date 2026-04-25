// Object Oriented Programming (OOP) is a style of programming that uses classes and objects to model real-world things like data and behavior.
// A class is a blueprint that defines the properties and methods an object can have,
// while an object is a specific instance created from that class
//everything is object expect undefined and null


// make class,class keyword was introduced in ECMAScript 2015, also known as ES6.
//we use capital letter for firstcharacter in class name


class Person{
   name="gaurav"
   age=20
   city="delhi"
} //here we use hardcoded  that why in every object we make have same property

let obj1=new Person()
console.log(obj1)
let obj2=new Person()
console.log(obj2)



class Student{
    constructor(roll_number,age,name,standerd)
    {
        this.RollNumber=roll_number
        this.Age=age
        this.Name=name
        this.Standerd=standerd
    }

    greet(){
        console.log(`hello ${this.Name}`)
    }
}

let student1=new Student(1,10,"gaurav","10th")
let student2=new Student(2,12,"uv","11th")
console.log(student1)
console.log(student2)


// check if any object is made by class
console.log(student1 instanceof(Student))
student1.greet()
student2.greet()