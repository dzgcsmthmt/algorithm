// 37. 序列化二叉树

function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function Tree(){
    this.root = null;
}

Tree.prototype.add = function(val){
    var node = new Node(val);

    this.root = this._add(this.root,node);

}

Tree.prototype._add = function(root,node){
    if(root == null) return node;
    if(root.val > node.val){
        root.left = this._add(root.left,node);
    }else{
        root.right = this._add(root.right,node);
    }
    return root;
}


var avl = new Tree();

avl.add(3);
avl.add(2);
avl.add(8);
avl.add(7);
avl.add(9);

console.log(avl);

function serialize(root){
    if (root == null)
        return "#";
    return root.val + " " + serialize(root.left) + " " + serialize(root.right);
}

var deserializeStr = '';
function deserialize(str){
    deserializeStr = str;
    return _deserialize();
}

function _deserialize(){
    if(deserializeStr == '') return null;
    var index = deserializeStr.indexOf(' ');
    var val = deserializeStr.substring(0,index);
    if(index == -1) return deserializeStr == '#' ? null : new Node(deserializeStr);
    deserializeStr = deserializeStr.substr(index + 1);
    if(val == '#') return null;
    var root = new Node(val);

    root.left = _deserialize();
    root.right = _deserialize();

    return root;
}

var str = '';
console.log(str = serialize(avl.root));

console.log(deserialize(str));