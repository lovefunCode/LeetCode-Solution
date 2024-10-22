// function ArrayWrapper(nums){
//     this.nums = nums
// }
// ArrayWrapper.prototype.valueOf = function (){
//     return this.nums.reduce((num, accumulator)=>{
//         return num + accumulator
//     }, 0)
// }

// ArrayWrapper.prototype.string = function(){
//     return `[${this.nums}]`
// }

//class statement
class ArrayWrapper {
    constructor(nums){
        this.nums = nums
    }
    valueOf(){
        return this.nums.reduce((num, accumulator)=>{
            return num+ accumulator
        }, 0)
    }
    string(){
        return `[${this.nums}]`
    }

}

const obj1 = new ArrayWrapper([1,2,4,6])
const obj2 = new ArrayWrapper([3,5,7,9])

const obj3 = new ArrayWrapper([])
const obj4 = new ArrayWrapper([])

console.log(obj1.valueOf()+ obj2.valueOf())

console.log(obj1.string()+ obj2.string())

console.log(obj3.valueOf()+ obj4.valueOf())
console.log(obj3.string()+ obj4.string())