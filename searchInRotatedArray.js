
const searchInRotatedArray = function(nums, target){
    let left = 0;
    let right = nums.length;
    while(left <= right){
        let middle = left+ Math.floor(right-left)
        if(nums[middle] == target) return middle
        if(nums[middle] > nums[left]){
            if(target < nums[middle] && target >nums[middle]){
                right = middle-1
            }else{
                left = middle + 1
            }
        }else{
            if(target < nums[right] && target > nums[middle]){
                left = middle+1
            }else{
                right = middle -1
            }
        }
    }
    return -1
}

const nums = [4,5,6,7,0,1,2], target = 0
console.log(searchInRotatedArray(nums, target))