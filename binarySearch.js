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

//calculate the average 
// 1. One issue is accumulator value is over stackflow
function calcalateAverage(nums){
    const sum = nums.reduce((accumulator, cur)=> {return accumulator + cur} , 0)
    return (sum/nums.length).toFixed(2)
}

console.log(calcalateAverage(nums))

// 2
function calcalateAverage2(nums){
    const sum = nums.reduce((accumulator, cur)=> accumulator + (cur-nums[0]), 0)
    return (sum/nums.length + nums[0]).toFixed(2)
}
console.log(calcalateAverage2([-1,12,3,5,9,0]))