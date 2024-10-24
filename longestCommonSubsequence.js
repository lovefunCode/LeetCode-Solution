const longestCommonSubsequence = function(text1, text2){
    let m = text1.length;
    let n = text2.length;
    let dp = Array.from(Array(m+1), ()=> new Array(n+1).fill(0))
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(text1[i -1 ] == text2[j -1]){  // note:  If you were to use text1[i] === text2[j], 
                dp[i][j] = dp[i-1][j-1] + 1      // you'd be comparing the next characters, 
                                                //which would be incorrect since the dp array is offset by 1.
            }else{
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
            }
        }
    }
    return dp[m][n]
}

let text1 = "abcde", text2 = "ace" 
console.log(longestCommonSubsequence(text1, text2))