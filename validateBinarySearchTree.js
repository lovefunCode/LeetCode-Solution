// BST(Binary Search Tree) : 
//  1. left subtree of all node less than root
//  2. right subtree of all node greater than root

// Recursion boilerplate:  
//  1. base cases return to quit the recursion
//  2. recurrence relation 

// Time Complexity O(n)
// Space complexity O(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

function isValidBST(root){
    function recurse(root, max, min){
        if(root === null) return true
        if(root.val >= max || root.val <= min) return false
        return recurse(root.left, root.val, min) && recurse(root.right, max, root.val)
    }
    return recurse(root, Infinity, -Infinity)
}