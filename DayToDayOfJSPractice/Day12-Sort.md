# Array.prototype.sort()
In JS, the sort() method is used to sort the element of an array. The method modifies
the original array in place and returns it after sorting. By default, the sort()
method sort elements as strings in ascending order.

## Basic Syntax  array.sort([compareFunction])

## Default Behavior
Without compareFunction sort converts elements to strings and sort them lexicographically(Unicode order)
```js
    let numbers = [3, 20, 1]
    numbers.sort()
    console.log(numbers)   //[ 1, 20, 3 ]
```
When compare numbers if we don't define the compareFunction, numbers are converted to strings('3', '20', '1') and sorted lexicographically

## sorting numbers, compareFunction must be provided
```js
    numbers.sort((a, b)=> a-b)
    console.log(numbers)   //[ 1, 3, 20 ]

    numbers.sort((a, b)=> b-a)
    console.log(numbers)   //[ 20, 3, 1 ]

    let words = ["apple", "banana", "kiwi"];
    words.sort((a,b)=> a.length-b.length)
    console.log(words)  //[ 'kiwi', 'apple', 'banana' ]
```

## Stability of sort()
1. Modern JS engines(Google V8, used in Chrome and Node.js) implement a stable sorting algorithm, such as Timsort.
2. Stable sort: when 2 elements are equal according to the sorting logic, the original order is preserved.
```js
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
```
Bob and Charlie have the same age (25), but their relative order is preserved because the sort is stable.

## Multi-Level storting:
the last sort's order will be preserved.

```js
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

```

## Sorting Performance and Stability
1. Stable: preserve order for equal elements
2. Efficient: </br>
    O(nlogn) for average and worst cases <br>
    O(n) for nearly sorted data

## TimSort: combining the merge sort and insertion sort algorithms to maximize efficiency
