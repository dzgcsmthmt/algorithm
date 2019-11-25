//47 礼物的最大价值

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