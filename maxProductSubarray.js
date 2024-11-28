const maxProductSubarray = function(nums){
    let preMax = nums[0]
    let preMin = nums[0]
    let res = nums[0]
    for(let i = 1; i < nums.length; i++){
        let currMax = Math.max(nums[i], preMax*nums[i], preMin*nums[i])
        let currMin = Math.min(nums[i], nums[i] * preMax, preMin* nums[i])
        preMax = currMax
        preMin = currMin
        res = Math.max(currMax, res)
    }
    return res
}

const nums = [2,3,-2,4]
console.log(maxProductSubarray(nums))