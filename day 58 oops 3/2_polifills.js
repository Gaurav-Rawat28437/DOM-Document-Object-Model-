// Polyfill is a piece of code (usually JavaScript) that adds support for new features in old browsers.
// It "fills" the gap when a browser does not support a modern JS feature.
// It is only for recreating existing built-in methods if they are missing.
// Creating own custom method → Not a polyfill
// Recreating missing built-in method → Polyfill
let arr1=[1,2,3,4,5]

// normal methods
arr1.push(6)
console.log(arr1)


// here create own method or change any method

// we cannot use arrow functionand where er use this keyword

let arr=[10,11,12,13,14,15]
Array.prototype.myOwnMethods=function(indx,n)
{
    return this.slice(0,indx).concat(n).concat(this.slice(indx,this.length))
}
console.log(arr)
console.log(arr.myOwnMethods(2,5))
