// 41. First Missing Positive
/***
 * Given an unsorted integer array, find the smallest missing positive integer.

    Example 1:

    Input: [1,2,0]
    Output: 3
    Example 2:

    Input: [3,4,-1,1]
    Output: 2
    Example 3:

    Input: [7,8,9,11,12]
    Output: 1
 * 
 * 
 */


/**
* @param {number[]} nums
* @return {number}
*/
var firstMissingPositive = function (nums) {
    var len = nums.length;

    for (let i = 0; i < len; i++) {
        // 前两个是在判断是否成为索引
        // 后一个是在判断，例如 3 在不在索引 2 上
        // 即 nums[i] ?= nums[nums[i]-1] 这里要特别小心
        while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] != nums[i]) {
            // 第 3 个条件不成立的索引的部分是 i 和 nums[i]-1
            swap(nums, nums[i] - 1, i);
        }
    }

    for (var i = 0; i < len; i++) {
        // [1,-2,3,4]
        // 除了 -2 其它都满足：i+1 = num[i]
        if (nums[i] - 1 != i) {
            return i + 1;
        }
    }

    return len + 1;


};

function swap(nums, index1, index2) {
    if (index1 == index2) {
        return;
    }
    var temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));