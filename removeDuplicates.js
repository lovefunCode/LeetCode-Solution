const removeDuplicates = function(nums){
    if(nums.length == 0){
        return []
    }
    let k = 1
    for(let i = 1; i < nums.length; i++){
        if(nums[i] != nums[i-1]){
            nums[k] = nums[i]
            k++
        }
    }
    return k
}
const nums = [0,0,1,1,1,2,2,3,3,4]
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
console.log(removeDuplicates(nums))