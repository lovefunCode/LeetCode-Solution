Sorting Algorithms
## 1. Bubble Sort
Bubble Sort Repeatedly steps through the array, comparing adjacent items, if 2 items are in the worong order, they are swapped. This process repeats, moving the largest unsorted item to the end with each pass, until the entire array is sorted.
### Steps
    1. start at the beginning of the array
    2. compare each pair of adjacent items
    3. swap the items if they are in the wrong order
    4. continue this process until no swaps are needed

## 2. Selecion Sort
Selection Sort sorts an array by repeatedly finding the minimum element from the unordered position and moving it to the beginning
### Steps
    1. start with the first item as the current minimum
    2. compare the current minimum with the rest of the array to find the smallest item
    3. if a smaller item is found, update the current minimum
    4. swap the current minimum with the first unordered item
    5. move to the next position and repeat until the array is sorted

| Algorithm       | Time Complexity (Best) | Time Complexity (Worst) | Space Complexity (Best) | Space Complexity (Worst) |
|-----------------|------------------------|--------------------------|--------------------------|---------------------------|
| Bubble Sort     | O(n)                   | O(n²)                    | O(1)                     | O(1)                      |
| Selection Sort  | O(n²)                  | O(n²)                    | O(1)                     | O(1)                      |
| Insertion Sort  | O(n)                   | O(n²)                    | O(1)                     | O(1)                      |
| Merge Sort      | O(n log n)             | O(n log n)               | O(n)                     | O(n)                      |
| Quick Sort      | O(n log n)             | O(n²)                    | O(log n)                 | O(n)                      |

