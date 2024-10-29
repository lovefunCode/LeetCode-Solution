
//       47
//     /    \
//   21      76
//  /  \     /  \
// 18  27   52  82

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
        if(this.root === null){
            this.root = newNode
        }else{
            this._insertNode(this.root, newNode)
        }
    }
    _insertNode(node, newNode){
        if(newNode.value < node.value){
            // Go to the left subtree
            if(node.left === null){
                node.left = newNode
            }else{
                this._insertNode(node.left, newNode)
            }
            
        }else{
            // Go to the right subtree
            if(node.right === null){
                node.right = newNode
            }else{
                this._insertNode(node.right, newNode)
            }
        }
    }
}


function breadthFirstSearch(root){
    let queue = []
    let result = []
    if(root){
        queue.push(root)
    }
    while(queue.length){
        currNode = queue.shift()
        result.push(currNode.value);
        if(currNode.left) queue.push(currNode.left)
        if(currNode.right) queue.push(currNode.right)
    }
    return result
}

const bst = new BST();
bst.insert(47)
bst.insert(21)
bst.insert(27)
bst.insert(76)
bst.insert(18)
bst.insert(52)
bst.insert(82)
// console.log(bst)
console.log(breadthFirstSearch(bst.root))