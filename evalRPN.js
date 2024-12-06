const evalRPN = function(token){
    let stack = []
    let operator = new Set(['+', "-", "/", "*"])
    for(let i = 0; i < token.length; i++){
        let token = tokens[i]
        if(operator.has(token)){
            let a  = Number(stack.pop())
            let b = Number(stack.pop())
            let expression = `${b} ${token} ${a}`;
            // let val = eval(expression)
            let val = new Function(`return ${expression}`)()
            stack.push(parseInt(val))
        }else{
            stack.push(token)
        }
    }
    return stack[0]
}

const evalRPN2 = function(tokens){
    // strategy design pattern
    const operatorObj = {
        "+": (a, b)=> a+b,
        "-": (a, b)=> a-b,
        "/": (a, b)=> a/b,
        "*": (a, b) => a *b
    }
    let stack = []
    for(let i = 0; i < tokens.length; i++){
        let token  = tokens[i]
        if(operatorObj[token]){
            let b = Number(stack.pop())
            let a = Number(stack.pop())
            let res = operatorObj[token](a, b) 
            stack.push(parseInt(res))
        }else{
            stack.push(token)
        }
    }
    return stack[0]
}


const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN2(tokens))

// eval() is  a built-in global function that evaluate or execute a string of JS code dynamically
// The string can represent a single expression or a block of code, it is powerful but dangerous
// function if not used carefully

// Be sure the input string is trusted and sanitised

// when you need to evaluate expressions or dynamic code, you can use function constructor,
//  is more safer than using eval()
