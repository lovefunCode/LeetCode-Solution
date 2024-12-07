const canConstruct = function(ransomNote, magazine){
    if(magazine.includes(ransomNote)){
        return true
    }
    return false
}

const canConstruct2 = function(ransomNote, magazine){
    if(magazine.indexOf(ransomNote) !== -1){
        return true
    }
    return false
}

const canConstruct3 = function(ransomNote, magazine){
    for(let i = 0; i < magazine.length; i++){
        for(let j = 0; j < ransomNote.length; j++){
            if(magazine[i] == ransomNote[0]){
                let substr = magazine.substring(i, i+ransomNote.length)
                // let substr = magazine.substr(i, ransomNote.length)
                if(substr == ransomNote){
                    return true
                }
            }
        }
    }
    return false
}

const ransomNote = "aa", magazine = "aab"
console.log(canConstruct3(ransomNote, magazine))