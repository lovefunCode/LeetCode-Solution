
// ignore the leading zero, only care about the trailing zero
// for example 1.2  vs 1.10   
//  corresponding  1.20  Vs 1.10
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

// for example 1.2  vs 1.10   
//  corresponding  1.02  Vs 1.10

const compareVersion2 = function(version1, version2){
    let ver1 = version1.split('.')
    let ver2 = version2.split('.')
    const maxLength = Math.max(ver1.length, ver2.length)
    // console.log(maxLength)
    // console.log(ver1, ver2)
    // padEnd(maxLength, '0')
    for(let i = 0; i < maxLength; i++){
        console.log(ver1[i], ver2[i])
        if(ver1[i] || ver2[i]){
            let digitA = ver1[i] && ver1[i].split('') || 0
            let digitB = ver2[i] && ver2[i].split('')  || 0
            let maxDigitLen = Math.max(digitA.length, digitB.length)
            // console.log('digitA, digitB',digitA, digitB, maxDigitLen)
            for(let j = 0; j < maxDigitLen ; j++){
                digitA[j]  = digitA[j] || 0
                digitB[j]  = digitB[j] || 0
                // console.log('digitA[j] , digitB[j]',digitA[j] , digitB[j])
                if(digitA[j] > digitB[j]){
                    return 1
                }else if(digitA[j] < digitB[j]){
                    return -1
                }
            }
        }
    }
    
    return 0
}
// console.log(compareVersion2('1.01', '1.1'))
console.log(compareVersion2('1.0', '1.0.0.0'))
// console.log(compareVersion2('1.01', '1.000100'))


