const curry = function(fn){
    let nums = []
    // return function curried(...args){
    //     nums = [...nums, ...args]
    //     if(fn.length === nums.length){
    //         const res = fn.apply(this, nums)
    //         nums = []
    //         return res
    //     }else{
    //         return curried
    //     }
    // }

    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args)
        }else{
            return function(...newArgs){
                return curried(...args, ...newArgs)
            }
        }
    }
}

const curry2 = (fn)=>{
    let nums = []
    return function curried(...args){
        nums = [...nums, ...args]
        if(nums.length === fn.length){
            const res =fn.apply(this, nums)
            nums = []
            return res
        }else{
            return curried
        }
    }
}

function sum(a, b, c){
    return a+b+c
}

const csum = curry2(sum)
console.log(csum(1))
console.log(csum(2))
console.log(csum(3))
