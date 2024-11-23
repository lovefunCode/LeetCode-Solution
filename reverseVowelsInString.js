// map data structure
const reverseVowels = function(s){
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let map = {}
    for(let i = 0; i < s.length; i++){
        if(vowels.has(s[i])){
            map[i] = s[i]
        }
    }
    let reverseValues = Object.values(map).reverse()
    let keys = Object.keys(map)
    console.log(map, reverseValues, keys)
    let arr = s.split('')
    for(let i = 0; i < keys.length; i++){
        arr[Number(keys[i])] = reverseValues[i]
    }
    console.log(arr)
    return arr.join('')
}

// Two-Pointers
const reverseVowels2 = function(s){
    let arr = s.split('')
    let strs = 'aeiouAEIOU'
    let left = 0;
    let right = arr.length-1
    while(left < right){
        if(strs.includes(s[left]) && strs.includes(s[right])){
            [arr[left], arr[right]] =  [arr[right], arr[left]]
            left++
            right--
        }else if(!strs.includes(s[left])){
            left++
        }else if(!strs.includes(s[right])){
            right--
        }
        
    }
    return arr.join('')
}

const s = "IceCreAm"
console.log(reverseVowels2(s))
