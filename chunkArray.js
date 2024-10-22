function chunkArray(arr, size){
    let result = []
    let subArray = []

    for(let i = 0; i < arr.length; i+=size){
        // console.log(arr.slice(i, i+size))
        result.push(arr.slice(i, i+size))
    }
    return result;

    // for(let i = 0; i < arr.length; i++){
    //     subArray.push(arr[i])
    //     if(subArray.length == size){
    //         result.push(subArray)
    //         subArray = []
    //     }
    // }
    // console.log([] == 0)
    // if(subArray && subArray.length){
    //     result.push(subArray)
    // }
    // return result
}

let arr = [1,9,6,3,2], size = 3

console.log(chunkArray(arr, size))