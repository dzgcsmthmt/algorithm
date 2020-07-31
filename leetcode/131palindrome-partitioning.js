// 131. Palindrome Partitioning

/**
*   Given a string s, partition s such that every substring of the partition is a palindrome.

    Return all possible palindrome partitioning of s.

    Example:

    Input: "aab"
    Output:
    [
        ["aa","b"],
        ["a","a","b"]
    ] 
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    if (s.length == 0) return [];
    if (s.length == 1) return [[s]];

    var res = [];
    dfs(s,[]);
    return res;

    function dfs(str,arr) {
        if (str == "") {
            res.push(arr.slice());
            return;
        }

        for (var i = 0; i <= str.length; i++) {
            if (isPalin(str,0,i)) {
                arr.push(str.substring(0, i + 1));
                dfs(str.substring(i + 1), arr);
                arr.pop();
            }
        }

    }

};

function isPalin(str, i, j) {
    while (i < j) {
        if (str[i] != str[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
}

console.log(partition('aab'));

