let strs = ["eat","tea","tan","ate","nat","bat"]
strs.sort()
console.log(strs)  //[ 'ate', 'bat', 'eat', 'nat', 'tan', 'tea' ]

let numbers = [3, 20, 1]
numbers.sort()
console.log(numbers)   //[ 1, 20, 3 ]

numbers.sort((a, b)=> a-b)
console.log(numbers)   //[ 1, 3, 20 ]

numbers.sort((a, b)=> b-a)
console.log(numbers)   //[ 20, 3, 1 ]

let words = ["apple", "banana", "kiwi"];
words.sort((a,b)=> a.length-b.length)
console.log(words)  //[ 'kiwi', 'apple', 'banana' ]


// Stable Sort Example
let arr = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 25 },
  ];

arr.sort((a, b)=> a.age - b.age)
console.log(arr)
// [
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 25 },
//     { name: 'Alice', age: 30 }
//   ]

// Multi-Level storting
let arr2 = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 25 },
    { name: "Eve", age: 30 },
]
let arr3 = arr2.slice()
arr2.sort((a,b)=> a.age-b.age)
arr2.sort((a, b)=>a.name.localeCompare(b.name))
console.log('arr2---',arr2)
// arr2--- [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 25 },
//     { name: 'Eve', age: 30 }
//   ]

arr3.sort((a, b)=>a.name.localeCompare(b.name))
arr3.sort((a,b)=> a.age-b.age)
console.log('arr3---', arr3)
// arr3--- [
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 25 },
//     { name: 'Alice', age: 30 },
//     { name: 'Eve', age: 30 }
//   ]

// Array.prototype.sort() depends on the JS engine, but commonly, modern engines like 
//  Chrome and Node.js 
//  V8(chrome, node.js) : TimSort(hybrid of Merge Sort & Insertion Sort, optimised for
//  patically sorted data), insertion sort for small arrays

//  SpiderMonkey(FireFox):
//  Merge Sort : O(nlogn)

// Safari : WebKit
//  QuickSort