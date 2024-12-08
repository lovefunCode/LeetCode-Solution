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
    }
    reverse(){
        if(!this.head){
            return undefined
        }
        let temp = this.head
        let node = null
        while(temp.next){
            temp.next = temp
            node = temp
            
        }
        return temp
    }
}

const myLinkedList = new LL()
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
console.log(myLinkedList.reverse())