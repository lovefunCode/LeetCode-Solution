// create 2D matrix ways
// because in JS, there is no built-in method to create a 2D matrix.

const rows = 10;
const columns = 10;


//way1:  directly assign 
const myArray = [[],[],[],[],[],[],[]]

// way 2:
const myArray2 = []
for(let i = 0; i < rows; i++){
    myArray2[i] = []
    for(let j = 0; j < columns; j++){
        myArray2[i][j] = null
    }
}

console.log(myArray2)

//way 3:
const myArray3 = new Array(rows)
for(let i = 0; i < columns; i++){
    myArray3[i] = new Array(columns).fill(null)
}
console.log(myArray3)

//way 4:
const myArray4 = Array.from(Array(rows), ()=>new Array(columns).fill(1))
console.log(myArray4)
