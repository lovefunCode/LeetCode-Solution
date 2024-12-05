const rotateMatrix90Degrees = function(matrix){
    let res = []

    for(let i = 0; i < matrix[0].length; i++){
        let temp = []
        for(let j = matrix.length-1; j >= 0; j--){
            temp.push(matrix[j][i])
        }
        res.push(temp)
    }
    return res
}
// const matrix = [[1,2,3],[4,5,6],[7,8,9]]
const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
console.log(rotateMatrix90Degrees(matrix))

const rotateMatrix = function(matrix){
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix.length; j++){
            console.log(i, j, matrix[i][j], matrix[j][i])
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length/2; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][matrix[0].length-1-j]
            matrix[i][matrix[0].length-1-j] = temp
        }
    }
    console.log(matrix)

}

const matrix2 = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotateMatrix(matrix2))