const productExceptSelf = function(nums){
    let copyNums = nums.slice()
    let res = []
    start = 1;
    let obj = {}
    for(let i = 0; i < nums.length; i++){
       let removeNumb = copyNums.splice(i, 1)
       obj[i] = copyNums.reduce((accumualtor, curr)=>{
            return accumualtor * curr
       })
       copyNums = nums.slice()
    }
    // console.log(obj)
    // Object.values(obj).map((item, index)=>{
    //     res[index] = 1
    //     item.map(num=>{
    //         res[index] *=num
    //     })
    // })
    res = Object.values(obj)
    console.log(res)
    return res
}

const productExceptSelf2 = function(nums){
    let start = 1
    let res = []
    for(let i = 0; i < nums.length; i++){
        res.push(start)
        start = start*nums[i]
    }
    start = 1
    for(let j = nums.length -1 ; j >= 0; j--){
        res[j] = res[j] * start
        start = start* nums[j]
    }
    return res
}

const nums = [1,2,3,4], nums2 = [-1,1,0,-3,3]
console.log(productExceptSelf2(nums))

console.log(productExceptSelf2(nums2))
