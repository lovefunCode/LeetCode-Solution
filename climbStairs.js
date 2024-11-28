const climbStairs = function(n){
    let cache = {}
    if(n == 1 || n == 2){
        return n
    }
    if( cache[n]){
        return cache[n]
    }
    for(let i = 3; i <= n; i++){
        cache[i] = climbStairs(i-1) + climbStairs(i-2)
    }
    return cache[n]
}

const climbStairs2 = function(n){
    if(n == 1 || n == 2){
        return n
    }
    return climbStairs(n-1) + climbStairs(n-2)
}
console.log(climbStairs(2))
console.log(climbStairs(4))