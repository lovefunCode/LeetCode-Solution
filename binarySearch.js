// Time Complexity: O(logn)

const binarySearch = function(nums, target){
    let left = 0;
    let right = nums.length -1;
    while(left < right){
        // Note: if right is the biggest, right + left can cause stack overflow
        // let middle = Math.floor((left + right)/2)
        let middle = left + Math.floor((right - left)/2)
        if(nums[middle] === target){
            return middle
        }else if(nums[middle] > target){
            right = middle - 1
        }else{
            left = middle + 1
        }
    }
    return -1
}
const nums = [-1,0,3,5,9,12], target = 9
console.log(binarySearch(nums, target))