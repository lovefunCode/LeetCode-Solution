# FP(Functional Programming) 
FP in JS is a programming paradigm that treats computation as the evulation of mathematical functions and avoids changing state or mutable data.
## 1. Declarative: emphasises what to do, not how to do it. This contrasts with imperative programming, which involve details step-by-step instructions.

## 2. Pure Function: no side effect(do not alter global state or modify their input parameters)
 ```js
 // pure function
    function add(a, b){
        return a+b   // no side effect
    }
    // map, reduce, filter 
    const arr = [1,2,3,4]
    const tripleArr = arr.map(item=>{
        return item * 3
    })
    console.log(tripleArr)   // [3, 6, 9, 12]

    const evenArr = arr.filter(item=>{
        return item % 2 == 0    
    })
    console.log(evenArr)  //[2, 4]

    const sum = arr.reduce((accumulator, num)=>{
        return accumulator+ num
    }, 0)
    console.log(sum)  // 10

    // concat
     const arr = [1,2,3,4]
    const arr2 = [5,6]
    const combinedArr = arr.concat(arr2)
    console.log(combinedArr)   // [1, 2, 3, 4, 5, 6]
```

## 3. First-Class Functions: 
    1. Assigned to variables
```js
// Function Expression
        const greet = function(name){
            return `Hello, ${name}`
        }
        const greet2 = (name)=>{
            return `Hello, ${name}`
        }
```
    2.Passed as arguments to other functions
```js
        function sayHello(name){
            if(!name){
                return 'Hello'
            }
            return name.length ? `Hello, ${String(name)}` : 'Hello'
        }
        function executeFun(func){
            console.log(`${sayHello()}`)
        }
        executeFun(sayHello)  // 'Hello'

        function executeFunWithArgs(func, ...args){
            console.log(`${sayHello.apply(this, args)}`)
        }

        executeFunWithArgs(sayHello, 'Alice')    //Hello,Alice

        executeFunWithArgs(sayHello, ['Alice', 'Flora'])  //Hello, Alice,Flora
```
    3. Returned from other functions
```js
// Closure
        function createMultiplier(factor){
            return function(num){
                return factor * num
            }
        }
        const double = createMultiplier(2)
        console.log(double(5))   // 10

        const triple = createMultiplier(3)
        console.log(triple(5))   // 15

// upgrade version
        function createMultiplier(factor){
            return function(...args){
                const sum = args.reduce((accumulator, num) => accumulator * num, 1)
                return factor * sum
            }
        }
        const double = createMultiplier(2)
        console.log(double(5, 10))   // 100

        const triple = createMultiplier(3)
        console.log(triple(5, 10, 15))  // 2250
```

## 4.High-Order Function
Functions that take other functions as arguments or return functions as their result. 
1. callback/map/ filter/ reduce 
2. Clousre


## 5.Function Composition
This process of combining simple functions to build more complex one.
```js
// Function Composition
        const compose = (functions) =>{
            return function(x){
                for(let fn of functions.reverse()){
                    x = fn(x)
                }
                return x
            }
        }
        
        const fn = compose([x=>x+1, x=>2 * x])
        console.log(fn(4))  // 9
```

You can find the more in [`functionComposition.js`](./functionComposition.js).

## 6.Immutability
```js
// Function Composition
       const originalArr = [1,2,3]
       function addNumberToArr(array, num){
            return [...array, num]
       }
       const newArray = addNumberToArr(originalArr, 4)
       console.log('Original Array:', originalArray); // [1, 2, 3]
       console.log('New Array:', newArray); // [1, 2, 3, 4]
```
Immutability: by not changing the originalArr, maintain the state, making the code more predictable, easier to debug and reducing side effects.

# To Wrap-up Functional Programming Benefits:  </br>
    1. Predictable and Testable Code: Pure function and immutabiity help reduce unexpected bugs
    2. Reusability: FP emphasizes breaking problems into smaller functions, which can be reused across the codebase
    3. Parallel Execution: Pure function have no shared data, making them suitable for concurrent processing

In JavaScript, while FP can be applied directly, some libraries like Lodash and Ramda offer extended functionality to support functional paradigms more efficiently.