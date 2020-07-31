// 3. 两节点的最长路径
// 543. Diameter of Binary Tree (Easy)
var max = 0;

function diameterOfBinaryTree(root) {
    depth(root);
    return max;
}

function depth(root) {
    if (root == null) return 0;
    var leftDepth = depth(root.left);
    var rightDepth = depth(root.right);
    max = Math.max(max, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
}

//4. 翻转树
// 226. Invert Binary Tree (Easy)
function invertTree(root){
    if(root == null){
        return;
    }

    var left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);

    return root;

}

// 5. 归并两棵树
// 617. Merge Two Binary Trees (Easy)
function mergeTrees(t1,t2){
    if(t1 == null && t2 == null) return null;
    if(t1 == null) return t2;
    if(t2 == null) return t1;

    var node = new Node(t1.key + t2.key);
    node.left = mergeTrees(t1.left,t2.left);
    node.right = mergeTrees(t1.right,t2.right);
    return node;

}


// 6. 判断路径和是否等于一个数
// Leetcdoe : 112. Path Sum (Easy)

function hasPathSum(root,num){
    if(root == null) return false;
    if(root.left == null && root.right == null){
        return root.key == num;
    }
    return hasPathSum(root.left,num - root.key) || hasPathSum(root.right,num - root.key);
}

// 8. 子树
// 572. Subtree of Another Tree (Easy)

function isSubtree(root1,root2){
    if(root1 == null && root2 == null){
        return false;
    }

    return isSubtreeWithRoot(root1,root2) || isSubtreeWithRoot(root1.left,root2) || isSubtreeWithRoot(root1.right,root2);

}

function isSubtreeWithRoot(n1,n2){
    if(n1 == null && n2 == null){
        return true;
    }
    if(n1 == null || n2 == null){
        return false;
    }
    if(n1.key != n2.key){
        return false;
    }
    return isSubtreeWithRoot(n1.left,n2.left) && isSubtreeWithRoot(n1.right,n2.right);
}

// 9. 树的对称
// 101. Symmetric Tree (Easy)

function isSymmetric(root){
    if(root == null) return true;
    return isSymmetricSub(root.left,root.right);
}

function isSymmetricSub(n1,n2){
    if(n1 == null && n2 == null){
        return true;
    }
    if(n1 == null || n2 == null){
        return false;
    }
    if(n1.key != n2.key){
        return false;
    }
    return isSymmetric(n1.left,n2.right) && isSymmetric(n1.right,n2.left);
}

// 11. 统计左叶子节点的和
// 404. Sum of Left Leaves (Easy)
function sumOfLeftLeaves(root){
    if(root == null) return 0;
    if(isLeaf(root.left)) return root.left.key + sumOfLeftLeaves(root.right);
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}

function isLeaf(node){
    if(node == null){
        return false;
    }

    return node.left == null && node.right == null;
}


// 1. 一棵树每层节点的平均数
// 637. Average of Levels in Binary Tree (Easy)
function averageOfLevels(root){
    var res = [];
    var queue = [];
    if(root == null){return [0]};

    queue.push(root);
    var size = 0;

    while(size = queue.length){
        var num = 0;
        for(var i = 0;i < size;i++){
            let node = queue.shift();
            num += node.key;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }

        res.push(num / size);
    }

    return res;

}

// 1. 非递归实现二叉树的前序遍历
// 144. Binary Tree Preorder Traversal (Medium)

function preorderTraversal(root){
    var res = [];
    var stack = [];
    var current;
    if(root == null) return null;

    stack.push(root);

    while(stack.length){
        current = stack.pop();
        res.push(current.key);
        if(current.right)stack.push(current.right);
        if(current.left)stack.push(current.left);
    }

    return res;

}

// 2. 非递归实现二叉树的后序遍历
// 145. Binary Tree Postorder Traversal (Medium)
function postorderTraversal(root){
    var res = [];
    var stack = [];
    var current;
    if(root == null) return null;

    stack.push(root);

    while(stack.length){
        current = stack.pop();
        res.push(current.key);
        if(current.left)stack.push(current.left);
        if(current.right)stack.push(current.right);
    }

    return res.reverse();

}


// 3. 非递归实现二叉树的中序遍历
// 94. Binary Tree Inorder Traversal (Medium)

function inorderTraversal(root){
    var res = [];
    if(root == null) return null;
    var stack = [];
    var cur = root;
    // stack.push(root);

    while(cur != null || stack.length){
        while(cur != null){
            stack.push(cur);
            cur = cur.left;
        }

        var node = stack.pop();
        res.push(node.key);
        cur = node.right;
    }

    return res;
}



// 4. 二叉查找树的最近公共祖先
// 235. Lowest Common Ancestor of a Binary Search Tree (Easy)

function lowestCommonAncestor(root,p,q){
    if(root.key > p && root.key > q){return lowestCommonAncestor(root.left,p,q)};
    if(root.key < p && root.key < q){return lowestCommonAncestor(root.right,p,q)};
    return root;
}

// 5. 二叉树的最近公共祖先
// 236. Lowest Common Ancestor of a Binary Tree (Medium)

function lowestCommonAncestor2(root,p,q){
    if(root == null || root.key == p || root.key == q) return root;
    var left = lowestCommonAncestor2(root.left,p,q);
    var right = lowestCommonAncestor2(root.right,p,q);
    return left == null ? right : right == null ? left : root;
}

// 6. 从有序数组中构造二叉查找树
// 108. Convert Sorted Array to Binary Search Tree (Easy)
function sortedArrayToBST(nums){
    return toBST(nums,0,nums.length - 1);
}

function toBST(nums,l,r){
    if(l > r){
        return null;
    }
    var mid = (l + r) >> 1;
    var node = new Node(nums[mid]);
    node.left = toBST(nums,l,mid - 1);
    node.right = toBST(nums,mid + 1,r);
    return node;
}