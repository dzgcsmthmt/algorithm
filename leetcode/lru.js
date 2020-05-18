class DLinkedNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.count = 0;
    }

    addNode(node) {
        if (!this.head) {
            this.head = this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.count++;
    }

    removeNode(node) {

        var prev = node.prev;
        var next = node.next;

        if (prev == null) {
            this.head = next;
            this.head.prev = null;
            this.count--;
            return;
        }

        prev.next = next;

        if (next == null) {
            this.tail = prev;
        }else{
            next.prev = prev;
        }
        this.count--;
    }

    moveToHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }

    popTail() {
        let node = this.tail;
        this.removeNode(this.tail);
        return node;
    }

}

class LRUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.cache = {};
        this.dLinkedList = new DLinkedList();
    }



    get(key) {
        let node = this.cache[key];
        if (node == null) {
            return -1; // should raise exception here.
        }

        // move the accessed node to the head;
        this.dLinkedList.moveToHead(node);

        return node.value;
    }


    set(key, value) {
        let node = this.cache[key];

        if (node == null) {

            let newNode = new DLinkedNode(key, value);

            this.cache[key] = newNode;
            this.dLinkedList.addNode(newNode);

            if (this.dLinkedList.count > this.capacity) {
                // pop the tail
                let node = this.dLinkedList.popTail();
                delete this.cache[node.key];
            }
        } else {
            // update the value.
            node.value = value;
            this.dLinkedList.moveToHead(node);
        }
    }

}

var lruCache = new LRUCache(5);

lruCache.set('key1',1);
lruCache.set('key2',2);
lruCache.set('key3',3);
lruCache.set('key4',4);
lruCache.set('key5',5);
lruCache.set('key6',6);
