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
// const nums = [2,7,11,15], target = 9
const nums = [3,2,4], target = 6
console.log(twoSum(nums, target))