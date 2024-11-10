const subsets = function(nums){
    const result = [[]]
    function dfs(index, curr){
        for(let i = index; i < nums.length; i++){
            curr.push(nums[i])
            result.push([...curr])
            // Recursive 
            dfs(i+1, curr)
            // backtrack
            curr.pop();
        }
    }
    dfs(0, [])
    return result
}
const nums = [1,2,3]
console.log(subsets(nums))