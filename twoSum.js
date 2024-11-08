// Map
const twoSum = function(nums, target){
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        const left = target - nums[i]
        if(map.has(left)){
            return [map.get(left), i]
        }else{
            map.set(nums[i], i)
        }
    }
}

// Two-Pointer need ordered array
const twoSumWithTwoPointer = function(nums, target){
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        console.log(nums[left] + nums[right])
        if(nums[left] + nums[right] == target){
            return [left, right]
        }else if(nums[left] + nums[right] > target){
            right--
        }else{
            left++
        }
    }
    return -1
}


// const nums = [2,7,11,15], target = 9
const nums = [2,3,4], target = 6
console.log(twoSum(nums, target))
console.log(twoSumWithTwoPointer(nums, target))