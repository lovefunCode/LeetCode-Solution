const addStrings = function(a, b, radix){
    let maxLength = Math.max(a.length, b.length)
    a = a.padStart(maxLength, '0')
    b = b.padStart(maxLength, '0')
    let res = new Array(maxLength+1).fill(0)
    console.log("Padded Inputs:", a, b);
    for(let i = maxLength-1; i>= 0; i--){
        let digit = Number(a[i]) + Number(b[i]) + res[i+1]
        res[i+1] = digit % radix  // current digit
        res[i] += Math.floor(digit/radix)  // carry on to the next place
    }
    if(res[0] == 0){
        res.shift()
    }
    console.log(res)
    return res.join('');
}

console.log(addStrings('123', '8', 10))