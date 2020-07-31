// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
/***
 * '.' 匹配任意单个字符
   '*' 匹配零个或多个前面的那一个元素
 */

var isMatch = function(s, p) {
    var len1 = s.length;
    var len2 = p.length;

    var res = new Array(len1 + 1);
    for(var i = 0 ;i < len1 + 1;i++){
        res[i] = new Array(len2 + 1).fill(false);
    }
    // console.log(res);

    for(var i = 0;i <= len1;i++){
        for(var j = 0; j <= len2;j++){
            //都是空的情况
            if(i == 0 && j == 0){ 
                res[i][j] = true; 
                continue;
            }
            //正则为空的空的情况
            if(j == 0){
                res[i][j] = false;
                continue;
            }

            if(p[j - 1] != "*"){
                // 非*的情况，看最后一个字符是否匹配或者最后一个是否是.
                if(i > 0 && (s[i - 1] == p[j - 1] || p[j - 1] == ".")){
                    res[i][j] = res[i - 1][j - 1];
                }
            }else{
                //把*当成0个处理，直接看2位前的
                if(j > 1){
                    res[i][j] =  res[i][j] ||  res[i][j - 2];
                }

                //把*当一个处理，看*的前一位是不是等于s的最后一位
                if(i > 0 && j > 1){
                    if(p[j - 2] == s[i - 1] || p[j - 2] == '.'){
                        res[i][j] = res[i][j] || res[i - 1][j];
                    }
                }

            }

        }
    }

    return res[len1][len2];

};

/*
function isMatch(str, pattern) {
    var l1 = str.length;
    var l2 = pattern.length;

    var dp = new Array(l1 + 1).fill([]);

    dp = dp.map( item => new Array(l2 + 1).fill(false));

    dp[0][0] = true;

    //处理str为空  pattern里有*的情况
    for(var i = 1; i <= l2;i++){
        if(pattern[i - 1] == '*'){
            dp[0][i] = dp[0][i - 2];
        }
    }
       
    //从尾部开始匹配    
    for(var i = 1;i <= l1;i++){
        for(var j = 1;j <= l2;j++){
            //先处理不是*的情况
            if(pattern[j - 1] != '*'){
                //最后一位相同或者pattern最后一位是. 看前面能不能匹配
                if(str[i - 1] == pattern[j -1] || pattern[j - 1] == '.'){
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }else{
                //把*按照0处理
                if(j > 1){
                    dp[i][j] = dp[i][j] || dp[i][j - 2];
                }
                //能匹配看字符串前一位可不可以匹配
                if(str[i - 1] == pattern[j - 2] || pattern[j - 2] == '.'){
                    dp[i][j] = dp[i][j] || dp[i -1][j];
                }

            }
        }
    }

    return dp[l1][l2];


};
*/

console.log(isMatch("aa","a"));
console.log(isMatch("aa","a*"));
console.log(isMatch("ab",".*"));
console.log(isMatch("aab","c*a*b"));
console.log(isMatch("mississippi","mis*is*p*."));