function insertionSort(nums){
    let len = nums.length;
    for(let i = 0; i < len -1; i++){
        for(let j=i+1; j >= 0; j--){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums
}

const nums = [2, 4, 3, 6, 5, 1, 8, 0]
console.log(insertionSort(nums))