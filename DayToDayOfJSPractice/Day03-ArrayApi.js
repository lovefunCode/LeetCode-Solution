//higher-order function
// Pure function, higher-order function, 
// map, filter, reduce, sometimes forEach can 

//side effect,
//  change the original array
// sort, forEach
const nums = [3, 4, 5, 7, 8, 0]
nums.sort((a, b) => a -b)
console.log(nums)    //[ 0, 3, 4, 5, 7, 8 ]

let newNums =[]
const returnResult = nums.forEach((val, index)=>{
    if(index % 2 == 0){
        newNums.push(val*2)  //This is a side effect; it modifies the external variable `newNums`
        return val * 2
    }
    return newNums.push(val)
})

console.log(nums)   //[ 0, 3, 4, 5, 7, 8 ]
// Note: forEach don't return a new array, return undefined
console.log('newNums----',newNums)  // newNums---- [ 0, 3, 8, 5, 14, 8 ]
console.log('returnResult----', returnResult)   //returnResult---- undefined

nums.forEach((val, index)=>{
    if(index % 2 == 0){
        nums[index] = nums[index] * 2     //This is a side effect; it modifies the original nums
    }
    
})
// Note: use foreach, if use the index to change nums, it will cause side effect
console.log(nums)   //[ 0, 3, 8, 5, 14, 8 ]



