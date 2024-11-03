# Recursion and Factorial

## Recursion: a technique in which a function calls iteself in order to solve a larger problem by breaking it down into smaller, more manageable sub-problems
Use case: traversing tres, solving puzzles like the Tower of Hanio, and calculating factorial.
### key point:  
    1. Base case to stop the recursive calls and prevent infinite loops
    2. Recursive case 

## Factorial: mathematical operation represented by n!
Factorials are a common example used to illustrate recursion 
Base Case 0! = 1
Recurrence Relation: n * factorial(n-1)
 ```js
  function factorial(n){
    if(n == 0) return 1
    return n* factorial(n-1)
  }
  console.log(factorial(5))    // 120
    
```

You can find the recursion use case in [`fibonacci.js`](./fibonacci.js).

You can find the recursion use case in [`pascalTriangle.js`](./pascalTriangle.js).

You can find the recursion use case in [`objDiff.js`](./objDiff.js).

You can find the recursion use case in [`validateBinarySearchTree.js`](./validateBinarySearchTree.js).

You can find the recursion use case in [`curry.js`](./curry.js).
