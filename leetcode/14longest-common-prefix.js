// 14. Longest Common Prefix

/**
 * Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
    Note:

    All given inputs are in lowercase letters a-z.
 * 
 */


/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return "";
    var ans = "";
    for (let i = 0; i < strs[0].length; ++i) {
        let c = strs[0].charAt(i);
        for (let s of strs)
        if (s.length <= i || s.charAt(i) != c) return ans;
        ans += c;
    }
    return ans;
};

// Horizontal scanning
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length == 0) return "";
        }        
    return prefix;
}


console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));