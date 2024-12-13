function combinationSum2(candidates, target){
    let res = []
    candidates.sort((a, b)=> a-b)
    function dfs(index, currArr, leftVal){
        if(leftVal == 0){
            res.push([...currArr])
            return;
        }
        for(let i = index; i < candidates.length; i++){
            if(candidates[i] == candidates[i-1]){
                continue
            }
            currArr.push(candidates[i])
            dfs(i+1, currArr, leftVal-candidates[i])
            currArr.pop()
        }

    }
    dfs(0, [], target)
    return res

}
const candidates = [10,1,2,7,6,1,5], target = 8
console.log(combinationSum2(candidates, target))