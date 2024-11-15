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

    InOrder(){
        if(!this.root){
            return -1
        }
        let result = []
        function traverse(currNode){
            if(currNode.left){
                traverse(currNode.left)
            }
            result.push(currNode.value)
            if(currNode.right){
                traverse(currNode.right)
            }
        }
        traverse(this.root)
        return result
    }
}

let myTree = new BST()
// myTree.insert(47)
// myTree.insert(76)
// myTree.insert(21)
// myTree.insert(18)
// myTree.insert(27)
// myTree.insert(52)
// myTree.insert(82)

myTree.insert(40)
myTree.insert(4)
myTree.insert(45)
myTree.insert(34)
myTree.insert(55)
myTree.insert(14)
myTree.insert(48)
myTree.insert(13)
myTree.insert(15)
myTree.insert(47)
myTree.insert(49)
console.log(myTree)
console.log(myTree.InOrder()) 