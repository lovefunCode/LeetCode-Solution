const addBinary = function(a, b){
    let maxLength = Math.max(a.length, b.length)
    console.log(maxLength)
    let res = new Array(maxLength+1).fill(0)
    console.log(res)
    a = a.padStart(maxLength, '0')
    b = b.padStart(maxLength, '0')
    for(let i = maxLength-1; i >= 0; i--){
        // Strings in JS are immutable, so their character cannot directly accessed od modified like array element
        let digitA = Number(a[i])
        let digitB = Number(b[i])
        let sum = digitA + digitB + res[i+1]
        res[i+1] = sum % 2
        res[i] += Math.floor(sum / 2)
    }
    if(res[0] == 0){
        res.shift()
    }
    console.log(res)
    return res.join('')
   
}
const a = "1010", b = "1011"
console.log(addBinary(a, b))