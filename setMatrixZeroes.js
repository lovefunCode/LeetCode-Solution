const setMatrixZeroes = function(matrix){
    let zerosPosition = []
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] == 0){
                zerosPosition.push([i, j])
            }
        }
    }
    console.log(zerosPosition)
    for(let i = 0; i < zerosPosition.length; i++){
        console.log(zerosPosition[i][0], zerosPosition[i][1])
        let row = zerosPosition[i][0], column = zerosPosition[i][1]
        console.log('row, column',row, column)
        for(let j = 0; j < matrix.length; j++){
            matrix[j][column] = 0
        }
        for(let k = 0; k < matrix[0].length; k++){
            matrix[row][k] = 0
        }
    }
    console.log(matrix)
    return matrix
}

const matrix = [[1,1,1],[1,0,1],[1,1,1]]
const matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
console.log(setMatrixZeroes(matrix2))