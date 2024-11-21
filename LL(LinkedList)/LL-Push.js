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
        return this
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}

const myLinkedList = new LL()
myLinkedList.push(5)
myLinkedList.push(8)
console.log(myLinkedList)