const fibGenerator = function* (){
    let n1 = 0, n2 = 1
    while(true){
        yield n1;
        [n1, n2] = [n2, n1+n2]
    }
}

const gen = fibGenerator();
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)


//use Memoization & Closure & Recursion to slove the problem
// function fibonacci(){
//     let memo = {}
//     let count = 0
//     return function fib(num){
//         if(memo[num]) return memo[num]
//         if(num <= 1) return 1
//         memo[num] = fib(num-1) + fib(num-2)
//         count++
//         console.log('Function call count:', count);
//         return memo[num]
//     }
// }
// const fib = fibonacci()
// // console.log("11111",fib(1))
// console.log("22222", fib(2))
// console.log("22222", fib(2))

// use global variable to count the funciton call
// let count = 0
// function fibonacci2(num, memo={}){
//     if(memo[num]) return memo[num]
//     if(num <=1) return 1
//     memo[num] = fibonacci2(num-1) + fibonacci2(num-2)
//     count++
//     return memo[num]
// }
// count = 0
// console.log(fibonacci2(2))
// console.log('Function call count:', count);

// // Every time has to reset the global variable
// count = 0
// console.log(fibonacci2(3))
// console.log('Function call count:', count);
// count = 0
// console.log(fibonacci2(4))
// console.log('Function call count:', count);
// count = 0
// console.log(fibonacci2(3))
// console.log('Function call count:', count);


function fobonacci(){
    let memo = {}
    let count = 0
    return function fib(num){
        if(memo[num]) return memo[num]
        if(num <= 1) {
            return 1
        }
        memo[num] = fib(num-1)+ fib(num-2)
        count++
        console.log('Function call count:', count);
        return memo[num]
    }
}
//Initialize the closure and get the fabonacci function
const fib = fobonacci()
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(3))


function fibTest(){
    let res = {}
    return function fib(n){
        if(n <= 1){
        return n
    }
        if(res[n]){
            return res[n]
        }
        res[n] = fib(n-1)+ fib(n-2)
        return res[n]
    }
}

function fibDP(n){
    let res = []
    res[0] = 1
    res[1] = 1
    for(let i = 2; i < n; i++){
        res[i] = res[i-1]+ res[i-2] 
    }
    return res[n-1]
}

console.log("==========")

console.log(fibTest()(1))
console.log(fibTest()(2))
console.log(fibTest()(3))
console.log(fibTest()(4))
console.log(fibTest()(5))

console.log("**********")
console.log(fibDP(1))
console.log(fibDP(2))
console.log(fibDP(3))
console.log(fibDP(4))
console.log(fibDP(5))