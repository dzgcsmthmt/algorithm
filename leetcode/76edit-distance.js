// 72. Edit Distance
/***
* Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

    You have the following 3 operations permitted on a word:

    Insert a character
    Delete a character
    Replace a character
    Example 1:

    Input: word1 = "horse", word2 = "ros"
    Output: 3
    Explanation: 
    horse -> rorse (replace 'h' with 'r')
    rorse -> rose (remove 'r')
    rose -> ros (remove 'e')
    Example 2:

    Input: word1 = "intention", word2 = "execution"
    Output: 5
    Explanation: 
    intention -> inention (remove 't')
    inention -> enention (replace 'i' with 'e')
    enention -> exention (replace 'n' with 'x')
    exention -> exection (replace 'n' with 'c')
    exection -> execution (insert 'u')
* 
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if(word1 == '' && word2 == '') return 0;
    if(word1 == "") return word2.length;
    if(word2 == "") return word1.length;

    var res = 0;
    var m = word1.length;
    var n = word2.length;
    var dp = new Array(m + 1).fill(0).map(itme => new Array(n + 1).fill(0));

    for(var i = 1 ;i <=m; i++){
        dp[i][0] = i;
    }

    for(var i = 1 ;i <=n; i++){
        dp[0][i] = i;
    }

    for(var i = 1; i <= m;i++){
        for(var j = 1;j <= n;j++){
            if(word1[i - 1] == word2[j - 1]){
                dp[i][j] = dp[i - 1][ j - 1];
            }else{
                //三种情况最小,第一种替换，第二种插入，第三种删除；+1是一次操作
                dp[i][j] = Math.min(dp[i - 1][j - 1],dp[i][j - 1],dp[i - 1][j]) + 1
            }
        }
    }

    return dp[m][n];

};

console.log(minDistance('horse','ros'));
console.log(minDistance('intention','execution'));