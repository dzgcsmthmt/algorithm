// 132. Palindrome Partitioning II
/****
* Given a string s, partition s such that every substring of the partition is a palindrome.
  Return the minimum cuts needed for a palindrome partitioning of s.

  Example:

  Input: "aab"
  Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
* 
*/

/**
* @param {string} s
* @return {number}
*/

var minCut = function (s) {
   //求有多少个回文串
   var len = s.length;
   if (len == 0) return len;
   var dp = new Array(len + 1).fill(Number.MAX_SAFE_INTEGER);

   var isPalin = calcPalin(s);
   dp[0] = 0;
   for (var i = 1; i <= len; i++) {
      for(var j = 0; j < i; j++){
         if(isPalin[j][i - 1]){
            dp[i] = Math.min(dp[i],dp[j] + 1);
         }
      }

   }

   return dp[len] - 1;
};

function calcPalin(s){
   var len = s.length; 
   var dp = new Array(len).fill(0).map(item => new Array(len).fill(false));
   for(var i = 0; i < len;i++){
      dp[i][i] = true;
      for(var j = 0; j < i;j++){
         dp[j][i] = (s[i] == s[j] && (i - j < 2 || dp[j + 1][i - 1]));
      }
   }
   return dp;
}

console.log(minCut("aab"));