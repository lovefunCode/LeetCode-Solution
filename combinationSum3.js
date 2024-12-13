function combinationSum3(k, n){
    let res = []
    let arr = []
    for(let i = 1; i <= n ; i++){
        arr.push(i)
    }
    
    dfs(0, [])

    function dfs(index, currArr){
        if(currArr.length == k){
            let acc = currArr.reduce((accumulator, item)=>{
                return accumulator+item
            })
            if(acc == n){
                res.push([...currArr])
                return;
            }
        }
        for(let i = index; i < n; i++){
            currArr.push(arr[i])
            dfs(i+1, currArr)
            currArr.pop()
        }
    }

    return res
}

console.log(combinationSum3(3, 7))