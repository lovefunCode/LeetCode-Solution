const mergeTwoOrderArr = function(arr1, m, arr2, n){
    let i = m-1
    let j = n-1
    let k = m+n-1
    while(j >= 0){
        if(i >= 0 && arr1[i] > arr2[j]){
            arr1[k] = arr1[i]
            i--
        }else{
            arr1[k] = arr2[j]
            j--
        }
        k--
    }
}

const mergeTwoOrderArr2 = function(arr1, m, arr2, n){
    // copy 
    //    arr1 = arr1.slice(0, m)
    for(let i = arr1.length; i > m - 1; i--){
        arr1.splice(i, 1)
    }
   let num2 = arr2.slice(0, n)
   for(let i = 0; i < num2.length; i++){
        arr1.push(num2[i])
   }
   console.log(arr1)
   arr1.sort((a, b)=> a-b)
}

const mergeTwoOrderArr3 = function(arr1, m, arr2, n){
    arr1.length = m
    arr1.push(...arr2.slice(0, n))
    arr1.sort((a, b)=> a-b)
}

let arr1 = [1, 2, 6, 7, 0, 0, 0], arr2 = [4, 5, 8]
console.log(mergeTwoOrderArr3(arr1, 4, arr2, 3))
console.log(arr1)