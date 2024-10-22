// A
// / \
// B   C
// / \   \
// D   E   F

const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B'],
    'F': ['C']
};

function dfs(graph, start, goal, path=[], visited = new Set()){
    path.push(start)
    visited.add(start)
    for(let neighbor of graph[start]){
        console.log(neighbor);
        dfs(graph, neighbor, goal, [...path], visited)
        if(result) return result;
    }
}

const dfsPath = dfs(graph, 'A', 'E')
console.log('dfsPath===', dfsPath)