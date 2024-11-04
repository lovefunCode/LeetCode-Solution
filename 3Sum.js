function threeSumWithOrderArray(nums, target){
    nums.sort((a, b)=> a-b)
    let right = nums.length-1;
    let result = []
    for(let i = 0; i < nums.length; i++){
        let leftPlus1 = i+1;
        if(nums[i] == nums[i-1]) continue
        while(leftPlus1 < right){
            let sum = nums[i] + nums[leftPlus1] + nums[right]
            if( sum == target){
                result.push([nums[i], nums[leftPlus1], nums[right]])
                while(nums[leftPlus1+1] == nums[leftPlus1]) continue
                while(nums[right] == nums[right-1]) continue
                leftPlus1++
                right--
            }else if(sum > target){
                right--
            }else{
                leftPlus1++
            }
        }
    }
    return result;
}
const nums = [-1,0,1,2,-1,-4], target = 0
console.log(threeSumWithOrderArray(nums, target))

