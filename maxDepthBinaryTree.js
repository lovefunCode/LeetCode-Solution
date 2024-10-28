function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function bulidTree(arr){
    console.log('arr.length', arr.length)
    if(!arr.length) return null;
    const root = new TreeNode(arr[0])
    const queue = [root]
    let i =1
    while(i < arr.length){
        const current = queue.shift();
        if(arr[i] !== null){
            current.left =  new TreeNode(arr[i])
            queue.push(current.left)
        }
        i++
        if(arr[i] !== null && i < arr.length){
            current.right = new TreeNode(arr[i])
            queue.push(current.right)
        }
        i++
    }
    console.log(root)
    return root;
}

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
const root = [3,9,20,null,null,15,7]
const tree = bulidTree(root)
console.log(bulidTree(root))


var maxDepth = function (root) {
    // //    1.   recursion: 
    // // Base case
    // if(root === null) return 0
    // // recurrent relation
    // return 1 +  Math.max(maxDepth(root.left), maxDepth(root.right))

    // 2. BFS(Breadth-First-Search) Queue
    if(root === null) return 0
    let depth = 0;
    let queue = [root]
    while(queue.length){
        let len = queue.length
        for(let i = 0; i < len; i++){
            let curr = queue.shift();
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        depth++
    }
    return depth
}

console.log(maxDepth(tree))