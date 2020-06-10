// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
/*Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]*/



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res = [];
    if(nums.length < 3) return [];
    nums.sort((a,b) => a - b);

    console.log(nums);

    var l = 0,r = nums.length - 1;

    for(var i = 0; i < nums.length;i++){
        if(i > 0 && nums[i] == nums[i - 1]) continue;
        l = i + 1;
        r = nums.length - 1;
        while(l < r){
            if(nums[i] + nums[l] + nums[r] < 0){
                l++;
            }else if(nums[i] + nums[l] + nums[r] > 0){
                r--;
            }else{
                res.push([nums[i],nums[l],nums[r]]);
                l++;
                r--;
            }
        }
    }

    return res;

};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));