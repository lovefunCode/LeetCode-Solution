const isSubsequence = function(s, t){
    let left = 0
    for(let i = 0; i < t.length && left < s.length; i++){
       if(t[i] == s[left]){
            left++
        }
    }
    return left == s.length
}

const s = "abc", t = "ahbgdc"
console.log(isSubsequence(s, t))