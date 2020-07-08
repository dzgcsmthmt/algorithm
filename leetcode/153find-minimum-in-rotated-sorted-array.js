// 153. Find Minimum in Rotated Sorted Array
/***
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

    (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

    Find the minimum element.

    You may assume no duplicate exists in the array.

    Example 1:

    Input: [3,4,5,1,2]
    Output: 1
    Example 2:

    Input: [4,5,6,7,0,1,2]
    Output: 0
 *
 *
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var len = nums.length;
    if(nums[0] < nums[len - 1] || len == 1){
        return nums[0];
    }
    var left = 0;
    var right = len - 1;
    var mid;
    while(left < right){
        mid = (left + right) / 2 >> 0;

        if(nums[mid] > nums[mid + 1]){
            return nums[mid + 1];
        }

        if(nums[mid] < nums[mid - 1]){
            return nums[mid];
        }

        if(nums[mid] > nums[left]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }

    }


};

console.log(findMin([3,4,5,1,2]));
console.log(findMin([4,5,6,7,0,1,2]));
