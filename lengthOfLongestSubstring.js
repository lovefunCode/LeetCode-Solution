
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.
const lengthOfLongestSubstring = function(s){
    let set = new Set();
    let longestSub = 1;
    for(let i = 0; i < s.length; i++){
        let j = i+1;
        set.add(s[i])
        while(j < s.length){
            if(!set.has(s[j])){
                set.add(s[j])
                longestSub = Math.max(longestSub, set.size)
                j++
            }else{
                set = new Set();
            }
        }
    }
    return longestSub
}

const lengthOfLongestSubstring2 = function(s){
    let left = 0;
    let right = 0;
    let set = new Set()
    let longestSub = 0;
    while(right < s.length){
        if(!set.has(s[right])){
            set.add(s[right])
            longestSub = Math.max(longestSub, set.size)
            right++
        }else{
            set.delete(s[left])
            left++
        }
    }
    return longestSub
}

let s = "pwwkew"
console.log(lengthOfLongestSubstring2(s))