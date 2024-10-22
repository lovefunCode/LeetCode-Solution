var compose = (functions)=>{
    return function(x){
        for(let fn of functions.reverse()){
           x = fn(x)
        }
        return x
    }
}

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4))


var compose2 = (functions)=>{
    const fn = (accumulator, f)=>{
        return f(accumulator)
    }
    return function(x){
        return functions.reduceRight(fn, x)
    }
}


const fn2 = compose2([x => x + 1, x => 2 * x])
console.log(fn2(4))