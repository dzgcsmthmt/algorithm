// 845. Longest Mountain in Array
/**
 * Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:

    B.length >= 3
    There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
    (Note that B could be any subarray of A, including the entire array A.)

    Given an array A of integers, return the length of the longest mountain. 

    Return 0 if there is no mountain.

    Example 1:

    Input: [2,1,4,7,3,2,5]
    Output: 5
    Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
    Example 2:

    Input: [2,2,2]
    Output: 0
    Explanation: There is no mountain.
 */

 /**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    var res = 0;
    if(A.length <= 2) return res;

    var incDP = new Array(A.length).fill(0);
    var decDp = new Array(A.length).fill(0);

    var lastInd = A.length - 2;

    for(var i = 1;i <= lastInd;i++){
        if(A[i] > A[i - 1]){
            incDP[i] = incDP[i - 1] + 1
        };
    }

    for(var i = lastInd;i > 0;i--){
        if(A[i] > A[i + 1]){
            decDp[i] = decDp[i + 1] + 1;
        }
    }

    console.log(incDP);
    console.log(decDp);

    for(var i = 0;i <= lastInd;i++){
        if(incDP[i] && decDp[i]){
            res = Math.max(res,incDP[i] + decDp[i] + 1);
        }
    }

    return res;


};

function lm(A){
    var res = 0, up = 0, down = 0, n = A.length;
    for (var i = 1; i < n; ++i) {
        if ((down && A[i - 1] < A[i]) || (A[i - 1] == A[i])) {
            up = down = 0;
        }
        if (A[i - 1] < A[i]) ++up;
        if (A[i - 1] > A[i]) ++down;
        if (up > 0 && down > 0) res = Math.max(res, up + down + 1);
    }
    return res;
}


console.log(longestMountain([0,1,2,3,4,5,4,3,2,1,0]));
console.log(longestMountain([2,1,4,7,3,2,5]));
console.log(longestMountain([2,2,2]));
console.log(longestMountain([1,1,0,0,1,0]));