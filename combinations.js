const combinations = function(n, k){
    const result = []
    function dfs(index, curr){
        // Base case
        if(curr.length == k) {
            result.push([...curr])
        }
        for(let i = index; i<= n; i++){
            curr.push(i)
            // Recursive
            dfs(i+1, curr)
            // Backtrack
            curr.pop();
        }
    }

    dfs(1, [])
    return result;

}
const n = 4, k = 2
console.log(combinations(n, k))