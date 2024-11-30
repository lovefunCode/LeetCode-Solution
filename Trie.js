class Trie{
    constructor(){
        this.trie = {}
    }
    insert(word){
        let node = this.trie
        for(let char of word){
            if(!node[char]){
                node[char] = {}
            }
            node = node[char]
        }
        node.isEnd = true
    }
    traverse(string){
        let node = this.trie
        for(let char of string){
            if(!node[char]){
                return false
            }
            node = node[char]
        }
        return node
    }
    search(word){
        if(!word) return false
        const node = this.traverse(word)
        return node && node.isEnd ? true : false
    }
    startWith(prefix){
       if(!prefix){
            return false
       }
       const node = this.traverse(prefix)
       return node ? true : false
    }
}

const myTrie = new Trie()
myTrie.insert('apple')
console.log('myTrie.trie----', myTrie.trie)
console.log(myTrie.search('apple'))


console.log(myTrie.startWith('app'))

console.log(myTrie.search('app'))
myTrie.insert('app')

console.log(myTrie.search('app'))