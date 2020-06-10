// 59. 滑动窗口的最大值

// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
// 例如，如果输入数组 {2, 3, 4, 2, 6, 2, 5, 1} 及滑动窗口的大小 3，那么一共存在 6 个滑动窗口，他们的最大值分别为 {4, 4, 6, 6, 6, 5}。

function maxInWindows(nums,size){
    var seq = [nums[0]];
    var res = [];
    for(var i = 1;i < size;i++){
        push(i);
    }

    for(var i = size - 1;i < nums.length;i++){
        push(i);
        while(i - (size - 1) > seq[0]){
            seq.shift();
        }
        res.push(nums[seq[0]]);
    }

    function push(i){
        while(seq.length && nums[i] > nums[seq[seq.length - 1]]){
            seq.pop();
        }
        seq.push(i);
    }

    return res;

}

console.log(maxInWindows([2, 3, 4, 2, 6, 2, 5, 1],3));