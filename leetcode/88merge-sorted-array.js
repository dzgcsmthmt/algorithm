/**
 * 
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 
 * Input:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    Output: [1,2,2,3,5,6]
 * 
 */

 /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var l1 = m - 1;
    var l2 = nums2.length - 1;
    var index = nums1.length - 1;
    while (l2 >= 0) {
        if (l1 >= 0 && nums1[l1] > nums2[l2]) {
            nums1[index--] = nums1[l1--];
        } else {
            nums1[index--] = nums2[l2--];
        }
    }

};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));