const spiralOrder = function(matrix){
    let left = 0
    let top = 0
    let right = matrix[0].length - 1
    let bottom = matrix.length -1 
    let size = matrix[0].length * matrix.length
    let res = []
    while(res.length < size){
        for(let i = left; i <= right && res.length < size; i++){
            console.log('+++++')
            res.push(matrix[top][i])
        }
        top++
        for(let i = top; i <= bottom && res.length < size; i++){
            res.push(matrix[i][right])
        }
        right--
        for(let i = right; i >= left && res.length < size; i--){
            res.push(matrix[bottom][i])
        }
        bottom--
        console.log('left---',left)
        for(let i = bottom; i >= top && res.length < size; i--){
            res.push(matrix[i][left])
        }
        left++
    }
    return res
}
const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiralOrder(matrix))