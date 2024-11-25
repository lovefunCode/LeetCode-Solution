const missingNumber = function(nums){
    let set = new Set()
    for(let i = 0; i <= nums.length; i++){
        set.add(i)
    }
    for(let i = 0; i <nums.length; i++){
        set.delete(nums[i])
    }
    return [...set][0] 
}

const missingNumber2 = function(nums){
    let set = new Set(nums)
    for(let i = 0; i <nums.length; i++){
        if(!set.has(i)){
            return i
        }
    }
    return -1
}

const missingNumber3 = function(nums){
    let xor = nums.length
    for(let i = 0; i < nums.length; i++){
        xor = xor ^ i ^ nums[i]
    }
    return xor
}

const nums=[9,6,4,2,3,5,7,0,1]
console.log(missingNumber3(nums))