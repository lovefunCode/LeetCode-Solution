const countSubstrings = function(s){
    let count = 0
    for(let i  = 0; i < s.length; i++){
        let left = i;
        let right = i; 
        // Odd
        helper(left, right)
        // Even
        helper(left, right + 1)

    }

    function helper(left, right){
        while(left >= 0 && right <= s.length-1 && s[left] == s[right]){
            count++
            left--
            right++
        }
    }
    return count;
}

const s = "abc"
console.log(countSubstrings(s));
