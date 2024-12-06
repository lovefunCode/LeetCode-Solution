let string = "6 + 5"
let res = new Function(`return ${string}`)()
console.log(res)


let res2 = eval(string)
console.log(res2)
