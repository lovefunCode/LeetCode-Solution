//  Recursion 
const quickSort = (nums)=>{
    // Base case to quit the recursion
    if(nums.length <= 1) return nums
    let pivot = nums[nums.length - 1]
    let leftArr = []
    let rightArr = []
    // notice i < len - 1, should except pivot, or otherwise stack exceed || maximum call stack exceeded 
    for(let i = 0, len = nums.length; i < len - 1; i++){
        if(nums[i] > pivot){
            rightArr.push(nums[i])
        }else{
            leftArr.push(nums[i])
        }
    }

    // if(leftArr.length && rightArr.length){
    //     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    // }else if(leftArr.length){
    //     return [...quickSort(leftArr), pivot, ...rightArr]
    // }else{
    //     return [...leftArr, pivot, ...quickSort(rightArr)]
    // }

    // Recursively sort the left and right arrays
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]

}

const nums = [2, 4, 3, 6, 5, 1, 8, 0]
console.log(quickSort(nums))