// LeetCode 5. Longest Palindromic Substring
function lps(str){
    var len = 0;
    var start = 0;
    for(var i = 0;i< str.length;i++){
        var cur = Math.max(getLen(str,i,i),getLen(str,i,i + 1));
        if(cur > len){
            len = cur;
            start = i - ((cur - 1) / 2 >> 0)
        }
    }
    return str.substr(start,len);
}

function getLen(str,l,r){
    while(l >= 0 & r < str.length && str[l] == str[r]){
        l--;
        r++;
    }
    return r - l - 1;
}

function lpsdp(str){
    var n = str.length;
    if(n == 0) return "";
    if(n == 1) return str;
    var dp = new Array(n - 1);
    var len = 1;
    var left = 0;
    for(var i = 0; i < n; i++){
        dp[i] = new Array(n - 1).fill(0);
    }

    for(var i = 0;i < n;i++){
        dp[i][i] = 1;
        for(var j = 0; j < i;j++){
            dp[j][i] = (str[i] == str[j] && (i - j < 2 || dp[j + 1][i - 1]));
            if(dp[j][i] && len < i - j + 1){
                len = i - j + 1;
                left = j;
            }
        }
    }
    return str.substr(left,len);
}

console.log(lpsdp('babad'));
console.log(lpsdp('cbbd'));