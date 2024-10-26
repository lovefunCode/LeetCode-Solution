Top 8 data structure frequent used
1. Array
![alt text](./image/array.png)
 ```js
    const arr = [1,2,3,4,5]
    arr.push(6)
    arr.pop()
    arr.unshift(-1)
    arr.shift()
    console.log(arr)   // [1,2,3,4,5]
```

2. Queue(First-In-First-Out),  Stack(First-In-Last-Out)
![alt text](./image/queue.png)

3. Linked List
![alt text](./image/linkedList.png)
4. HashMap(Key-Value Pairs, in JavaScript can use Object/Map)
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

5. Binary Tree(left node is always smaller than the root, while the right node is always larger than root)
![alt text](./image/binaryTree.png)

6. Trie/Prefix Tree   26 alphabets
![alt text](./image/trie.png)

7. Heap
![alt text](./image/heap.png)
8. Graph

![alt text](./image/graph.png)