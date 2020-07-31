// 3. Longest Substring Without Repeating Characters
/**
 * Given a string, find the length of the longest substring without repeating characters.

    Example 1:

    Input: "abcabcbb"
    Output: 3 
    Explanation: The answer is "abc", with the length of 3. 
    Example 2:

    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    Example 3:

    Input: "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3. 
                Note that the answer must be a substring, "pwke" is a subsequence and not a substring
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    if (len <= 1) return len;

    var pos = {};
    var max = 0;
    var start = 0;
    for (var i = 0; i < len; i++) {
        if (s[i] in pos) {
            start = Math.max(pos[s[i]] + 1,start);
        } 
        pos[s[i]] = i;
        max = Math.max(max, i - start + 1);
    }

    return max;

};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));