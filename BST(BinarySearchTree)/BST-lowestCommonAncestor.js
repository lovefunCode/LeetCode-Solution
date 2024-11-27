function TreeNode(val){
    this.val = val
    this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q){
    if(!root) return null
    if(root.val < q.val && root.val < p.val){
        return lowestCommonAncestor(root.right, p, q)
    }
    if(root.val > p.val && root.val > q.val){
       return lowestCommonAncestor(root.left, p, q)
    }
    return root.val
}

const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

const p = root.left; // Node with value 2
const q = root.left.right; // Node with value 4

console.log(lowestCommonAncestor(root, p, q)); // Output: Node with value 2