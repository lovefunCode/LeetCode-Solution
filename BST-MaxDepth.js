class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
            if(newNode.value == temp.value) return undefined
            // insert right
            if(newNode.value > temp.value){
                if(temp.right == null){
                    temp.right = newNode
                    return
                }
                temp = temp.right
            }else{
                if(temp.left == null){
                    temp.left = newNode
                    return
                }
                temp = temp.left
            }
        }
    }
}


let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(52)
myTree.insert(82)
console.log(myTree)

//  2 solutions
// 1. Recursion
function maxDepth(root){
    // base case
    if(root == null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

console.log('maxDepthWithRecursion------', maxDepth(myTree.root))
// 2. BFS

function maxDepthBFS(root){
    if(!root){
        return 0
    }
    let queue = []
    let result = []
    let depth = 0
    queue.push(root)
    while(queue.length){
        let levelSize = queue.length
        for(let i = 0; i < levelSize; i++){
            let currNode = queue.shift()
            result.push(currNode.value)
            if(currNode.left){
                queue.push(currNode.left)
            }
            if(currNode.right){
                queue.push(currNode.right)
            }
        }
        depth++
    }
    return depth
}
console.log('maxDepthBFS------', maxDepthBFS(myTree.root))