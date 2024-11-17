let arr = ["apple", "banana", "cherry"]

// convert array to string
// solution1
let str1 = arr.toString()
console.log(str1 )  //apple,banana,cherry

// solution2
let str2 = arr.join(',')
console.log(str2)  //apple,banana,cherry


let str = 'hello, world, javascript'
// convert string to array
// solution1
let arr1 = str.split(', ')
console.log(arr1)  // [ 'hello', 'world', 'javascript' ]

// solution2
let arr2 = [...str]
console.log(arr2)   
// [
//     'h', 'e', 'l', 'l', 'o',
//     ',', ' ', 'w', 'o', 'r',
//     'l', 'd', ',', ' ', 'j',
//     'a', 'v', 'a', 's', 'c',
//     'r', 'i', 'p', 't'
//   ]



