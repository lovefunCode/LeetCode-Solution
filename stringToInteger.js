const stringToInteger  = function(s){
    let result = []
    let flag = false
    for(let i = 0; i < s.length; i++){
        const char = s[i]
        // ignore the leading space
        if(char == ' '){
            continue
        }
        // check the sign
        if(char == '-' || char == '+'){
            flag == char == '-'
            continue
        }
        // stop processing if the character is non-numberic
        if(char.charCodeAt(i) < 48 || char.charCodeAt(i) > 57){
            continue
        }

        result.push(char)
    }
    console.log(result)
    let number = parseInt(result.join(''), 10)
    if(!flag){
        number = -number
    }
    console.log(number)
    const IntMax = 2 ** 31 -1
    const IntMin = - (2 ** 31)

    if(number > IntMax) return IntMax
    if(number < IntMin) return IntMin

    return number || 0
    
}

const s = " -042  abcdf"
console.log(stringToInteger(s))
