/**
 * LRUCache cache = new LRUCache(缓存容量);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
 */

class Node{
    constructor(key,val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
} 

class LRUCache {
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


var cache = new LRUCache(3);

/*
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4
*/
// [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]]

cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);    
cache.put(4, 4);   
console.log(cache.get(4));
console.log(cache.get(3));
console.log(cache.get(2));  
console.log(cache.get(1));
cache.put(5,5);  
console.log(cache.get(1));
console.log(cache.get(2));  
console.log(cache.get(3));  
console.log(cache.get(4));  
console.log(cache.get(5));  