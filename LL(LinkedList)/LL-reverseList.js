function LinkedList(val, next){
    this.val = (val == undefined ? 0: val)
    this.next = (next == undefined? null: next)
}

const reverseList = function(head){
    let pre = null
    while(head){
        let nextNode = head.next
        head.next = pre
        pre = head
        head = nextNode
    }
    return pre
}

// Manually create the linked list: [1, 2, 3, 4, 5]
const head = new LinkedList(1)
head.next = new LinkedList(2)
head.next.next = new LinkedList(3)
head.next.next.next = new LinkedList(4)
head.next.next.next.next = new LinkedList(5)
console.log(reverseList(head))