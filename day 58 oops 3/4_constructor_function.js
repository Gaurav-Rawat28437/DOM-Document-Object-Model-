
//this is the oldere way to ceate a class before ECMAScript 2015 (es6)



function Person(name,age,city)
{
    this.name=name
    this.age=age
    this.city=city
}

let p1=new Person("gaurav",20,"delhi")
console.log(p1)



// This is prototype method addition
Object.prototype.Sayhi= function()
{
    console.log("hello "+this.name)
}
p1.Sayhi()