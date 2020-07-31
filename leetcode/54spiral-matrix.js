// 54. Spiral Matrix
/**
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

    Example 1:

    Input:
    [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]
    Output: [1,2,3,6,9,8,7,4,5]
    Example 2:

    Input:
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9,10,11,12]
    ]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

 /**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var res = [];
    if(matrix.length == 0 || matrix[0].length == 0) return res;

    var left = 0;
    var right = matrix[0].length - 1;
    var top = 0;
    var bottom = matrix.length - 1;

    while(left <= right && top <= bottom){
        for(var i = left;i <= right; i++){
            res.push(matrix[top][i]);
        }

        for(var i = top + 1; i <= bottom;i++){
            res.push(matrix[i][right]);
        }

        if(top != bottom){
            for (var i = right - 1; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
        }
        
        if(left != right){
            for (var i = bottom - 1; i > top; i--) {
                res.push(matrix[i][left]);
            }
        }

        left++;
        right--;
        top++;
        bottom--;
    }
    return res;
};

// console.log(spiralOrder([
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]));
// console.log(spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10,11,12]
// ]));
console.log(spiralOrder([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]));
/**
 *[
 *    [1,2,3,4,5],
 *    [6,7,8,9,10],
 *    [11,12,13,14,15],
 *    [16,17,18,19,20],
 *    [21,22,23,24,25]
 *]
 * [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,11,13]
 */
// console.log(spiralOrder([[7],[9],[6]]));
// console.log(spiralOrder([[6,9,7]]));