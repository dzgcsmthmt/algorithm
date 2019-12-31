//47 获取最大值

function getMost(values) {
    if (values == null || values.length == 0 || values[0].length == 0)
        return 0;
    var n = values[0].length;
    var dp = new Array(n);
    dp.fill(0);
    for (let value of values) {
        dp[0] += value[0];
        for (var i = 1; i < n; i++)
            dp[i] = Math.max(dp[i], dp[i - 1]) + value[i];
    }
    console.log(dp);
    return dp[n - 1];
}

console.log(getMost([[1,10,3,8],[12,2,9,6],[5,7,4,11],[3,7,16,5]]));


//343. 整数拆分
//递归加回溯
var memo;
function integerBreak(n){
    memo = new Array(n + 1).fill(-1);
    return breakInteger(n);
}

function breakInteger(n){
    if( n == 1){
        return 1;
    }
    var res = -1;
    if(memo[n] != -1){
        return memo[n];
    }

    for(var i = 1;i <= n - 1;i++){
        res = Math.max(res,i * (n - i), i * breakInteger(n - i))
    }
    memo[n] = res;

    return res;

}

//动态规划
function integerBreakDp(n){
    var memo = new Array(n + 1).fill(-1);
//     var res = -1;
    memo[1] = 1;
    for(var i = 2;i <= n; i++){
        for(var j = 1;j <= i - 1;j++){
           memo[i] = Math.max(memo[i], j * (i - j),j * memo[i - j]); 
        }
    }
    //console.log(memo);
    return memo[n];

}


// console.log(integerBreakDp(10));

// 198. House Robber
//递归加回溯
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    memo = new Array(nums.length).fill(-1);
    return tryRob(nums,0);
};

function tryRob(nums,index){
    if(index >= nums.length){
        return 0;
    }

    if(memo[index] != -1){
        return memo[index];
    }

    var res = 0;
    
    for(var i = index;i < nums.length;i++){
        res = Math.max(res, nums[i] + tryRob(nums,i + 2));
    }
    
    memo[index] = res;
    return res;

}

//dp

function robDp(nums){
    var l = nums.length;
    memo = new Array(l).fill(-1);
    memo[l - 1] = nums[l - 1];
    for(var i = l - 2;i >= 0;i--){
        for(var j = i;j < l;j++ ){
            memo[i] = Math.max(memo[i], nums[j] + (j + 2 < l ? memo[j + 2] : 0))
        }
    } 
    return memo[0];
}

//console.log(robDp([2,7,9,3,1]));


//279:完全平方数

/**
 * @param {number} n
 * @return {number}
 */

var result;
var numSquares = function(n) {
    result = Number.MAX_SAFE_INTEGER;
    dfs(n, 0);//开始搜素
    return result;
};

function dfs(reminaNum, steps){
    if (reminaNum == 0) {//如果正好匹配完成
        result = steps;//更新结果
        return;
    }
    else if (result > steps) {//剪枝（只有当前的步数少于当前已经搜索到的最小结果才有继续搜索的必要
        //sqrt(reminaNum)将reminaNum开方
        for (var num = Math.sqrt(reminaNum) >> 0; num > 0; --num) {
            //因为是steps最小，所以从大到小进行搜索
            dfs(reminaNum - num * num, steps + 1);
        }
    }
}

function numSquaresDp(n) {
    var memo = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);//动态规划数组，dp[i]表示的i的完全平方数
    memo[0] = 0;
    for (var num = 1; num <= n; ++num) {
        //对num进行平方拼凑尝试
        for (var j = 1; j * j <= num; ++j) {
            memo[num] = Math.min(memo[num], memo[num - j * j] + 1);
        }
    }
    return memo[n];
}



console.log(numSquares(12)) //3
