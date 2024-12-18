const majorityElement = function(nums){
    let fre = Math.ceil(nums.length/2)
    let left = 0
    let count = 1
    let len = nums.length
    while(left < len){
        let num = nums[left]
        for(let i = 1; i < len; i++){
            if(nums[i] == num){
                count++
            }
            if(count == fre){
                return nums[i]
            }
        }
        left++
    }
}

const majorityElement2 = function(nums){
    let map = {}
    let fre = Math.ceil(nums.length/2)
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        if(!map[num]){
            map[num] = 1
        }else{
            map[num] += 1
        }
    }
    console.log(fre)
    console.log(map)
    for(let [key, value] of Object.entries(map)){
        console.log('key---value', key, value)
        if(value >= fre){
            return key
        }
    }

}

const nums = [2,2,1,1,1,2,2]
console.log(majorityElement2(nums))
