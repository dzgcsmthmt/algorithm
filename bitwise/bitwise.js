//1. 统计两个数的二进制表示有多少位不同

function hammingDistance(x, y) {
    var z = x ^ y;
    var cnt = 0;
    while (z != 0) {
        z &= (z - 1);
        cnt++;
    }
    return cnt;
}

//2. 数组中唯一一个不重复的元素

function singleNumber(nums) {
    return nums.reduce((accu,cur) => accu ^ cur);
}

//3. 找出数组中缺失的那个数
function missingNumber(nums) {
    return nums.reduce((accu,cur,index) => accu ^ cur ^ index) ^ nums.length;
}

//4. 数组中不重复的两个元素
function twoNumbers(nums) {
    var diff = nums.reduce((accu,cur) => accu ^ cur);
    diff &= -diff;  // 得到最右一位
    var ret = [];
    for (let num of nums) {
        if ((num & diff) == 0) ret[0] ^= num;
        else ret[1] ^= num;
    }
    return ret;
}