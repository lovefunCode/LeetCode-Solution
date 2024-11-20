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
            this.head.next = this.head
            this.head = newNode
        }
        this.length++
    }
    shift(){
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if(this.length == 0){
            this.head = null
            this.tail =  null
        }
        return temp
    }
}

const myLinkedList = new LL()
myLinkedList.unshift(5)
myLinkedList.unshift(4)
myLinkedList.unshift(3)

console.log(myLinkedList.shift())
console.log(myLinkedList)