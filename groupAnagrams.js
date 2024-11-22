// Object 
const groupAnagrams = function(strs){
    let obj = {}
    let sortedArr = strs.map(str=>str.split('').sort().join(''))
    console.log(sortedArr)
    for(let i  = 0; i < sortedArr.length; i++){
        // if(!obj.hasOwnProperty(sortedArr[i])){
        if(!obj[sortedArr[i]]){
            obj[sortedArr[i]] = []
        }
        obj[sortedArr[i]].push(strs[i])
    }
    let result = []
    // result = Array.from(Object.values(obj))
    result = [...Object.values(obj)]
    return result
}

// Map
const groupAnagramsWithMap = function(strs){
    let map = new Map()
    let sortedArr = strs.map(str=>str.split('').sort().join(''))
    console.log(sortedArr)
    for(let i = 0; i < sortedArr.length; i++){
        if(!map.has(sortedArr[i])){
            map.set(sortedArr[i], [])
        }
        map.get(sortedArr[i]).push(strs[i])
    }
    console.log(map)
    let result = []
    // result = Array.from(map.values())
    result = [...map.values()]
    return result
}
const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))
console.log(groupAnagramsWithMap(strs))