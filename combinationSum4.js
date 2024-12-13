function combinationSum4(nums, target){
    let res = []
    function dfs(currArr, leftVal){
        if(leftVal == 0){
            res.push([...currArr])
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(leftVal < nums[i]){
                break;
            }
            currArr.push(nums[i])
            dfs(currArr, leftVal-nums[i])
            currArr.pop()
        }
    }
    dfs([], target)
    console.log(res)
    return res.length
}
const nums = [1,2,3], target = 4
console.log(combinationSum4(nums, target))