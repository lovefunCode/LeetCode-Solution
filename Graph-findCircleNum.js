const findCircleNum = function(isConnected){
    let adjacent = {}
    for(let i = 0; i < isConnected.length; i++){
        for(let j = 0; j < isConnected[0].length; j++){
            let val = isConnected[i][j]
            if(val == 1){
                if(!adjacent[i]){
                    adjacent[i] = []
                }
                adjacent[i].push(j)
            }
        }
    }
    console.log(adjacent)
    let visitedSet = new Set()
    let count = 0;
    // for(let [key, value] of Object.entries(adjacent)){
    //     console.log(key, value)
    //     count += dfs(Number(key))
    // }

    // for(let keyNumber in adjacent){
    //     // note: let keyNumber in adjacent, keyNumber is a string
    //     console.log(keyNumber, typeof keyNumber)
    //     count += dfs(Number(keyNumber))
    // }

    Object.keys(adjacent).map(keyNumber =>{
        // Note:  keyNumber is a string
        console.log(keyNumber, typeof keyNumber)
        count += dfs(Number(keyNumber))
    })

    function dfs(currNode){
        if(visitedSet.has(currNode)) return 0;
        visitedSet.add(currNode)
        let neighbor = adjacent[currNode] || []
        for(let n of neighbor){
            dfs(n)
        }
        return 1
    }
    return count
}

const isConnected = [[1,1,0],[1,1,0],[0,0,1]]
console.log(findCircleNum(isConnected))