// Simple Version
const closure = function(){
    return function(...args){
        console.log(`'hello, world'---${args}`)
    }
}
const fun = closure()
fun('1', '2', '3') // 'hello, world'---1,2,3

// Upgrade Version  
const closure2 = function(fn){
    return function(...args){
        return fn(...args)
    }
}

const fun2 = closure2(twoSum)
function twoSum(a, b){
    return a+b
}
console.log(fun2(1, 2))    //3

// Further Version
const closure3 = function(fn){
    let cache = {}
    let count = 0
    return function(...args){
        let key = String(...args)
        if(!cache[key]){
            count++
            cache[key] = fn(...args)
        }
        console.log('count', count)
        return cache[key] 
    }
}
const fun3 = closure3(twoSum)   
// count: 1 
console.log(fun3(1, 2))    //3