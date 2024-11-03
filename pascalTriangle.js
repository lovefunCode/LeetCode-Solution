
// loop + 2 pointer
const generatePascalTriangle = (numRows)=>{
    let res = []
    if(numRows >= 1) res.push([1])
    if(numRows >= 2) res.push([1, 1])
    for(let i = 2; i < numRows; i++){
        let pre = res[i-1]
        let left = 0
        let right = 1;
        let add = []
        while(right < pre.length){
            add.push(pre[left]+ pre[right])
            left++
            right++
        }
        res.push([1, ...add, 1])
    }
    return res
}

// Recursion : break large problem into smaller problems 
const generatePascalTriangleWithRecursion = (numRows)=>{
    // Base Case
    if(numRows == 1) return [[1]]
    if(numRows == 2) return [[1], [1, 1]]
    //Recurrence relation
    let preRow = generatePascalTriangleWithRecursion(numRows-1)
    let nowRow = new Array(numRows).fill(1)
    for(let i = 1; i < numRows - 1; i++){
        nowRow[i] = preRow[numRows-2][i-1] + preRow[numRows-2][i]
    }
    preRow.push(nowRow)
    return preRow
} 

console.log(generatePascalTriangle(6))
console.log(generatePascalTriangleWithRecursion(6))

