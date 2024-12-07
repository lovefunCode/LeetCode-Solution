const isIsomorphic = function(s, t){
    let map = {}
    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            if(map[s[i]] != t[i]){
                return false
            }
        }else{
            map[s[i]] = t[i]
        }
            
    }
    console.log(map)
    return true
}
const s = "paper", t = "title"
console.log(isIsomorphic(s,t))
