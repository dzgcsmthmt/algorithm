
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    add(key) {
        this.root = this.addRe(this.root, key);
        this.size++;
    }
    addRe(node, key) {
        if (node == null) {
            return new Node(key);
        }

        if (node.key < key) {
            node.right = this.addRe(node.right, key);
        } else {
            node.left = this.addRe(node.left, key);
        }

        return node;
    }
    getHeight(node) {
        if (node == null) {
            return 0;
        }
        // if(node.left == null && node.right == null){
        //     return 1;
        // }
        return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }
    print() {
        var root = this.root;
        var height = this.getHeight(root);
        var strLenPerLine = 0;
        for (var i = 0; i < height; i++) {
            strLenPerLine += 2 ** i;
        }
        // console.log(height,strLenPerLine);

        var res = [];
        for (var i = 0; i < height; i++) {
            res[i] = [];
            for (var j = 0; j < strLenPerLine; j++) {
                res[i][j] = '     ';
            }
        }

        setKey(root, 0, Math.floor(strLenPerLine / 2));
        res.forEach((item, index) => {
            console.log(item.join(''));
            let len = 2 ** (height - index - 2) < 1 ? 0 : 2 ** (height - index - 2);
            for (var k = 0; k < len; k++) {
                console.log("");
            }
        })
        // console.log(res);

        function setKey(node, level, pos) {
            // console.log(height,'level',level,'pos',pos);
            if (node == null) {
                return;
            }
            let str = node.key;
            for (var j = 0; j < 5 - node.key.toString().length; j++) {
                if (j % 2) {
                    str += ' ';
                } else {
                    str = ' ' + str;
                }
            }
            res[level][pos] = str;
            if (node.left) {
                setKey(node.left, level + 1, pos - 2 ** (height - level - 2));
            }
            if (node.right) {
                setKey(node.right, level + 1, pos + 2 ** (height - level - 2));
            }
        }
       
    }
}

var avl = new Bst();

avl.add(3);
avl.add(2);
avl.add(8);
avl.add(7);
avl.add(9);
avl.print();
console.log(sortedArrayToBST([-10,-3,0,5,9]));

function sortedArrayToBST(nums){
    return toBST(nums,0,nums.length - 1);
}

function toBST(nums,l,r){
    if(l > r){
        return null;
    }
    var mid = (l + (r-l)/2) | 0;
    var node = new Node(nums[mid]);
    node.left = toBST(nums,l,mid - 1);
    node.right = toBST(nums,mid + 1,r);
    return node;
}