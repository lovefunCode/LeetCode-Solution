const reverseWords = function(s){
    let arr = s.trim().split(' ').filter(word=>word !== '')
    let newArr = []
    for(let i = arr.length -1; i> 0; i--){
        newArr.push(arr[i])
    }
    return newArr.join(' ')
}

const reverseWords2 = function(s){
    let arr = s.trim().split(' ').filter(word=>word !== '')
    let left = 0;
    let right = arr.length-1
    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
    return arr.join(' ')
}


const s = "the   sky is blue"
console.log(reverseWords2(s))