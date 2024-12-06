const simplifyPath = function(path){
    let arr = path.split('/')
    console.log(arr)
    let stack = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == '' || arr[i] == '.'){
           continue
        }else if(arr[i] == ".."){
            stack.pop()
        }else{
            stack.push(arr[i])
        }
        
    }
    let res = '/' + stack.join('/')
    console.log('stack', stack)
    return res
}
const path = "/home//foo/"
const path2 = "/home/user/Documents/../Pictures/"
const path3= "/.../a/../b///c/../d/./"
// console.log(simplifyPath(path))
// console.log(simplifyPath(path2))
console.log(simplifyPath(path3))