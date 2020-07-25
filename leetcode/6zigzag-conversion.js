// 6. ZigZag Conversion
/**
* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

    Write the code that will take a string and make this conversion given a number of rows:

    string convert(string s, int numRows);
    Example 1:

    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"
    Example 2:

    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:

    P     I    N
    A   L S  I G
    Y A   H R
    P     I
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len = s.length;
    if(numRows <= 1) return s;

    var index = 0;
    var col = 0;
    var arr = new Array(numRows).fill(0).map(item => []);
    while(index < len){
        for(var i = 0; i < numRows && index < len;i++){
            arr[i][col] = s[index++];
        }

        for(var i = numRows - 2;i > 0 && index < len;i--){
            arr[i][++col] = s[index++];
        }

    }
    console.log(arr,'arr');
    var res = "";
    arr.forEach(row => res += row.join(""));

    return res;
};

console.log(convert('PAYPALISHIRING',3))
// console.log(convert('PAYPALISHIRING',4))