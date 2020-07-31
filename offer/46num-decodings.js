function numDecodings(s){
    var res = 0;
    if(s.length == 0) return 0;

    var len = s.length;
    var dp = new Array(len + 1).fill(0);

    dp[0] = 1;
    dp[1] = s[0] == 0 ? 0 : 1;

    for(var i = 2;i <= len;i++){
        let one = s.substr(i - 1,1);
        if(one != 0){
            dp[i] += dp[i - 1];
        }
        let two = s.substr(i - 2,2);
        if(+two <= 26 && s[i - 2] != 0){
            dp[i] += dp[i - 2];
        }
    }

    console.log(dp);

    return dp[len];

}

console.log(numDecodings('12258'));