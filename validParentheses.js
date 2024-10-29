// use map & Stack data structure 
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//  determine if the input string is valid.

const isValid = function(s){
    const mapping = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    let stack = []
    for(let i = 0 ,len = s.length; i < len;i++){
        let char = s[i]
        if(mapping.hasOwnProperty(char)){
            if(!stack.length || mapping[char] != stack.pop()){
                return false
            }
        }else{
            stack.push(char)
        }
    }
    return stack.length === 0
}

let s = "()[]{"
console.log(isValid(s))