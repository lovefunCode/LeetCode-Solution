function joinTwoArrayById(arr1, arr2){
    let res = {}
    for(let i = 0; i < arr1.length; i++){
        let id = arr1[i].id
        if(!res[id]){
            res[id] = arr1[i]
        }
    }
    for(let i = 0; i < arr2.length; i++){
        let id = arr2[i].id
        if(!res[id]){
            res[id] = arr2[i]
        }else{
            res[id] = {...arr2[i], ...res[id]}
        }
    }
    console.log(Object.values(res))
    let result = [...Object.values(res)]
    // Object.values(res).map(item=>{
    //     result.push(item)
    // })
    return result
}

function joinTwoArrayById2(arr1, arr2){
    let newArr = arr1.concat(arr2)
    let res = {}
    for(let i = 0; i < newArr.length; i++){
        let id = newArr[i].id
        if(!res[id]){
            res[id] = newArr[i]
        }else{
            res[id] = {...newArr[i], ...res[id]}
        }
    }
    return Object.values(res)
}

const arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6, 'z': 11}
]
const arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
// Output: 
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20 , 'z': 11},
//     {"id": 3, "x": 0, "y": 0}
// ]
console.log(joinTwoArrayById2(arr1, arr2))