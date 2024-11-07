const findMinInRotatedArray = function(nums){   
    let left = 0;
    let right = nums.length -1
    //Note: left cannot equal to right otherwise will cause time limit exceeded
    // while(left <= right) will cause infinite loop if the left and
    // right coverage and repeatedly oscillate between the same values without progressing
    // Perform binary search
    while(left < right){
        let mid = left+ Math.floor((right-left)/2)
        if(nums[mid] > nums[right]){
            left = mid+1
        }else{
            right = mid
        }
    } 
    return nums[left]
}

const nums = [4,5,6,7,-3,-5,1,2]
console.log(findMinInRotatedArray(nums))