# DFS for Directed Weighted Graph - Tutorial

## What is DFS?

Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. For directed weighted graphs, DFS follows the direction of edges and considers edge weights.

## Key Concepts

### 1. Directed Weighted Graph
- **Directed**: Edges have direction (A → B is different from B → A)
- **Weighted**: Each edge has a weight/cost associated with it
- **Adjacency List**: Each vertex stores its neighbors with their edge weights

### 2. DFS Algorithm Steps
1. Start at a chosen vertex
2. Mark it as visited
3. For each unvisited neighbor:
   - Visit the neighbor recursively
   - Consider the edge weight (though DFS doesn't use weights for traversal order)
4. Backtrack when no more unvisited neighbors

## Implementation Approaches

### 1. Recursive DFS
```python
def dfs_recursive(graph, start_vertex):
    visited = set()
    result = []
    
    def dfs_helper(vertex):
        visited.add(vertex)
        result.append(vertex)
        
        for neighbor, weight in graph.get_neighbors(vertex):
            if neighbor not in visited:
                dfs_helper(neighbor)
    
    dfs_helper(start_vertex)
    return result
```

### 2. Iterative DFS (using stack)
```python
def dfs_iterative(graph, start_vertex):
    visited = set()
    result = []
    stack = [start_vertex]
    
    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            visited.add(vertex)
            result.append(vertex)
            
            # Add neighbors in reverse order to maintain DFS order
            for neighbor, weight in reversed(graph.get_neighbors(vertex)):
                if neighbor not in visited:
                    stack.append(neighbor)
    
    return result
```

## Example Graph Structure

```
Vertex 0: → (1, 4.0), (2, 1.0)
Vertex 1: → (3, 2.0)
Vertex 2: → (1, 3.0), (3, 5.0)
Vertex 3: → (4, 1.0)
Vertex 4: → (2, 2.0)
```

Visual representation:
```
    0 ──4.0──→ 1 ──2.0──→ 3 ──1.0──→ 4
    │          ↑                    │
    │1.0       │3.0                 │2.0
    ↓          │                    ↓
    2 ─────────┴────────────────────┘
    │
    │5.0
    ↓
    3 (already shown above)
```

## DFS Traversal Order

Starting from vertex 0:
1. Visit 0
2. Go to 1 (weight 4.0)
3. Go to 3 (weight 2.0)
4. Go to 4 (weight 1.0)
5. Go to 2 (weight 2.0)
6. No more unvisited neighbors, backtrack

**Result**: [0, 1, 3, 4, 2]

## Advanced DFS Applications

### 1. Path Finding
Find a path from start to target vertex.

### 2. All Paths Finding
Find all possible paths between two vertices.

### 3. Cycle Detection
Detect cycles in directed graphs.

### 4. Topological Sorting
Order vertices based on dependencies.

## Time and Space Complexity

- **Time Complexity**: O(V + E) where V = vertices, E = edges
- **Space Complexity**: O(V) for recursion stack or explicit stack

## Key Differences from BFS

| Aspect | DFS | BFS |
|--------|-----|-----|
| Data Structure | Stack (LIFO) | Queue (FIFO) |
| Memory Usage | O(height) | O(width) |
| Path Finding | May not find shortest path | Finds shortest path |
| Implementation | Recursive or iterative | Usually iterative |

## When to Use DFS

1. **Path Finding**: When you need any path (not necessarily shortest)
2. **Cycle Detection**: In directed graphs
3. **Topological Sorting**: For dependency resolution
4. **Maze Solving**: When exploring all possibilities
5. **Tree Traversal**: In-order, pre-order, post-order

## Practice Exercises

1. Implement DFS to detect cycles in a directed graph
2. Find the longest path in a directed acyclic graph
3. Implement topological sorting using DFS
4. Find strongly connected components using DFS
5. Implement DFS with early termination (stop when target found)