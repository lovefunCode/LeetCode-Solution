// BFS(Breadth-First-Search)
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
            return
        }
        let temp = this.root
        while(true){
            if(temp.value == newNode.value) return undefined
            // insert right
            if(newNode.value > temp.value){
                if(temp.right === null){
                    temp.right = newNode
                    return
                }
                temp = temp.right
            }else{
                if(temp.left === null){
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

function bfs(root){
    let queue = []
    let result = []
    queue.push(root)
    while(queue.length){
        let currNode = queue.shift()
        result.push(currNode.value)
        if(currNode.left){
            queue.push(currNode.left)
        }
        if(currNode.right){
            queue.push(currNode.right)
        }
    }
    return result
}

console.log(bfs(myTree.root))