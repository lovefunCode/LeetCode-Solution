const isAnagram = function(s, t){
    let set = new Set(s)
    for(let i = 0; i < t.length; i++){
        if(!set.has(t[i])){
            return false
        }
    }
    return true
}
const s = "anagram", t = "nagaram"
const s2 = "rat", t2 = "car"
console.log(isAnagram(s, t))
console.log(isAnagram(s2, t2))