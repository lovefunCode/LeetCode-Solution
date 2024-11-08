const romanToInt = function(s){
    const symbol = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }
    let result = 0;
    for(let i = 0; i < s.length; i++){
        let cur = s[i]
        let next = s[i+1]
        if(symbol[next] > symbol[cur]){
            result -= symbol[cur]    
        }else{
            result += symbol[cur] 
        }
        //Cannot use this. if symbol[next] is underfine(as in the case of the last numeral)
        //  the condition symbol[next] <= symbol[cur] will return false
        // if(symbol[next] <= symbol[cur]){
        //     result += symbol[cur]    
        // }else{
        //     result -= symbol[cur] 
        // }

    }
    return result;
}
const s = "LVIII"
console.log(romanToInt(s))