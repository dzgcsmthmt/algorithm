// 42. Trapping Rain Water
/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 * Example:
    Input: [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
 */

//每个台阶可积水的高度为min(左右最高的柱子） - 自身的高度

 /**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var res = 0;
    if(height.length <= 2) return res;

    var leftMaxDp = new Array(height.length).fill(0);
    var rightMaxDp = new Array(height.length).fill(0);

    var lastInd = height.length - 2;

    leftMaxDp[0] = height[0];
    for(var i = 1;i <= lastInd;i++){
        leftMaxDp[i] = Math.max(height[i - 1],leftMaxDp[i - 1]);
    }

    rightMaxDp[lastInd + 1] = height[lastInd + 1];
    for(var i = lastInd;i > 0;i--){
        rightMaxDp[i] = Math.max(height[i + 1],rightMaxDp[i + 1]);
    }

    for(var i = 1;i <= lastInd;i++){
        if(leftMaxDp[i] > height[i] && rightMaxDp[i] > height[i]){
            res += Math.min(leftMaxDp[i],rightMaxDp[i]) - height[i];
        }
    }

    return res;
    
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([2,0,2]));