const zigzagConversion = function(s, numRows){
    if(s.length == 1 || numRows == 1){
        return s
    }
    let count = 0
    let dir = true
    let res = new Array(numRows).fill('')
    for(let i = 0; i < s.length; i++){
        res[count] += s[i]
        if(count == numRows-1){
            dir = false
        }
        if(count == 0){
            dir = true
        }

        count += dir ? 1: -1

        // if(dir){
        //     count++
        // }else{
        //     count--
        // }
    }
    console.log(res)
    return res.join('')
}

const s = "PAYPALISHIRING", numRows = 4
console.log(zigzagConversion(s, numRows))