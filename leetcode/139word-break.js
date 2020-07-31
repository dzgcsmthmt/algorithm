/*
给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
*/

/**
 * 输入: s = "leetcode", wordDict = ["leet", "code"]  输出: true
 * 
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]  输出: true
 * 
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]   输出: false
 */


 /**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var len = s.length;
    var dp = new Array(len + 1).fill(false);
    dp[0] = true;

    for(var i = 1;i <= len;i++){
        for(var j = 0; j < i;j++){
            if(dp[j] && wordDict.includes(s.substring(j,i))){
                dp[i] = true;
                break;
            }
        }
    }
    console.log(dp);
    return dp[len];


};

//backtrace
function wb(s,wordDict){
    if(s.length == 0){
        return true;
    }


    for(var i = 0;i < wordDict.length;i++){
        if(s.startsWith(wordDict[i])){
            if(wb(s.substring(wordDict[i].length),wordDict)){
                return true;
            }
        }
    }

    return false;
}


console.log(wordBreak("leetcode",["leet", "code"]));
console.log(wordBreak("applepenapple",["apple", "pen"]));
console.log(wordBreak("catsandog",["cats", "dog", "sand", "and", "cat"]));