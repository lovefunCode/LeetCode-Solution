# Top 8 Data Structure Frequently Used
## 1.0. Strings

LeetCode Problems:
1. LeetCode 1382. Break a Palindrome https://leetcode.com/problems/break-a-palindrome/description/  </br>
You can find the code solution in [`breakPalindrome.js`](./breakPalindrome.js)
2. LeetCode 151. Reverse words in a string https://leetcode.com/problems/reverse-words-in-a-string/?envType=problem-list-v2&envId=string </br>
You can find the code solution in [`reverseWords.js`](./reverseWords.js)
3. LeetCode 28. Find the Index of the First Occurrence in a String
https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=problem-list-v2&envId=string</br>
You can find the code solution in [`firstOccurSubstring.js`](./firstOccurSubstring.js)

4. LeetCode 3. Longest Substring Without Repeating Characters. https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=string
You can find the code solution in [`reverseWords.js`](./reverseWords.js)

## 1.1. Array
array is a placed subsequentially in memory, with each element directly following the previous one.
![alt text](./image/array2.png)
### features
    1. Efficient Access
    2. Cache-Friendly
    3. Fixed Size
![alt text](./image/array.png)
 ```js
    const arr = [1,2,3,4,5]
    // push and pop Time Complexity O(1)
    arr.push(6)
    arr.pop()
    // unshift, shift Time Complexity O(n)
    arr.unshift(-1)
    arr.shift()
    console.log(arr)   // [1,2,3,4,5]
```
| Features | Array                                      | Set                          |
|----------|--------------------------------------------|------------------------------|
| Create   | let arr = [], arr2 = new Array()           | let set = new Set()          |
| value    | Any Types(primitives, object, duplicates ) | Unique values only, any type |
| Access   | arr[index]                                 | set.has(val)                 |
| Add      | arr.push(value)                            | set.add(val)                 |
| Update   | arr[index] = newValue                      | set.delete(value); set.add(newValue)               |
| Delete   | arr.splice(index, 1)                       | set.delete(val)              |
| Size     | arr.length                                 | set.size                     |
| Looping     | for, ForEach, for...of, for...in, map,etc                              | forEach, for...of  you cannot access elements by index                   |

## 2. Queue(First-In-First-Out),  Stack(First-In-Last-Out)
![alt text](./image/queue.png)

### Stack use scenarios
You can find the function definition in [`validParentheses.js`](./validParentheses.js).

## 3. Linked List
Unlike arrays, Linked List known as nodes
Linked List is a random placement in memory.
![alt text](./image/linkedList2.png)
![alt text](./image/linkedList3.png)
![alt text](./image/linkedList.png)

You can find the Code in [`LL-Create.js`](./LL-Create.js). </br>
You can find the Code in [`LL-Push.js`](./LL-Push.js).</br>
You can find the Code in [`LL-Pop.js`](./LL-Pop.js).</br>

## 4. HashMap(Key-Value Pairs, in JavaScript can use Object/Map)
![alt text](./image/hashMap.png)
 ```js
   const map = new Map([
    ['name', 'Flora'],
    ['age', 25],
    ['method', ()=>{console.log('I am a method')}]
   ])

    // loop map
    map.forEach((value, key)=>{
        console.log(`${key}----${value}`)
    })
    // name---Alice
    // age---25
    // method---()=>{console.log('I am a method')}

    for(let [key, value] of map){
        console.log(`${key}======${value}`)
    }
    // name=====Alice
    // age=====25
    // method=====()=>{console.log('I am a method')}

```
If you want to learn more about the Map data structure use in JavaScript scenarios, you can find the use case in [`timeLimitedCache.js`](./timeLimitedCache.js).

In JavsScript, 2 solutions to create HashMap data structure

| Feature            | Object                                                                                        | Map                                                                   |
|--------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Create             | let obj = {}, obj2 = new Object, obj3 = Object.create({name: 'flora'}), obj4 = {name:'flora'} | let map = new Map(), map2 = new Map([['name', 'Flora'], ['age', 25]]) |
| Key Types          | Strings and Symbols                                                                           | Any Values(Object, functions, primitive values)                       |
| Order of Keys      | No guaranteed order                                                                           | Maintains the order of keys based on insertion                        |
| Size               | NO buil-in Methods to get the size                                                            | map.size                                                              |
| Performance        | faster for lookups when using string keys                                                     | More efficient for frequent additions and removals                    |
| Add                | obj[key] = value                                                                              | map.set(key, value)                                                   |
| Access             | obj[key]                                                                                      | map.get(key)                                                          |
| Loop             | for...in, Object.keys(), Object.values(), Object.entries()                                                                                     | forEach(), for...of, map.keys(), map.values(), map.entires()                                                          |
| Delete             | delete obj[key]                                                                               | map.delete(key)                                                       |
| Checking existence | key in obj or obj.hasOwnProperty(key)                                                         | map.has(key)                                                          |
| Clone              | Object.assign() or ...                                                                        | new Map(existingMap)                                                  |
| Memory Usage       | Generally uses less memory for small sets                                                     | More memory-efficient for larger set                                  |

In JS, there is no built-in "HashTable" class, but JS object{} and the Map class often similar functionality to a HashTable
HashTable:
2 key features:  one-way, deterministic
collisions: seperate chain ; linear probing(open addressing)


## 5. Binary Tree
### 1. Binary Search Tree (left node is always smaller than the root, while the right node is always larger than root)
![alt text](./image/binaryTree.png)
![alt text](./image/BST.gif)
1. First create a tree 
![alt text](./image/binary-tree-creation-small.gif)
[`BST-Create.js`](./BST-Create.js).

2. Insert BST </br>
![alt text](./image/BST-Insertion.gif) </br>
[`BST-Insert.js`](./BST-Insert.js).

3. Contains node
[`BST-Contains.js`](./BST-Contains.js).

4. Find the minimum of the currentNode
[`BST-Findmin.js`](./BST-Findmin.js).

5. Find the maxmum of the currentNode
[`BST-FindMax.js`](./BST-FindMax.js).

You can find the whole BST code in 
[`BST-Whole.js`](./BST-Whole.js).

### Key Points for `isValidBST` Function
- Uses recursion to validate each node.
- Each node’s value should be within a specific range (`min` and `max` bounds).

You can find the function definition in [`validateBST.js`](./validateBinarySearchTree.js).

### 2. Maximum Depth of Binary Tree
![alt text](./image/maxDepthBinaryTree.png)
You can find the function definition in [`maxDepthBinaryTree.js`](./maxDepthBinaryTree.js).

### 3. Breadth-First-Search(BST)
You can find the function definition in [`BreadthFirstSearch.js`](./BreadthFirstSearch.js).


##  6. Trie/Prefix Tree   26 alphabets
![alt text](./image/trie.png)

##  7. Heap
![alt text](./image/heap.png)
## 8. Graph

![alt text](./image/graph.png)

graph has 2 different solutions to represent
You can find the BFS(Breadth-First-Search graph) function definition in [`bfsGraph.js`](./bfsGraph.js).

##  9. Wrap-Up
You also can check all the Common Data Structure Operations  table below
![alt text](./image/commonDSOperations.png)
