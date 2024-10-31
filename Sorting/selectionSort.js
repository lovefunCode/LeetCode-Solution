function selectionSort(arr){
    let len = arr.length;
    for(let i = 0; i < len -1 ; i++){
        let miniNumb = i
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[miniNumb]){
                miniNumb = j
            }
        }
        [arr[i], arr[miniNumb]] = [arr[miniNumb], arr[i]]
    }
    return arr
}
const arr = [2, 4, 3, 6, 5, 1, 0, 8]
console.log(selectionSort(arr))