// 120. Triangle
/**
* Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

    For example, given the following triangle

    [
        [2],
        [3,4],
        [6,5,7],
        [4,1,8,3]
    ]
    The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle.length == 0) return 0;
    var m = triangle.length;
    var dp = new Array(m).fill(1).map(item => new Array(m).fill(0));
    dp[0][0] = triangle[0][0];
    
    for(var i = 1; i < m;i++){
        var len = triangle[i].length; 
        dp[i][0] = dp[i - 1][0] + triangle[i][0];
        dp[i][len - 1] = dp[i - 1][len - 2] + triangle[i][len - 1]; 
        for(var j = 1; j < len - 1;j++){
            dp[i][j] = Math.min(dp[i - 1][j - 1],dp[i - 1][j]) + triangle[i][j];
        }
    }
    
    return Math.min.apply(null,dp[m - 1]);

};


console.log(minimumTotal([
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
]));