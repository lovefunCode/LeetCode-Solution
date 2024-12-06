class MinStack{
    constructor(){
        this.stack = []
    }
    push(val){
        this.stack.push(val)
    }
    pop(){
        this.stack.pop()
    }
    top(){
        if(this.stack.length){
            return this.stack[this.stack.length-1]
        }
        
    }
    getMin(){
        if(!this.stack.length){
            return null
        }
        if(this.stack.length == 1){
            return this.stack[0]
        }
        let min = this.stack[0]
        for(let i = 1; i < this.stack.length; i++){
            min = Math.min(min, this.stack[i])
        }
        return min
    }
}
var obj = new MinStack()
obj.push(-2);
obj.push(0);
obj.push(-3);

console.log(  obj.getMin())   // -3
obj.pop()
console.log(  obj.top())
console.log(  obj.getMin())