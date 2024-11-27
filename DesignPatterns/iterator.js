//  Set, Map
// iterator with set

const mySet = new Set([1, 2, 3, 4, 5])
// create an iterator for the set
const iterator = mySet[Symbol.iterator]()
console.log(iterator.next())

const myMap = new Map([
    ['name', 'flora'],
    ['age', 25],
    ['job', 'developer'],
])

const iteratorMap = myMap[Symbol.iterator]()
console.log(iteratorMap.next())