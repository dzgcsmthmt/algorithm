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

//5. 翻转一个数的比特位
function reverseBits(n) {
    var ret = 0;
    for (var i = 0; i < 32; i++) {
        ret <<= 1;
        ret |= (n & 1);
        n >>>= 1;
    }
    return ret;
}

//6. 不用额外变量交换两个整数
function swap(a,b){
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
}

//7. 判断一个数是不是 2 的 n 次方
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) == 0;
}

//8. 判断一个数是不是 4 的 n 次方
function isPowerOfFour(num) {
    return num > 0 && (num & (num - 1)) == 0 && (num & 0b01010101010101010101010101010101) != 0;
}

//9. 判断一个数的位级表示是否不会出现连续的 0 和 1
//对于 1010 这种位级表示的数，把它向右移动 1 位得到 101，这两个数每个位都不同，因此异或得到的结果为 1111。
function hasAlternatingBits(n) {
    var a = (n ^ (n >> 1));
    return (a & (a + 1)) == 0;
}