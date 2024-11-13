class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(val) {
        const newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let temp = this.root
        while (true) {
            if (newNode.value === temp.value) return undefined
            if (newNode.value < temp.value) {
                if (!temp.left) {
                    temp.left = newNode
                    return
                }
                temp = temp.left
            } else {
                if (!temp.right) {
                    temp.right = newNode
                    return
                }
                temp = temp.right
            }
        }
    }

    contains(val) {
        if (this.root === null) return false
        let temp = this.root
        while (temp) {
            if (val > temp.value) {
                temp = temp.right
            } else if (val < temp.value) {
                temp = temp.left
            } else {
                return true
            }
        }
        return false
    }

    findMinimum(currNode) {
        if (this.root == null) return -1
        let temp = currNode
        while (temp.left) {
            temp = temp.left
        }
        return  temp.value
    }
    findMax(currNode) {
        if (this.root == null) return -1
        let temp = currNode
        while (temp.right) {
            temp = temp.right
        }
        return  temp.value
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
console.log(myTree.findMinimum(myTree.root.right))
console.log(myTree.findMax(myTree.root.left))



