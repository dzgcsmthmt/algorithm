function Stack(){
    this.items = [];
}

Stack.prototype = {
    constructor: Stack,
    push: function(item){
        this.items.push(item);
    },
    pop: function(){
        return this.items.pop();
    },
    peek: function(){
        return this.items[this.size() - 1];
    },
    isEmpty: function(){
        return this.items.length == 0;
    },
    size: function(){
        return this.items.length;
    },
    clear: function(){
        this.items.length = 0;
    },
    print: function(){
        console.log(this.items.toString());
    }
}

//5. 数组中元素与下一个比它大的元素之间的距离
function dailyTemperatures(temperatures) {
    let n = temperatures.length;
    let dist = new Array(n);
    let indexs = new Stack();
    for (let curIndex = 0; curIndex < n; curIndex++) {
        while (!indexs.isEmpty() && temperatures[curIndex] > temperatures[indexs.peek()]) {
            let preIndex = indexs.pop();
            dist[preIndex] = curIndex - preIndex;
        }
        indexs.push(curIndex);
    }
    return dist;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))


//6. 循环数组中比当前元素大的下一个元素

function nextGreaterElements(nums) {
    let n = nums.length;
    let next = new Array(n).fill(-1);
    let pre = new Stack();
    for (let i = 0; i < n * 2; i++) {
        let num = nums[i % n];
        while (!pre.isEmpty() && nums[pre.peek()] < num) {
            next[pre.pop()] = num;
        }
        if (i < n){
            pre.push(i);
        }
    }
    return next;
}

console.log(nextGreaterElements([1,2,1]));