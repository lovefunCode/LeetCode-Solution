function TreeNode(val, left=null, right=null){
    this.val = (val == undefined ? 0: val)
    this.left = left
    this.right = right
}

const isSameTree = function(p, q){
    if(!p && !q){
        return true
    }
    if(p && q && p.val == q.val){
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
    return false
}