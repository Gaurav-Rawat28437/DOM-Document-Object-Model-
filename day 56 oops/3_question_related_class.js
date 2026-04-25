////calculate area of rectangle and parameter

// class Rectangle{
//     constructor(length,width){

//         this.Length=length
//         this.Width=width
//     }

//     area()
//     {
//         console.log(`Area of rectangle is ${this.Length*this.Width}`)
//     }
//     parameter()
//     {
//         console.log(`parameter of rectangle is ${2 * ( this.Length + this.Width )} `)
//     }
// }

// let rect1=new Rectangle(10,20)
// rect1.area()
// rect1.parameter()



//withdrow and deposit

// class Bank{
//     constructor(name,balance)
//     {
//         this.Name=name
        
//         this.Balance=balance
//     }

//     withdrow(ammount)
//      {
//         this.withdrowAmmount=ammount
//        if(this.withdrowAmmount>this.Balance)
//        {
//         console.log(`${this.Name} ,insufficiant Balance because your balance is ${this.Balance}`)
//        }
//        else{
//         console.log(`${this.Name} Withdrowing is succesfull remaining balance is ${this.Balance-this.withdrowAmmount}`)
//        } 
//        this.Balance+=this.withdrowAmmountAmmount
//     }

//     deposit(ammount)
//     {
//         this.depositAmmount=ammount
//         console.log(`${this.Name} you deposit ${this.depositAmmount} in your account and your balance is ${this.Balance+this.depositAmmount}`)
//         this.Balance+=this.depositAmmount
//     }
// }

// let p1=new Bank("gaurav",2000)
// p1.withdrow(10000)

// let p2=new Bank("uv",4000)
// p2.deposit(200)

// p1.withdrow(100)
// p2.deposit(200)
// p2.withdrow(100000)



// //product and shopping card

// class Product{
//     constructor(name,price){
//         this.name=name
//         this.price=price
//     }
// }

// //making prodects
// let p1=new Product("bags",1000)
// let p2=new Product("phone",20000)
// let p3=new Product("laptop",50000)



// // adding,removing prodect from carts
// let array=[]
// class ShoppingCard{
//     constructor(product,task)
//     {
//         this.Product=product
//         this.Task=task
        
//         if(this.Task=="add")
//         {
//             array.push(this.Product)
//             console.log(array)
//         }
//         else if(this.Task=="remove")
//         {
//             this.index=array.indexOf(this.Product)
//             array.splice(this.index,1)
             
//               console.log(array)
//         }
//     }
    
// }

// // adding product to cart
// new ShoppingCard(p1,"add")
// new ShoppingCard(p2,"add")
// new ShoppingCard(p3,"add")

// //removing products to cart
// new ShoppingCard(p2,"remove")
// new ShoppingCard(p1,"remove")






class Product{
    constructor(n,p)
    {
        this.name=n
        this.price=p
    }
}

class Scart{
    constructor()
    {
        this.arr=[]
    }
    add(product)
    {
       this.arr.push(product)
        console.log(this.arr)
        
    }

    clear()
    { 
        this.arr=[]
      console.log(this.arr)  
    }

    getBill()
    {
        this.total=0
        for(let item of this.arr)
        {
            this.total+=item.price()
        }
        console.log(this.total)
    }
    
    remove(productName)
    {
        this.arr=this.arr.filter((p)=>{p.name !=productName})
    }

}
let p1=new Product("bag",200)
let p2=new Product("laptop",20000)
let sc=new Scart()
sc.add(p1)
sc.add(p2)