class RandomizedSet{
    constructor(){
        this.set = new Set()
    }
    insert(val){
        if(!this.set.has(val)){
            this.set.add(val)
            return true
        }else{
            return false
        }
    }
    remove(val){
        if(this.set.has(val)){
            this.set.delete(val)
            return true
        }else{
            return false
        }
    }
    getRandom(){
        let size = this.set.size
        console.log(size)
        let random = Math.floor(Math.random() * (size - 0) ) 
        const arr = Array.from(this.set)
        console.log('-random--',arr[random])
        return arr[random]
    }
} 
const obj = new RandomizedSet()
const param_1 = obj.insert(1)
const param_2 = obj.insert(2)
const param_3 = obj.remove(1)
const param_4 = obj.getRandom()
console.log(param_1, param_2, param_3, param_4)