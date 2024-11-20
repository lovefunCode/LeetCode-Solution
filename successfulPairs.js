// Brute-Force Time Complexity: O(n * m)
function successfulPairs(spells, potions, success){
    let result = []
    for(let i = 0; i < spells.length; i++){
        let count = 0
        for(let j = 0; j < potions.length; j++){
            if(spells[i] * potions[j] >= success){
                count++
            }
        }
        result.push(count)
    }
    return result
}
let spells = [5,1,3], potions = [1,2,3,4,5], success = 7
console.log(successfulPairs(spells, potions, success))

// Binary Search
function successfulPairsWithBinarySearch(spells, potions, success){
    let result = []
    potions.sort((a, b)=> a-b)
    const binarySearch = (spell)=>{
        let left = 0;
        let right = potions.length -1
        while(left <= right){
            let mid = left + Math.floor((right - left)/2)
            if(spell * potions[mid] < success){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
        return potions.length - left
    }
    for(let spell of spells){
        result.push(binarySearch(spell))
    }
    return result
}

console.log(successfulPairsWithBinarySearch(spells, potions, success))