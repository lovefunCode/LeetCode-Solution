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
    findMax(currNode){
        let temp = currNode
        while(temp.right){
            temp = temp.right
        }
        return temp.value
    }
}

const myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)
console.log(myTree)
console.log(myTree.findMax(myTree.root))