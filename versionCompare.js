
// ignore the leading zero, only care about the padding zero
const compareVersion = function(version1, version2){
    let ver1 = version1.split('.').map(num => parseInt(num, 10))
    let ver2 = version2.split('.').map(num => parseInt(num, 10))

    let length = Math.max(ver1.length, ver2.length)
    for(let i = 0; i <length; i++){
        let num1 = ver1[i] || 0
        let num2 = ver2[i] || 0
        if(num1 > num2) return 1
        if(num1 < num2) return -1
    }
    
    return 0
}

console.log(compareVersion('1.01', '1.1'))

console.log(compareVersion('1.01', '1.1'))

