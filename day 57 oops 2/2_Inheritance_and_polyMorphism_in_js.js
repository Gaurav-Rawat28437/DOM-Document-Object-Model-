// super contructor is termonology which is the constructor method of a parent (base) class in an inheritance hierarchy

class Vehicle{
    constructor(color,type,fuel)
    {
        this.color=color
        this.type=type
        this.fuel=fuel
    }

    tellClass()
    {
        console.log("this is method from vehicle class")
    }
}
let vehicle1=new Vehicle("white","bicycle","no-fuel")
console.log(vehicle1)


class LandVehicle extends Vehicle{
    constructor(type,fuel,tyreCount,seats,color)
    {
        super(color,type,fuel)
       
        this.tyreCount=tyreCount
        this.seats=seats

    }
}

let landVehicle1=new LandVehicle("car","petrol",4,4,"black")
console.log(landVehicle1)


vehicle1.tellClass()
landVehicle1.tellClass()




//polymorphism means doing same task in differnt ways
// it is concept in programming where one things can behave in different ways
// poly=many
// morphism=forms
// poly-Morphism means many forms
// it have two parts of polyMorphism. 1)Methods Overriding  2)Methods Overloading
// in js methods overloading cannot happend beacuse JavaScript treats functions as objects; a new definition just reassigns that method name to a new function reference.