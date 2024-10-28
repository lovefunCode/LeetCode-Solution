// A
// / \
// B   C
// / \   \
// D   E   F

// Graph represented as an  adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B'],
    'F': ['C']
};

// Graph represented as an adjacency matrix
const adjacencyMatrix = [
    [0, 1, 1, 0, 0, 0],  // A
    [1, 0, 0, 1, 1, 0],  // B
    [1, 0, 0, 0, 0, 1],  // C
    [0, 1, 0, 0, 0, 0],  // D
    [0, 1, 0, 0, 0, 0],  // E
    [0, 0, 1, 0, 0, 0]   // F
];


// Breadth-First-Search function
function bfsGraph(graph, startNode){
    const visited = new Set();
    const queue = [startNode]    //Queue for BFS traversal
    const result = []   // To store the order of the traversal
    console.log(queue.length)
    while(queue.length){
        const node = queue.shift()    //dequeue the first node
        if(!visited.has(node)){
            visited.add(node)
            result.push(node)
        }
        // Enqueue all unvisited neighobor
        for(const neighbor of graph[node]){
            if(!visited.has(neighbor)){
                queue.push(neighbor)
            }
        }
    }
    return result;
}
console.log(bfsGraph(graph, "A"))