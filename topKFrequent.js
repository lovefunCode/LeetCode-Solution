const topKFrequent = function(nums, k){
    let map = {}
    let result = []
    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1
        }else{
            map[nums[i]]++
        }
    }
    // console.log('map---', map)
    // for(let [key, value] of Object.entries(map)){
    //     console.log(key, value)
    //     if(key >= k){
    //         result.push(value)
    //     }
    // }
    Object.keys(map).map(item=>{
        console.log(item)
        if(item >= k){
            result.push(map[item])
        }
    })
    return result
}

const nums = [1,1,1,2,2,3], k = 2
console.log('result---', topKFrequent(nums, k))

const nums2 = [1], k2 = 1
// console.log(topKFrequent(nums2, k2))