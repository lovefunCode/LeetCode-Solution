var inorderTraversal = function*(array){
    for(const n of array){
        if(Array.isArray(n)){
            yield* inorderTraversal(n)
        }else{
            yield n;
        }
    }
}

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

