// pop, push, unshift, shift
// concat, slice, splice, find, findIndex, every, some, 
// includes, join, reverse, flat, 
// Array.from
// Array.isArray

// Splice
//  array.splice(startIndex, deleteCount, item1, item2,....)
// 1 Removing elements
let colors = ["red", "green", "blue", "yellow"];
let removeColors = colors.splice(1, 2)
console.log(colors)  //["red", "yellow"]
console.log(removeColors)  //[ 'green', 'blue' ]

// 2. Insert elements
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 0, 'orange', 'pineapple')
console.log(fruits)  // [ 'apple', 'orange', 'pineapple', 'banana', 'cherry' ]
// Use case: find Median use binary search to find the left position to insert

// 3 Replacing elements
let animals = ["dog", "cat", "rabbit"];
animals.splice(1, 1, 'hamster', 'bird')
console.log(animals) // [ 'dog', 'hamster', 'bird', 'rabbit' ]

// 4. Removing all elements from a specific index
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2)
console.log(numbers)  //[ 1, 2 ]

//Slice  array.slice(startIndex, endIndex);
// 1. Extracting a portion of an array
const numbers2 = [1, 2, 3, 4, 5];
const sliceNumbers = numbers2.slice(1, 4)
console.log(sliceNumbers)  //[ 2, 3, 4 ]
console.log(numbers2);    //[ 1, 2, 3, 4, 5 ]

// 2. copy the entire array
const originalArray = [10, 20, 30];
const copyArray = originalArray.slice()
console.log(originalArray)     //[ 10, 20, 30 ]
console.log(copyArray);       // [10, 20, 30]
console.log(originalArray === copyArray)  // false
// copy array methods
const copyArray2 = [...originalArray]
console.log(copyArray2);       // [10, 20, 30]
console.log(originalArray === copyArray2)  // false

// join()

let arrFruit =  ["apple", "banana", "cherry"];
let result = arrFruit.join(',')
console.log(result)  //apple,banana,cherry

let result2 = arrFruit.join('|')
console.log(result2)  // apple|banana|cherry

// some()

// every()


// flat()
console.log([1, [2, [3]]].flat(2))   //[ 1, 2, 3 ]

console.log([1, [2, [3]]].flat(1))   //[ 1, 2, [ 3 ] ]

// find()
const numbers3 = [1, 3, 5, 8, 10, 12, 14];
console.log(numbers3.find((num, index)=>{
    // console.log(num, index)
    return index > 3 && num % 2 == 0     // 10
}))

// every()
console.log(numbers3.every((num, index)=>{
    // console.log(num, index)
    return num > 0     // true
    return  num % 2 == 0     // false
}))