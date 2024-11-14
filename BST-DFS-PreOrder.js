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
            this.root = newNode;
            return this
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
    preOrderTraverse(){
        let result = []
        function traverse(currNode){
            if(currNode === null){
                return;
            }
            if(currNode.value){
                result.push(currNode.value)   // visit the  node
            }
            if(currNode.left){
                traverse(currNode.left)   // Travrse the left
            }
            if(currNode.right){
                traverse(currNode.right)   // Traverse the right
            }
        }
        traverse(this.root)
        return result;
    }
 }

let myTree = new BST()
myTree.insert(74)
myTree.insert(53)
myTree.insert(81)
myTree.insert(36)
myTree.insert(59)
myTree.insert(79)
myTree.insert(86)
myTree.insert(22)
myTree.insert(44)
myTree.insert(58)
myTree.insert(66)
myTree.insert(84)
myTree.insert(89)
console.log(myTree)
console.log(myTree.preOrderTraverse())   
//[
//     74, 53, 36, 22, 44, 59,
//     58, 66, 81, 79, 86, 84,
//     89
//   ]