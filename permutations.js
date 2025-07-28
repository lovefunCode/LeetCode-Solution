const permutation = function(nums){
    let res = []
    dfs([], nums)
    function dfs(currArr, leftArr){
        if(leftArr.length == 0){
            res.push([...currArr])
            return
        }
        for(let i = 0; i < leftArr.length; i++){
            currArr.push(leftArr[i])
            const newLeftArr = nums.filter(item=> {
                return !(currArr.some(currItem=>{
                    return item == currItem
                }))
            }) 
            console.log('newLeftArr--newLeftArr',newLeftArr)
            dfs(currArr, newLeftArr )
            currArr.pop()
        }
    }
    return res
}

const nums = ['A', 'B', 'C']
console.log(permutation(nums))