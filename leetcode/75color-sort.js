/**
 * 75. Sort Colors
 * we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * 
 */


 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var i = 0;
    var l = 0;
    var r = nums.length - 1;

    while(i <= r){
        if(nums[i] == 0){
            swap(nums,l++,i++);
        }else if(nums[i] == 1){
            i++;
        }else{
            swap(nums,r--,i);
        }
    }

    return nums;
};

function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


console.log(sortColors([2,0,2,1,1,0,1]));