// 292. Nim Game
/****
 * You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. 
 * The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

    Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

    Example:

    Input: 4
    Output: false 
    Explanation: If there are 4 stones in the heap, then you will never win the game;
                No matter 1, 2, or 3 stones you remove, the last stone will always be 
                removed by your friend.
 * 
 * 
 */

 /**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    if(n == 0) return false;
    if(n <= 3) return true;
    // return n % 4 != 0;
    var dp = new Array(n + 1);
    dp[0] = false;
    dp[1] = dp[2] = dp[3] = true;

    for(var i = 4; i <= n;i++){
        dp[i] = (!dp[i - 1] || !dp[i - 2] || !dp[i - 3]);
    }

    return dp[n];

};

console.log(canWinNim(5));
console.log(canWinNim(6));
console.log(canWinNim(8));