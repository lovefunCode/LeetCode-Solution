const evalRPN = function(token){
    let stack = []
    let operator = new Set(['+', "-", "/", "*"])
    for(let i = 0; i < token.length; i++){
        let token = tokens[i]
        if(operator.has(token)){
            let a  = Number(stack.pop())
            let b = Number(stack.pop())
            let expression = `${b} ${token} ${a}`;
            let val = parseInt(eval(expression))
            stack.push(val)
        }else{
            stack.push(token)
        }
    }
    return stack[0]
}
const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens))