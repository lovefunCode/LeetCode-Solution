function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }

    const mid = Math.floor(arr.length/2)
    
    const left = mergeSort(arr.slice(0, mid))
    console.log(left)
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right){
    const result = []
    let i = 0, j  = 0
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i++])
        }else{
            result.push(right[j++])
        }
    }

    return result.concat(left.slice(i).concat(right.slice(j)))
}

const arr = [1, 4, 5, 3,8]
console.log(mergeSort(arr))

console.log(arr.slice(0, 2), arr.slice(2))