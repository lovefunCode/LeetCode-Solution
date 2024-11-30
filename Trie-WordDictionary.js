// Time Complexity: O()
class WordDictionary{
    constructor(){
        this.trie = {}
    }
    // Time Complexity: O(n*m)
    addWord(word){
        let node = this.trie
        for(let char of word){
            if(!node[char]){
                node[char] = {}
            }
            node = node[char]
        }
        node.isEnd = true
        console.log(this.trie)
    }
    // Time Complexity: O(k^n)
    searchWord(word){
        return dfs(this.trie, 0)
        function dfs(trie, index){
            if(word.length == index){
                return trie.isEnd == true ? true : false 
            }
            let char = word[index]
            // console.log('char====', char)
            if(char == '.'){
                for(let char in trie){
                    // console.log('------char', char)
                    return dfs(trie[char], index+1)
                }
            }else{
                if(trie[char]){
                    return dfs(trie[char], index+1)
                }
            }
            return false
        }
    }
}

let word = 'bad', word2 = 'dad', word3 = 'mad'
const myWordDirectory = new WordDictionary()
myWordDirectory.addWord(word)
myWordDirectory.addWord(word2)
myWordDirectory.addWord(word3)
// console.log("searchWord('pad')", myWordDirectory.searchWord('pad'))
// console.log("searchWord('bad')",myWordDirectory.searchWord('bad'))
console.log("searchWord('.ad'",myWordDirectory.searchWord('.ad'))
console.log("searchWord('b..'",myWordDirectory.searchWord('b..'))