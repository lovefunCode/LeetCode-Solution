function breakPalindrome(palindrome){
    if(palindrome.length < 2) return ''
    // convert string to array
    let arr = palindrome.split('')
    let mid = Math.floor(palindrome.length/2)
    for(let i = 0; i < mid; i++){
        if(arr[i] != 'a'){
            arr[i] = 'a'
            return arr.join('')
        }
    }
    arr[arr.length-1] = 'b'
    return arr.join('')
}

function breakPalindrome2(palindrome){
    let newStr = ''
    if(palindrome.length < 2) return newStr 
    let mid = Math.floor(palindrome.length/2)
    for(let i = 0; i < mid; i++){
       if(palindrome[i] != 'a'){
          newStr = palindrome.substring(0, i) + 'a' + palindrome.substring(i+1)
          return newStr
       }
    }
    newStr = palindrome.substring(0, palindrome.length-1) + 'b'
    return newStr
}

function breakPalindrome3(palindrome){
    let newStr = ''
    if(palindrome.length < 2) return newStr 
    let mid = Math.floor(palindrome.length/2)
    for(let i = 0; i < mid; i++){
       if(palindrome[i] != 'a'){
          newStr = palindrome.slice(0, i) + 'a' + palindrome.slice(i+1)
          return newStr
       }
    }
    newStr = palindrome.slice(0, palindrome.length-1) + 'b'
    return newStr
}


console.log(breakPalindrome3('abccba'))
console.log(breakPalindrome3('a'))
console.log(breakPalindrome3('aaaa'))