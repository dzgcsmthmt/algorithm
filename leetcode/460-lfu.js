// 460. LFU Cache  Least Frequently Used

/*
LFUCache cache = new LFUCache( 2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

class Node{
    constructor(key,val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
} 

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.head = this.tail = null;
        this.map = {};
    }

    addNode(node) {
        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            node.prev = null;
            this.head.prev = node;
            this.head = node;
        }

        this.size++;

    }

    removeNode(node) {

        if (this.size == 0) return null;

        var prev = node.prev;
        var next = node.next;

        if (prev == null && next == null) {
            this.head = this.tail = null;
        } else if (prev == null) {
            next.prev = null;
            this.head = next;
        } else if (next == null) {
            prev.next = null;
            this.tail = prev;
        } else {
            prev.next = next;
            next.prev = next;
        }

        this.size--;

    }

    moveToHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }

    popTail() {
        var node = this.tail;
        this.removeNode(node);
        return node;
    }

    put(key, val) {
        var node;
        if (Object.prototype.hasOwnProperty.call(this.map, key)) {
            node = this.map[key];
            node.val = val;
            this.moveToHead(node);
        } else {
            node = new Node(key,val);
            this.map[key] = node;
            if (this.size == this.capacity) {
                var removed = this.popTail();
                delete this.map[removed.key];
            }
            this.addNode(node);
        }
    }

    get(key) {
        var node;
        if (Object.prototype.hasOwnProperty.call(this.map, key)) {
            node = this.map[key];
            if(node != this.head){
                this.moveToHead(node);
            }
            return node.val;
        }
        return -1;
    }

}


var cache = new LFUCache( 2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4