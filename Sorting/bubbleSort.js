function bubbleSort(arr){
    let len = arr.length;
    for(let i = 0; i < len-1; i++){
        for(let j = 0; j < len; j++){
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

const array = [3,2,4,1,6,5, 8, 0]
console.log(bubbleSort(array))