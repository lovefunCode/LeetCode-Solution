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
}

class LL2{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
}

const myLinkedList = new LL()
console.log(myLinkedList)  //LL { head: null, tail: null, length: 0 }

const myLinkedList2 = new LL2()
console.log(myLinkedList2)   
//LL2 {
//     head: Node { value: undefined, next: null },
//     tail: Node { value: undefined, next: null },
//     length: 1
//   }