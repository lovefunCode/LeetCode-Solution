"""
Depth-First Search (DFS) for Directed Weighted Graph

This module demonstrates how to implement DFS for a directed weighted graph
using different approaches: recursive and iterative.
"""

from collections import defaultdict, deque
from typing import Dict, List, Set, Tuple, Optional


class DirectedWeightedGraph:
    """
    A directed weighted graph implementation using adjacency list.
    
    Each edge has a direction (from source to destination) and a weight.
    """
    
    def __init__(self):
        # Dictionary to store adjacency list: {vertex: [(neighbor, weight), ...]}
        self.graph: Dict[int, List[Tuple[int, float]]] = defaultdict(list)
        self.vertices: Set[int] = set()
    
    def add_edge(self, from_vertex: int, to_vertex: int, weight: float) -> None:
        """
        Add a directed weighted edge from from_vertex to to_vertex.
        
        Args:
            from_vertex: Source vertex
            to_vertex: Destination vertex  
            weight: Weight of the edge
        """
        self.graph[from_vertex].append((to_vertex, weight))
        self.vertices.add(from_vertex)
        self.vertices.add(to_vertex)
    
    def add_vertex(self, vertex: int) -> None:
        """Add a vertex to the graph."""
        self.vertices.add(vertex)
    
    def get_neighbors(self, vertex: int) -> List[Tuple[int, float]]:
        """Get all neighbors of a vertex with their edge weights."""
        return self.graph[vertex]
    
    def display(self) -> None:
        """Display the graph structure."""
        print("Directed Weighted Graph:")
        print("Vertex -> [(neighbor, weight), ...]")
        print("-" * 40)
        for vertex in sorted(self.vertices):
            neighbors = self.graph[vertex]
            if neighbors:
                print(f"{vertex} -> {neighbors}")
            else:
                print(f"{vertex} -> []")


def dfs_recursive(graph: DirectedWeightedGraph, start_vertex: int) -> List[int]:
    """
    DFS using recursion for directed weighted graph.
    
    Args:
        graph: The directed weighted graph
        start_vertex: Starting vertex for DFS
        
    Returns:
        List of vertices visited in DFS order
    """
    visited = set()
    result = []
    
    def dfs_helper(vertex: int) -> None:
        """Helper function for recursive DFS."""
        # Mark current vertex as visited
        visited.add(vertex)
        result.append(vertex)
        
        # Visit all unvisited neighbors
        for neighbor, weight in graph.get_neighbors(vertex):
            if neighbor not in visited:
                print(f"  Visiting {vertex} -> {neighbor} (weight: {weight})")
                dfs_helper(neighbor)
    
    print(f"DFS Recursive starting from vertex {start_vertex}:")
    dfs_helper(start_vertex)
    return result


def dfs_iterative(graph: DirectedWeightedGraph, start_vertex: int) -> List[int]:
    """
    DFS using iteration (stack) for directed weighted graph.
    
    Args:
        graph: The directed weighted graph
        start_vertex: Starting vertex for DFS
        
    Returns:
        List of vertices visited in DFS order
    """
    visited = set()
    result = []
    stack = [start_vertex]
    
    print(f"DFS Iterative starting from vertex {start_vertex}:")
    
    while stack:
        vertex = stack.pop()
        
        if vertex not in visited:
            visited.add(vertex)
            result.append(vertex)
            print(f"  Visiting vertex {vertex}")
            
            # Add neighbors to stack in reverse order to maintain DFS order
            neighbors = graph.get_neighbors(vertex)
            for neighbor, weight in reversed(neighbors):
                if neighbor not in visited:
                    print(f"    Adding {vertex} -> {neighbor} (weight: {weight}) to stack")
                    stack.append(neighbor)
    
    return result


def dfs_with_path(graph: DirectedWeightedGraph, start_vertex: int, target_vertex: int) -> Optional[List[int]]:
    """
    DFS to find a path from start_vertex to target_vertex.
    
    Args:
        graph: The directed weighted graph
        start_vertex: Starting vertex
        target_vertex: Target vertex to find
        
    Returns:
        Path from start to target, or None if no path exists
    """
    visited = set()
    path = []
    
    def dfs_path_helper(vertex: int) -> bool:
        """Helper function to find path using DFS."""
        if vertex == target_vertex:
            path.append(vertex)
            return True
        
        visited.add(vertex)
        path.append(vertex)
        
        for neighbor, weight in graph.get_neighbors(vertex):
            if neighbor not in visited:
                if dfs_path_helper(neighbor):
                    return True
        
        # Backtrack if no path found through this vertex
        path.pop()
        return False
    
    if dfs_path_helper(start_vertex):
        return path
    return None


def dfs_all_paths(graph: DirectedWeightedGraph, start_vertex: int, target_vertex: int) -> List[List[int]]:
    """
    DFS to find all possible paths from start_vertex to target_vertex.
    
    Args:
        graph: The directed weighted graph
        start_vertex: Starting vertex
        target_vertex: Target vertex
        
    Returns:
        List of all possible paths
    """
    all_paths = []
    
    def dfs_all_paths_helper(vertex: int, path: List[int], visited: Set[int]) -> None:
        """Helper function to find all paths using DFS."""
        if vertex == target_vertex:
            all_paths.append(path[:])  # Make a copy of the path
            return
        
        visited.add(vertex)
        
        for neighbor, weight in graph.get_neighbors(vertex):
            if neighbor not in visited:
                path.append(neighbor)
                dfs_all_paths_helper(neighbor, path, visited)
                path.pop()  # Backtrack
        
        visited.remove(vertex)  # Backtrack
    
    dfs_all_paths_helper(start_vertex, [start_vertex], set())
    return all_paths


def main():
    """Demonstrate DFS on a directed weighted graph."""
    print("=" * 60)
    print("DEPTH-FIRST SEARCH (DFS) FOR DIRECTED WEIGHTED GRAPH")
    print("=" * 60)
    
    # Create a sample directed weighted graph
    graph = DirectedWeightedGraph()
    
    # Add edges: (from, to, weight)
    edges = [
        (0, 1, 4.0),   # 0 -> 1 with weight 4
        (0, 2, 1.0),   # 0 -> 2 with weight 1
        (1, 3, 2.0),   # 1 -> 3 with weight 2
        (2, 1, 3.0),   # 2 -> 1 with weight 3
        (2, 3, 5.0),   # 2 -> 3 with weight 5
        (3, 4, 1.0),   # 3 -> 4 with weight 1
        (4, 2, 2.0),   # 4 -> 2 with weight 2
    ]
    
    for from_vertex, to_vertex, weight in edges:
        graph.add_edge(from_vertex, to_vertex, weight)
    
    # Display the graph
    print("\n1. GRAPH STRUCTURE:")
    graph.display()
    
    # Test DFS recursive
    print("\n2. DFS RECURSIVE:")
    dfs_recursive_result = dfs_recursive(graph, 0)
    print(f"   Result: {dfs_recursive_result}")
    
    # Test DFS iterative
    print("\n3. DFS ITERATIVE:")
    dfs_iterative_result = dfs_iterative(graph, 0)
    print(f"   Result: {dfs_iterative_result}")
    
    # Test DFS path finding
    print("\n4. DFS PATH FINDING:")
    start, target = 0, 4
    path = dfs_with_path(graph, start, target)
    if path:
        print(f"   Path from {start} to {target}: {path}")
    else:
        print(f"   No path found from {start} to {target}")
    
    # Test DFS all paths
    print("\n5. DFS ALL PATHS:")
    all_paths = dfs_all_paths(graph, start, target)
    print(f"   All paths from {start} to {target}:")
    for i, path in enumerate(all_paths, 1):
        print(f"   Path {i}: {path}")
    
    # Test with disconnected component
    print("\n6. DFS WITH DISCONNECTED COMPONENT:")
    graph.add_vertex(5)  # Add isolated vertex
    graph.add_edge(5, 6, 1.0)
    graph.add_vertex(6)
    
    print("   Updated graph:")
    graph.display()
    
    print(f"   DFS from vertex 5: {dfs_recursive(graph, 5)}")
    print(f"   DFS from vertex 0: {dfs_recursive(graph, 0)}")


if __name__ == "__main__":
    main()