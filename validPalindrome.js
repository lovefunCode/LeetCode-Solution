
const validPalindrome = function(s){
    //1. clean the string to lowercase and keep the string as an alphanumeric
    const newStr = cleanUp(s)
    // 2. decide whether a string is a palindrome
    return isPal(newStr)
}

function cleanUp(s){
    const str = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let newStr = ''
    for(let i = 0; i < s.length; i++){
        let nowS = s[i].toLowerCase()
        // if(str.indexOf(nowS) != -1){
        if(str.includes(nowS)){
            newStr += nowS
        }
    }
    return newStr;
}

// 2 Pointers
function isPal(newStr){
    let left = 0;
    let right = newStr.length - 1
    while(left < right){
        if(newStr[left] !== newStr[right]){
            return false
        }
        left++
        right--
    }
    return true
}

const s = 'Race a car'
const s2 = "A man, a plan, a canal: Panama"

console.log(validPalindrome(s))
console.log(validPalindrome(s2))

// Tips: indexOf & includes are used to search for the presence of a value 
// within an array or a string

//indexOf find the s /'a' in string position
console.log(s.indexOf('R'))  // 0
console.log(s.indexOf('a'))   // 1

console.log(s.includes('R'))  // true