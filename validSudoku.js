const validSudoku = function(board){
    const rows = board[0];
    
    console.log(rows.length)
    for(let i = 0; i < rows.length; i++){
        const rowSet = new Set()
        const columnSet = new Set()
        const boxSet = new Set()
        const columns = board[i]
        for(let j = 0; j < 9; j++){
            const rowVal = board[i][j]
            const columnVal = board[j][i]
            // 9 boxes
            const boxVal = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]; // Current box value

            // Check each row
            if(rowVal != '.'){
                if(rowSet.has(rowVal)) return false
                rowSet.add(rowVal)
            }
           
            //Check every column
            if(columnVal != '.'){
                if(columnSet.has(columnVal)) return false
                columnSet.add(columnVal)
            }

            // Check each boxes
            if(boxVal != '.'){
                if(boxSet.has(boxVal)) return false
                boxSet.add(boxVal)
            }
        }
    }

    return true

}
const board = [
    ["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]
console.log(validSudoku(board))
console.log( [3 * Math.floor(2 / 3) + Math.floor(2 / 3)], [3 * (2 % 3) + (2 % 3)]) // Current box value

console.log(3 * Math.floor(2 / 3), Math.floor(2 / 3))
