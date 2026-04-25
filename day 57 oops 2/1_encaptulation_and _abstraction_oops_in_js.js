//encaptulation is process of binding object and its methods in class

//abstraction is a concepts of hidding inner concept working of an object and only showing some featurn which is necessary
// its hide implementation of process.
// its use for Security.
// its incease its readability and reusability

class Bank{

    #name
    #balance

    constructor(name,balance,address)
    {
        this.#name=name
        this.#balance=balance
        this.address=address
    }

    withdraw(ammount)
    {
        if(this.#balance<ammount)
        {
            console.log("Insufficiant balance")
            return
        }

        this.#balance-=ammount
        console.log(`${ammount} withdow,balance is ${this.#balance}`)
    }

    deposit(ammount)
    {
        this.#balance+=ammount
         console.log(`${ammount} deposit,balance is ${this.#balance}`)
    }
    
    checkBalance()
    {
        console.log("balanace is", this.#balance)
    }
}

let account1=new Bank("gaurav",200,"New Delhi")
account1.deposit(300)
account1.deposit(500)
account1.withdraw(2000)
account1.withdraw(300)
account1.checkBalance()