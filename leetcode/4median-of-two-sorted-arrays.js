// 4. Median of Two Sorted Arrays
/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
    Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
    You may assume nums1 and nums2 cannot be both empty.

    Example 1:
    nums1 = [1, 3]
    nums2 = [2]

    The median is 2.0

    Example 2:
    nums1 = [1, 2]
    nums2 = [3, 4]

    The median is (2 + 3)/2 = 2.5
 */

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
var findMedianSortedArrays = function (nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var arr = [];

    var l1 = 0;
    var l2 = 0;

    while (l1 < len1 && l2 < len2) {
        if (nums1[l1] < nums2[l2]) {
            arr.push(nums1[l1]);
            l1++;
        } else {
            arr.push(nums2[l2]);
            l2++;
        }
    }

    while (l1 < len1) {
        arr.push(nums1[l1++]);
    }

    while (l2 < len2) {
        arr.push(nums2[l2++]);
    }

    let len = arr.length;

    if (len % 2) {
        return arr[len >> 1];
    } else {
        return (arr[len >> 1] + arr[(len >> 1) - 1]) / 2;
    }

};

//2分搜索，先取中间的值，2分搜索短的数组   正常的应该是 m2 > m1 > m2 - 1  如果m1 < m2 - 1说明n1太少 ，否则找最小的大于m2 - 1的值， 边界情况需要处理 ，m1为0或者m2为0的情况

var findMedianSortedArrays = function (nums1, nums2) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    // Make sure n1 <= n2
    if (n1 > n2) return findMedianSortedArrays(nums2, nums1);

    const k = (n1 + n2 + 1) >> 1;

    let l = 0;
    let r = n1;

    while (l < r) {
        let m1 = l + ((r - l) >> 1);
        let m2 = k - m1;
        if (nums1[m1] < nums2[m2 - 1])
            l = m1 + 1;
        else
            r = m1;
    }

    let m1 = l;
    let m2 = k - l;

    const c1 = Math.max(m1 <= 0 ? nums2[m2 - 1] : nums1[m1 - 1],
        m2 <= 0 ? Number.MIN_VALUE : nums2[m2 - 1]);

    if ((n1 + n2) % 2 == 1)
        return c1;

    const c2 = Math.min(m1 >= n1 ? Number.MAX_VALUE : nums1[m1],
        m2 >= n2 ? Number.MAX_VALUE : nums2[m2]);

    return (c1 + c2) * 0.5;
};


console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));