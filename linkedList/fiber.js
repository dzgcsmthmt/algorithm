class Node {
    constructor(val) {
        this.val = val;
        this.return = null;
        this.child = null;
        this.sibling = null;
    }
}

var data = {
    key: 'a1',
    children: [
        { key: 'b1', children: [] },
        { key: 'b2', children: [{ key: 'c1', children: [{ key: 'd1', children: [] }, { key: 'd2', children: [] }] }] },
        { key: 'b3', children: [{ key: 'c2', children: [] }] }
    ]
}

function buildTree(data) {
    if (data == null) return null;
    var node = new Node(data.key);
    var first, current;
    for (var i = 0; i < data.children.length; i++) {
        if (i == 0) {
            current = first = new Node(data.children[i].key);
            node.child = first;
            first.return = node;
        } else {
            current.sibling = new Node(data.children[i].key);
            current = current.sibling;
            current.return = node;
        }
        var child = buildTree(data.children[i].children[0]);
        if (child) {
            current.child = child;
            child.return = current;
        }
    }
    return node;
}
var root = buildTree(data);
workInProgress = root;

function workLoop() {
    while (workInProgress !== null) {
        workInProgress = performUnitOfWork(workInProgress);
    }
}

workLoop(workInProgress);

function performUnitOfWork(workInProgress) {
    let next = beginWork(workInProgress);
    if (next === null) {
        next = completeUnitOfWork(workInProgress);
    }
    return next;
}

function beginWork(workInProgress) {
    console.log('work performed for ' + workInProgress.val);
    return workInProgress.child;
}

function completeUnitOfWork(workInProgress) {
    while (true) {
        let returnFiber = workInProgress.return;
        let siblingFiber = workInProgress.sibling;

        nextUnitOfWork = completeWork(workInProgress);

        if (siblingFiber !== null) {
            // If there is a sibling, return it
            // to perform work for this sibling
            return siblingFiber;
        } else if (returnFiber !== null) {
            // If there's no more work in this returnFiber,
            // continue the loop to complete the parent.
            workInProgress = returnFiber;
            continue;
        } else {
            // We've reached the root.
            return null;
        }
    }
}

function completeWork(workInProgress) {
    console.log('work completed for ' + workInProgress.val);
    return null;
}