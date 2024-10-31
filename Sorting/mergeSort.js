// Divide and Conquer approach
// 

function mergeSort(nums){
    // Use Recursion to divide nums to each num
    // base case
    if(nums.length <= 1) return nums
    // Recurrence Relation
    const middle = Math.floor(nums.length/2)
    const left = nums.slice(0, middle)
    const right = nums.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) =>{
    const res = []
    while(left.length && right.length){
        if(left[0] > right[0]){
            res.push(right.shift())
        }else{
            res.push(left.shift())
        }
    }
    return [...res, ...left, ...right]
}

const nums = [2, 4, 3, 6, 5, 1, 8, 0]
console.log(mergeSort(nums))