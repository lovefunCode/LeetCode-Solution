function TreeNode(val, left=null, right=null){
    this.val = (val == undefined ? 0 : val) 
    this.left = left
    this.right = right
}



const isSubTree = function(root, subRoot){
    if(!root){
        return !subRoot    // if root is null, check if subRoot is also null
    }
    return isEqual(root, subRoot) 
            || isEqual(root.left, subRoot) 
            || isEqual(root.right, subRoot)
    
}

function isEqual(root, subRoot){
    if(!root && !subRoot){
        return true
    }
    if(!root || !subRoot || root.val != subRoot.val) {
        return false
    }
    return isEqual(root.left, subRoot.left) && isEqual(root.right, subRoot.right)
}

let root = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5));
let subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubTree(root, subRoot)); // Output: true
