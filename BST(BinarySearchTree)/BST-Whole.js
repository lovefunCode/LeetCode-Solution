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
            if(newNode.value === temp.value) return undefined
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

    contains(value){
        if(this.root == null) return undefined
        let temp = this.root
        while(temp){
            if(temp.value == value){
                return true
            }else if(temp.value > value){
                temp = temp.left
            }else{
                temp = temp.right
            }
        }
        return false
    }

    findMin(currNode){
        if(this.root == null){
            return -1
        }
        let temp = currNode
        while(temp.left){
            temp = temp.left
        }
        return temp.value
    }

    findMax(currNode){
        if(this.root == null){
            return -1
        }
        let temp = currNode
        while(temp.right){
            temp = temp.right
        }
        return temp.value
    }
    deleteNode(root, val){
        if(root == null){
            return root
        }
        if(val > root.val){
            this.deleteNode(root.right, val)
        }else if(val < root.val){
            this.deleteNode(root.left, val)
        }else{
            // No child
            if(root.left == null && root.rigth == null){
                return null
            }
            // Only left child
            if(root.right == null){
                return root.left
            }
            // Only right child
            if(root.left == null){
                return root.right
            }
            // Both left and right children exist
            let temp = root.left
            while(temp.right){
                temp = temp.right
            }
            root.value = temp.val
            root.left = this.deleteNode(root.left, temp.val)
            return root
        }
    }

    bfs(){
        if(this.root == null){
            return -1
        }
        let queue = [this.root]
        let result = []
        let depth = 0
        while(queue.length){
            for(let i = 0; i < queue.length; i++){
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
        return {
            depth,
            result
        }
    }

    depthPreOrder(){
        if(this.root == null){
            return -1
        }
        let result = []
        function traverse(currNode){
            if(currNode.value){
                result.push(currNode.value)
            }
            if(currNode.left){
                traverse(currNode.left)
            }
            if(currNode.right){
                traverse(currNode.right)
            }
        }
        traverse(this.root)
        return result
    }

    depthInOrder(){
        if(this.root == null){
            return -1
        }
        let result = []
        function traverse(currNode){
            if(currNode.left){
                traverse(currNode.left)
            }
            if(currNode.value){
                result.push(currNode.value)
            }
            if(currNode.right){
                traverse(currNode.right)
            }
        }
        traverse(this.root)
        return result
    }

    depthPostOrder(){
        if(this.root == null){
            return -1
        }
        let result = []
        function traverse(currNode){
            if(currNode.left){
                traverse(currNode.left)
            }
            if(currNode.right){
                traverse(currNode.right)
            }
            if(currNode.value){
                result.push(currNode.value)
            }
        }
        traverse(this.root)
        return result
    }


}

const myTree = new BST()
myTree.insert(47)
myTree.insert(76)
myTree.insert(21)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)
console.log(myTree)
console.log(myTree.contains(76))
console.log(myTree.findMin(myTree.root.right))
console.log(myTree.findMax(myTree.root.left))

console.log(myTree.bfs())
console.log(myTree.depthPreOrder())