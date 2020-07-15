/**
* 92. 背包问题

    描述
    在n个物品中挑选若干物品装入背包，最多能装多满？假设背包的大小为m，每个物品的大小为A[i]

    你不可以将物品进行切割。

    样例
    如果有4个物品[2, 3, 5, 7]

    如果背包的大小为11，可以选择[2, 3, 5]装入背包，最多可以装满10的空间。

    如果背包的大小为12，可以选择[2, 3, 7]装入背包，最多可以装满12的空间。

    函数需要返回最多能装满的空间大小。
**/

function backPack(m,A){
    var n = A.length;
    if(n == 0) return 0;

    var dp = new Array(n + 1).fill(0).map(item => new Array(m + 1).fill(false));

    dp[0][0] = true;


    for(var i = 1; i <= n;i++){
        for(var j = 0; j <= m;j++){
            dp[i][j] = dp[i - 1][j];
            if(j >= A[i - 1]){
                dp[i][j] = dp[i][j] || dp[i - 1][j - A[i - 1]]; 
            }
        }
    }

    // console.log(dp);
    var res = 0;
    for(var j = m;j >= 0;j--){
        if(dp[n][j] == true){
            return j;
        }
    }
    return 0;
}

console.log(backPack(11,[2, 3, 5, 7]));

/**
* Backpack V
    Given n items with size nums[i] which an integer array and all positive numbers.
    An integer target denotes the size of a backpack. Find the number of possible fill the backpack.
    Each item may only be used once

    Example
    Given candidate items [1,2,3,3,7] and target 7,

    A solution set is:
    [7]
    [1, 3, 3]
*/

function backPackV(nums,target){
    var n = nums.length;
    if(n == 0) return 0;

    var dp = new Array(target + 1).fill(0);

    dp[0] = 1;

    for(var i = 1; i <= n;i++){
        for(var j = target;j >= 0;j--){
            if(j >= nums[i - 1]){
                dp[j] += dp[j - nums[i - 1]];
            }
        }
    }

    // console.log(dp);

    return dp[target];
}

console.log(backPackV([1,2,3,3,7],7))

/**
* Backpack VI
* Given an integer array nums with all positive numbers and no duplicates, 
    find the number of possible combinations that add up to a positive integer target.

    Notice
    The different sequences are counted as different combinations.

    Example
    Given nums = [1, 2, 4], target = 4

    The possible combination ways are:
    [1, 1, 1, 1]
    [1, 1, 2]
    [1, 2, 1]
    [2, 1, 1]
    [2, 2]
    [4]
    return 6
*/

function backPackVI(nums,target){
    var n = nums.length;
    var dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for(var i = 1; i<=target;i++){
        for(var j = 0;j < n;j++){
            if(i >= nums[j]){
                dp[i] += dp[i - nums[j]];
            }
        }
    }
    // console.log(dp);
    return dp[target];
}

// console.log(backPackVI([1,2,4],4));

function backPackVIRe(nums,target){
    var res = [];
    var len = nums.length;
    dfs(nums,target,[]);
    return res;

    function dfs(nums,target,arr){
        if(target == 0){
            res.push(arr.slice());
            return;
        }

        for(var i = 0; i < len;i++){
            if(target >= nums[i]){
                arr.push(nums[i]);
                dfs(nums,target - nums[i],arr);
                arr.pop();
            }
        }

    }

}
console.log(backPackVIRe([1,2,4],4));