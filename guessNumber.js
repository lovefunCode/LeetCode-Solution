const guessNumber = function(n, pick){
    let left = 0
    let right = n;
    while(left < right){
        let mid = left + Math.floor((right-left)/2);
        let answer = guessNumber(mid)
        if(answer == 0) return mid
        if(answer == -1) right = mid -1
        if(answer == 1) left = mid + 1
    }

    function guessNumber(n){
        if(n > pick){
            return -1
        }else if(n < pick){
            return 1   
        }else {
            return 0
        }
     }
}



console.log(guessNumber(10, 6))