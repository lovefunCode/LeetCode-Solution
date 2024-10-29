Top 8 data structure frequent used
## 1. Array
![alt text](./image/array.png)
 ```js
    const arr = [1,2,3,4,5]
    arr.push(6)
    arr.pop()
    arr.unshift(-1)
    arr.shift()
    console.log(arr)   // [1,2,3,4,5]
```

## 2. Queue(First-In-First-Out),  Stack(First-In-Last-Out)
![alt text](./image/queue.png)

### Stack use scenarios
You can find the function definition in [`vaildParentheses.js`](./vaildParentheses.js).

## 3. Linked List
![alt text](./image/linkedList.png)
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
| Feature            | Object                                    | Map                                                |
|--------------------|-------------------------------------------|----------------------------------------------------|
| Key Types          | Strings and Symbols                       | Any Values(Object, functions, primitive values)    |
| Order of Keys      | No guaranteed order                       | Maintains the order of keys based on insertion     |
| Size               | NO buil-in Methods to get the size        | map.size                                           |
| Performance        | faster for lookups when using string keys | More efficient for frequent additions and removals |
| Add                | obj[key] = value                          | map.set(key, value)                                |
| Access             | obj[key]                                  | map.get(key)                                       |
| Delete             | delete obj[key]                           | map.delete(key)                                    |
| Checking existence | key in obj or obj.hasOwnProperty(key)     | map.has(key)                                       |
| Clone              | Object.assign() or ...                    | new Map(existingMap)                               |
| Memory Usage       | Generally uses less memory for small sets | More memory-efficient for larger set               |

## 5. Binary Tree
### 1. Binary Search Tree (left node is always smaller than the root, while the right node is always larger than root)
![alt text](./image/binaryTree.png)

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
