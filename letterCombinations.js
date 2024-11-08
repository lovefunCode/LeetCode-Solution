// Time Complexity: O(n * 4^n)

const letterCombinations = (digits, index=0)=>{
   const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
   } 
   let res = []
   function backtrack(i, curStr){
        if(i > digits.length) return ['']
        if(curStr.length == digits.length){
            res.push(curStr)
            return 
        }
        for(let letter of map[digits[i]]){
            backtrack(i+1, curStr+letter)
        }
   }
   backtrack(0, '')
   return res
}

console.log(letterCombinations('23'))