// 1. 找出两个链表的交点
// 设 A 的长度为 a + c，B 的长度为 b + c，其中 c 为尾部公共部分长度，可知 a + c + b = b + c + a。

function getIntersectionNode(headA,headB){
    var n1 = headA,n2 = headB;
    while(n1 != n2){
        n1 = n1 == null ? headB : n1.next;
        n2 = n2 == null ? headA : n2.next;
    }

    return n1;
}

// 2. 链表反转
function reverseLink(head){
    var dummyHead = new Node(-1);
    var next;
    while (head != null) {
        next = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = next;
    }
    return newHead.next;
}

function reverseLinkRecur(head){
    if (head == null || head.next == null) {
        return head;
    }
    var next = head.next;
    var newHead = reverseLinkRecur(next);
    next.next = head;
    head.next = null;
    return newHead;
}

// 3. 归并两个有序的链表

function mergeTwoLists(l1,l2){
    if(l1 == null){return l2};
    if(l2 == null){return l1};

    if(l1.value < l2.value){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }

}


//4.从有序链表中删除重复节点

function deleteDuplicates(head){
    var current = head;
    var prev = head;
    while(current.next){
        if(current.next.value == prev.value){
            current = current.next;
        }else{
            prev.next = current.next;
            prev = current.next;
            current = current.next;
        }
    }

    return head;
}

// 5. 删除链表的倒数第 n 个节点
function removeNthFromEnd(head,n){
    var fast = head;
    while(n-- > 0){
        fast = fast.next;
    }

    if(fast == null){return head.next};

    var slow = head;

    while(fast.next != null){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;

}

// 6. 交换链表中的相邻结点

function swapPairs(head){
    var dummyHead = new Node(-1);
    var pre = dummyHead;
    pre.next = head;
    var next;
    while(pre.next && pre.next.next){
        var l1 = pre.next;
        var l2 = pre.next.next;

        next = l2.next;

        l1.next = next;
        l2.next = l1;
        pre.next = l2;

        pre = l1;
    }

    return dummyHead.next;
}

// 7. 链表求和

function addTwoNumbers(l1,l2){
    var arr1 = buildStack(l1);
    var arr2 = buildStack(l2);
    var len = Math.max(arr1.length,arr2.length);
    var carry = 0;
    var sum = 0;
    var res = [];
    var l = new reverseLink();
    for(var i = 0;i < len;i++){
        sum = (arr1[i] ? arr1[i].value : 0) + (arr2[i] ? arr2[i].value : 0) + carry;
        res[i] =  sum % 10;
        carry = (sum / 10) >> 0;
    }
    if(carry){
        l.add(new Node(carry));
    }
    for(var i = res.length - 1; i >= 0; i--){
        l.add(new Node(res[i]));
    }
    return l;
}

function buildStack(l1){
    var arr = [];
    var head = l1.head;
    while(head){
        arr.unshift(head);
        head = head.next;
    }
    return arr;
}

// 8. 回文链表
function isPalindrome(head){
    if(head == null || head.next == null) return true;
    var slow = head,fast = head.next;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    //奇数的情况
    if(fast != null){
        slow = slow.next;
    }

    cut(head,slow);
    return isEqual(head,reverse(slow));
}

function cut(head,cutNode){
    while(head.next != cutNode){
        head = head.next;
    }
    head.next = null;
}

function reverse(head){
    var next,node = null;
    while(head){
        next = head.next;
        head.next = node;
        node = head;
        head = next;
    }
    return node;
}

function isEqual(h1,h2){
    while(h1 != null && h2 != null){
        if(h1.value != h2.value){return false};
        h1 = h1.next;
        h2 = h2.next;
    }
    return true;
}

//9 分隔链表

function splitListToParts(head, k) {
    var len = 0;
    var cur = head;
    var res = [];
    while(cur){
        len++;
        cur = cur.next;
    }

    var g = len / k >> 0;
    var mod = len % k;
    cur = head;
    for(var i = 0;cur != null & i < k;i++){
        res[i] = [];
        var len2 = g + (mod-- > 0 ? 1 : 0);
        for(var j = 0; j < len2;j++){
            res[i].push(cur.value);
            if(j != len2 -1){
                cur = cur.next;
            }
        }
        var next = cur.next;
        cur.next = null;
        cur = next;
    }
    return res;
}


//10. 链表元素按奇偶聚集
function oddEvenList(head){
    if(head == null || head.next == null)
        return head;
    var odd = head,even = head.next,evenHead = head.next;
    while(even && even.next){
        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
}