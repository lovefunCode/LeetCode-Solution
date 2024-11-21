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
        const newNode =  new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    get(index){
        if(index < 0 || index > this.length){
            return undefined
        }
        let temp = this.head
        for(let i = 0; i < index; i++){
            temp = temp.next
        }
        return temp
    }
}
const myLinkedList = new LL()
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
console.log(myLinkedList.get(2))