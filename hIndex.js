const hIndex = function(citations){
    citations.sort((a,b)=> a-b)
    console.log(citations)
    for(let i = 0; i < citations.length; i++){
        if(citations[i] > i){
            return citations[i]
        }
    }

}

const citations = [3,0,6,1,5]
console.log(hIndex(citations))