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
    get(index){
        if(index > this.length || index <0){
            return undefined
        }
        let temp = this.head
        for(let i = 0; i < index; i++){
            temp = temp.next
        }
        return temp
    }
    set(index, value){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
    }
}

const myLinkedList = new LL()
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
console.log(myLinkedList)
console.log(myLinkedList.get(1))
console.log(myLinkedList.set(1, 'a'))

console.log(myLinkedList)