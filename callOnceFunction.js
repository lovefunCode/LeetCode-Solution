const callOnceFunction = (fn)=>{
    let callOnce = false;
    return function(...args){
        if(!callOnce){
            callOnce = true
            return fn.apply(this, args)
        }
    }
}

let fn = (a,b,c) => (a + b + c)
let onceFn = callOnceFunction(fn)
console.log(onceFn(1,2,3))
console.log(onceFn(1,2,6))