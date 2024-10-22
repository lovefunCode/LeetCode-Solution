function memoize(fn){
    let cache = {}
    return function(...args){
        let key = JSON.stringify(args)
        // if(cache.hasOwnProperty(key)){
        if(key in cache){
           return cache[key] 
        }
        cache[key] = fn.apply(this, args)
        return cache[key]
    }
}

 
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(2, 3) )// 5
console.log(memoizedFn(2, 3) ) // 5
console.log(callCount) // 1 


 

