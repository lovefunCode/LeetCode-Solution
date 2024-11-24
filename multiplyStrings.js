
const multiply = function(num1, num2){
    if(num1 == '0' || num2 == '0') return '0'
    let res = new Array(num1.length+num2.length).fill(0)
    for(let i = num1.length-1; i >= 0; i--){
        for(let j = num2.length-1; j >= 0; j--){
            let digits = Number(num1[i]) * Number(num2[j]) + res[i+j+1]
            res[i+j+1] = digits % 10  
            res[i+j] += Math.floor(digits / 10)
        }
    }
    while(res.length > 0 && res[0] == 0){
        res.shift()
    }
    return res.join('')
}

const num1 = "123", num2 = "456"
console.log(multiply(num1, num2))