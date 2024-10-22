function checkType(obj){
    // null ->  Object   edge case
    if(obj == null){
        return `${obj}`
    }
    const toString = Object.prototype.toString;
     // typeof 'object' have Array | Object | Map | Set ect
    if(typeof obj == 'object'){
        let res = toString.call(obj).slice(8, -1)
        return res
    }else{
        // typeof can check the  primitive types
        return typeof obj
    }
}

console.log(checkType([1,2,4]))        
let set = new Set([1,2])
console.log(checkType(set))
let map = new Map([['1', 'one'], ['2', 'two']])
console.log("========", typeof map)
console.log(checkType(map))
console.log(checkType(undefined))
console.log(checkType(()=>{}))
console.log(checkType(null))
console.log(checkType(1))
console.log(checkType('1'))
console.log(checkType(false))
console.log(checkType([]))
console.log(checkType({}))
