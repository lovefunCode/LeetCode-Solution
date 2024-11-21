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
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    get(index){
        if(index > this.length || index < 0){
            return undefined
        }
        let temp = this.head
        for(let i = 0; i < index; i++){
            temp = temp.next
        }
        return temp
    }
    remove(index){
        if(index > this.lenght || index < 0){
            return undefined
        }
        const before = this.get(index-1)
        let temp = before.next
        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
}

const myLinkedList = new LL()
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
console.log(myLinkedList.remove(1))