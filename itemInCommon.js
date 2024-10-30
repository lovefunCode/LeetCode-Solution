function itemInCommon(arr1, arr2){
    for(let i = 0, len = arr1.length; i < len; i++){
        for(let j = 0, len2 = arr2.length; j < len2; j++){
            if(arr1[i] === arr2[j]) return true
        }
    }
    return false
}

function itemInCommon2(arr1, arr2){
    let obj = {}
    for(let i = 0, len = arr1.length; i < len; i++){
        obj[arr1[i]] = true
    }
    for(let i = 0, len = arr2.length; i < len; i++){
        if(obj.hasOwnProperty(arr2[i])) return true
    }
    return false
}

function itemInCommon3(arr1, arr2){
    let set = new Set(arr1)
    for(let element of arr2){
        if(set.has(element)){
            return true 
        }
    }
    return false
}

function itemInCommon4(arr1, arr2){
    //determine the the longer and shorter array 
    const [shorter, longest] = arr1.length < arr2.length ? [arr1, arr2] : [arr2,arr1]
    let set = new Set(shorter)
    //check if any element in the longer array is in the set
    for(let element of longest){
        if(set.has(element)){
            return true 
        }
    }
    return false
}

const arr1 = [1, 3, 5]
const arr2 = [2, 4, 5]
console.log(itemInCommon4(arr1, arr2))
