const firstOccurSubstring = function(haystack, needle){
    for(let i  = 0; i < haystack.length; i++){
        if(haystack[i] == needle[0]){
            let sub = haystack.substr(i, needle.length)
            if(sub == needle){
                return i
            }
        }
    }
    return -1
}

const haystack = "sadbutsad", needle = "sad"
console.log(firstOccurSubstring(haystack, needle))