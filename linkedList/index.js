function Node(val){
    this.val = val;
    this.next = null;
}

function LinkedList(){
    this.length = 0;
    this.head = null;
}

LinkedList.prototype = {
    constructor: LinkedList,
    append: function(node){
        if(!(node instanceof Node)){
            node = new Node(node);
        }
        var currentNode = this.head;
        if(!this.length){
            this.head = node;
        }else{
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    },
    insert: function(position,node){
        var current = this.head;
        var index = 0,previous;
        if(this.length == 0){
            this.append(node);
            return;
        }
        if(position > -1 && position < this.length){
            if(position == 0){
                this.head = node;
                node.next = current;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;
            }
            this.length++;
            return true;
        }else{
            return false;
        }
    },
    removeAt: function(position){
        var current = this.head;
        var index = 0,previous;
        if(position > -1 && position < this.length){
            if(position == 0){
                this.head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current;
        }else{
            return null;
        }
    },
    remove: function(node){
        var index = this.indexOf(node);
        return this.removeAt(index);
    },
    indexOf: function(node){
        var current = this.head;
        var index = 0,previous;
        while(current){
            if(current == node){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    },
    isEmpty: function(){
        return this.length == 0;
    },
    size: function(){
        return this.length;
    },
    toString: function(){
        var current = this.head;
        var str = [];

        while(current){
            str.push(current.val);
            current = current.next;
        }

        return str.join('--->');
    },
    print: function(){
        console.log(this.toString());
    }
}

var l1 = new LinkedList();

l1.append(1);
l1.append(3);
l1.append(5);
l1.append(7);
l1.append(9);

var l2 = new LinkedList();

l2.append(2);
l2.append(4);
l2.append(6);
l2.append(8);

//3. 归并两个有序的链表
function mergeTwoLists(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
mergeTwoLists(l1.head,l2.head);
//l1.print();
//l2.print()

//4从有序链表中删除重复节点
function deleteDuplicates(head) {
    if (head == null || head.next == null) return head;
    head.next = deleteDuplicates(head.next);
    return head.val == head.next.val ? head.next : head;
}
//非递归
function deleteDuplicatesNR(head) {
    var prev = head;
    var cur = head;
    while(cur){
        cur = cur.next;
        if(cur && cur.val == prev.val){
           prev.next = cur.next;
           cur = cur.next;
        }
        prev = prev.next
    }
}

var l3 = new LinkedList();

l3.append(1);
l3.append(5);
l3.append(5);
l3.append(7);
l3.append(7);
l3.append(9);

//deleteDuplicatesNR(l3.head);
//l3.print()


//5. 删除链表的倒数第 n 个节点
function removeNthFromEnd(head, n) {
    var fast = head;
    while (n-- > 0) {
        fast = fast.next;
    }
    if (fast == null) return head.next;
    var slow = head;
    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
}
//removeNthFromEnd(l2.head,2);
//l2.print()


//6. 交换链表中的相邻结点
//Input: (7 -> 2 -> 4 -> 3)
//Output: 2 -> 7 -> 3 -> 4
function swapPairs(head) {
    var ll = new LinkedList();
    ll.append(-1);
    var node = ll.head;
    node.next = head;
    var pre = node;
    while (pre.next != null && pre.next.next != null) {
        var l1 = pre.next, l2 = pre.next.next;
        var next = l2.next;
        l1.next = next;
        l2.next = l1;
        pre.next = l2;

        pre = l1;
    }
    return ll;
}

var l4 = new LinkedList();

l4.append(7);
l4.append(2);
l4.append(4);
l4.append(3);

console.log(swapPairs(l4.head));

//7. 链表求和
//Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 8 -> 0 -> 7

function addTwoNumbers(l1,l2){
    var stack1 = buildStack(l1);
    var stack2 = buildStack(l2);
    var linked = new LinkedList();
    var carry = 0;
    while(!stack1.isEmpty() || !stack2.isEmpty() || carry){
        var val1 = stack1.isEmpty() ? 0 : stack1.pop();
        var val2 = stack2.isEmpty() ? 0 : stack2.pop();
        var sum = val1 + val2 + carry;
        var node = new Node(sum);
        node.next = linked.head;
        linked.head = node;
        carry = (sum / 10) >> 0;
    }

    return linked;

}

function buildStack(l){
    var stack = new Stack();
    var n = l.head;
    while(n){
        stack.push(n.val);
        n = n.next;
    }
    return stack;
}


var l4 = new LinkedList();

l4.append(7);
l4.append(2);
l4.append(4);
l4.append(3);

var l5 = new LinkedList();
l5.append(5);
l5.append(6);
l5.append(4);
//addTwoNumbers(l4,l5).print()