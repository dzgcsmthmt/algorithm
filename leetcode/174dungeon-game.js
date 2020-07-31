// 174. Dungeon Game
/**
* The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon. 
    The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.

    The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

    Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; 
    
    other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).

    In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

    Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.

    For example, given the dungeon below, the initial health of the knight must be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN -> DOWN.

    -2 (K)	 -3	       3
    -5	     -10	   1
    10	     30	       -5 (P)
*/

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    var len = dungeon.length;
    var dp = new Array(len).fill(0).map(item => new Array(len).fill(0));
    dp[len - 1][len - 1] = 1 - dungeon[len - 1][len - 1]; 
    
    for(var i = len - 2;i >= 0;i--){
        dp[i][len - 1] = Math.max(dp[i + 1][len - 1] - dungeon[i][len - 1],1); 
    }
    
    for(var j = len - 2;j >=0; j--){
        dp[len - 1][j] = Math.max(dp[len - 1][j + 1] - dungeon[len - 1][j],1);
    }
    
    for(var i = len - 2;i >= 0;i--){
        for(var j = len - 2;j >=0; j--){
            dp[i][j] = Math.max(1,Math.min(dp[i][j + 1] - dungeon[i][j],dp[i + 1][j] - dungeon[i][j])); 
        } 
    }
    console.log(dp);
    
    return dp[0][0];
};

console.log(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]));