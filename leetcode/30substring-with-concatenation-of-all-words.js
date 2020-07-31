// 30. Substring with Concatenation of All Words
/**
 * You are given a string, s, and a list of words, words, that are all of the same length. 
 * Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.
Example 1:
Input:
    s = "barfoothefoobarman",
    words = ["foo","bar"]
    Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
Example 2:

Input:
    s = "wordgoodgoodgoodbestword",
    words = ["word","good","best","word"]
    Output: []
 */



 /**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var res = []
    if (s.length == 0 || words.length == 0) return res;
    if(s.length < words.join('').length) return res;

    var len = words.length * words[0].length;


    for (var index = 0; index <= s.length - len; index++) {
        let str = s.substr(index,len);
        wb(str, words.slice(), index);
    }


    function wb(str, wordDict, index,depth) {

        while (str.length) {
            var flag = false;
            for (var i = wordDict.length - 1; i >= 0; i--) {
                if (str.startsWith(wordDict[i])) {
                    str = str.substring(wordDict[i].length);
                    wordDict.splice(i,1);
                    flag = true;
                    break;
                }
            }
            if(!flag) break;
        }

        if(str.length == 0) res.push(index);

    }

    return res;
};

var findSubstring2 = function (s, words) {
    var res = []
    if (s.length == 0 || words.length == 0) return res;
    if(s.length < words.join('').length) return res;

    var len = words.length * words[0].length;


    for (var index = 0; index <= s.length - len; index++) {
        let str = s.substr(index,len);
        wb(str, words.slice(), index);
    }


    function wb(str, wordDict, index,depth) {

        var count = {};
        var step = wordDict[0].length;

        wordDict.forEach(element => {
            if(count[element]){
                count[element] += 1;
            }else{
                count[element] = 1;
            }
        });

        for(var i = 0; i< str.length;i += step){
            if(count[str.substr(i,step)]){
                count[str.substr(i,step)]--;
            }
        }

        let accu = 0;
        for(let k in count){
            accu += count[k];
        }
        if(accu == 0) res.push(index);

    }

    return res;
};

console.log(findSubstring("abababab",["a","b","a"]));
console.log(findSubstring("barfoothefoobarman",["foo","bar"]));
console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","word"]));
console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","good"]));