class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LL{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }
}

const myLinkedList = new LL()
myLinkedList.unshift(3)
myLinkedList.unshift(2)
myLinkedList.unshift(1)
console.log(myLinkedList)
