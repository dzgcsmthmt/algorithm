// 238. Product of Array Except Self
/**
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
Note: Please solve it without division and in O(n).
 * 
 */


 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //思路 自身左侧的乘积 * 自身右侧的乘积
    if(nums.length <= 1) return [0];
    let len = nums.length;
    let res = [];
    let leftProducts = [];
    let rightProducts = [];

    leftProducts[0] = 1;
    rightProducts[len - 1] = 1;
    // for(var i = 1; i < len; i++){
    //     leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    // }

    for(var i = len - 2; i>=0;i--){
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    for(var i = 0;i < len;i++){
        if(i > 0){
            leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
        }
        res[i] = leftProducts[i] * rightProducts[i];
    }

    return res;

};


console.log(productExceptSelf([1,2,3,4]));