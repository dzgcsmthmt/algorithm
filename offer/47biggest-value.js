// 47. 礼物的最大价值

/**
 * 在一个 m*n 的棋盘的每一个格都放有一个礼物，每个礼物都有一定价值（大于 0）。从左上角开始拿礼物，每次向右或向下移动一格，直到右下角结束。给定一个棋盘，求拿到礼物的最大价值。例如，对于如下棋盘

    1    10   3    8
    12   2    9    6
    5    7    4    11
    3    7    16   5

    礼物的最大价值为 1+12+5+7+7+16+5=53。
 * 
 */

function getMost(values){
    if(!values.length) return 0;
    var m = values.length;
    var n = values[0].length;

    var dp = new Array(m);
    for(var i = 0;i < m;i++){
        dp[i] = new Array(n).fill(0);
    }

    dp[0][0] = values[0][0];

    for(var i = 1;i < n;i++){
        dp[0][i] = dp[0][i - 1] + values[0][i];
    }

    for(var i = 1;i < m;i++){
        dp[i][0] = dp[i - 1][0] + values[i][0];
    }


    for(var i = 1;i < m;i++){
        for(var j = 1; j < n;j++){
            dp[i][j] = Math.max(dp[i][j],dp[i - 1][j] + values[i][j],dp[i][j - 1] + values[i][j]);
        }
    }

    console.log(dp);
    

    return dp[m - 1][n - 1];

}

console.log(getMost([[1,10,3,8],[12,2,9,6],[5,7,4,11],[3,7,16,5]]));