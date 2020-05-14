function Node(value){
    this.value = value;
    this.next = next;
}

function LinkedList(){
    this.head = null;
}

LinkedList.prototype.add = function(node){
    if(!this.head){
        this.head = node;
        return;
    }

    var cur = this.head;
    while(cur.next){
        cur = cur.next;
    }

    cur.next = node;

}

LinkedList.prototype.print = function(){
    var cur = this.head;
    var arr = [];
    while(cur){
        arr.push(cur.value);
        cur = cur.next;
    }

    console.log( arr.join('-->') );

}

var link = new LinkedList();
link.add(new Node(1));
link.add(new Node(2));
link.add(new Node(3));
link.add(new Node(4));
link.add(new Node(5));
link.print();