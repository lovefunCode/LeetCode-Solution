const exist = function(board, word){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] == word[0] && dfs(i, j, 0)){
                return true
            }
        }
    }
    function dfs(row, column, index){
        // should check word.length == index rather than word.length -1 == index
        if(word.length == index) return true
        if(row < 0 || row >= board.length || column < 0 || column >= board[0].length || board[row][column] != word[index]){
            return false
        }
        // Avoid the back traverse
        board[row][column] = "#"
        if(dfs(row-1, column, index+1) || dfs(row+1, column, index+1) 
            || dfs(row, column-1, index+1) || dfs(row, column+1, index+1)){
                return true
        }

    }

    return false
}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
console.log(exist(board, word))