function selectionSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        let miniNumb = i
        for(let j = i; j < len; j++){
            if(arr[j] < arr[miniNumb]){
                miniNumb = j
            }
        }
        [arr[i], arr[miniNumb]] = [arr[miniNumb], arr[i]]
    }
    return arr
}
const arr = [2, 4, 3, 6, 5, 1]
console.log(selectionSort(arr))