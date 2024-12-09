function ListNode(val){
    this.val = val
    this.next = null
}

const hasCycle = function(head){
    if(!head || !head.next){
        return false
    }
    let slow = head
    let fast = head.next   // Exsure pointers start differently to enter the loop
    while(slow != fast){
        if(!fast || !fast.next){
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }
    return true
}

const myLL = new ListNode(1)
myLL.next = new ListNode(2)
myLL.next.next = new ListNode(3)
myLL.next.next.next = new ListNode(4)
// myLL.next.next.next.next = myLL.next
console.log(hasCycle(myLL))