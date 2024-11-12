// 1. higher-order function
// is a function that either take one or more functions as arguments,
// return a function as a result or both.  
// This feature allows functions to be more flexible and modular

// 2.first-class function(first class citizens)
// meaning functions can 
//  1.assigned to variables
//  2. passed as arguments to other functions
//  3. return from other functions
//   4. storeed in data structures (like arrays/ objects)

// 3.arrow function
const arrow = ()=>{
    console.log('------', this)
}
const obj = {arrow}
obj.arrow()


// 4.IIFE(immedidately invoked function expression)
// (function iife(a,b){
//     console.log(a+b)
//     return a+b
// })(3, 5)

// 5.

//  6 function composition

const compose = function(functions){
    return function(x){
        let fun = functions.reverse();
        // for(let i = 0; i < fun.length; i++){
        //    x = fun[i](x)
        // }
        for(let each of fun){
            x = each(x)
        }
        return x
    }
}
const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4))

// 7. Allow one function call
const once = function(fn){
    let onceFlag = false
    return function(...args){
        if(!onceFlag){
            onceFlag = true
            return fn.apply(this, args)
        }
    }
}
let fn2 = (a,b,c) => (a + b + c)
let onceFn = once(fn2)
console.log(onceFn(1, 2, 3))    // 6
console.log(onceFn(4, 5, 6))     // undefined