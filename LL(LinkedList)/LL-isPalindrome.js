function ListNode(val,next=null){
    this.val = (val == undefined ? 0: val)
    this.next = next
}
const isPalindrom = function(head){
    let fast = head
    let slow = head
    while(fast && fast.next){
        slow = slow.next
        fast =  fast.next.next
    }
    fast = head
    console.log('slow----slow',slow, )
   
    slow = reverse(slow)
    console.log("----reverse slow",slow)

    console.log('fast---',fast)

    while(slow){
        if(slow.val != fast.val){
            return false
        }
        slow = slow.next
        fast = fast.next
    }
    return true

    function reverse(node){
        if(!node){
            return null
        }
        let temp = node
        let prev = null
        while(temp){
            let ref = temp.next
            temp.next = prev
            prev = temp
            temp = ref
        }
        return prev
    }
   
}

const myLL = new ListNode(1)
myLL.next = new ListNode(2)
myLL.next.next = new ListNode(3)
myLL.next.next.next = new ListNode(4)
console.log(isPalindrom(myLL))