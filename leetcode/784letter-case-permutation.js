 / //784. Letter Case Permutation

        /*
        Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

        Examples:
        Input: S = "a1b2"
        Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

        Input: S = "3z4"
        Output: ["3z4", "3Z4"]

        Input: S = "12345"
        Output: ["12345"]
        */

        /**
         * @param {string} S
         * @return {string[]}
         */
        var letterCasePermutation = function(S) {
            var len = S.length;
            if(len == 0) return [];
            var res = [];
            dfs(S,0,'',res);
            return res;
            
            function dfs(s,i,str,res){
                if(i == len){
                    res.push(str);
                    return;
                }
                if(s[i] >= 'A' && s[i] <= 'z'){
                    dfs(s,i + 1,str + s[i].toLowerCase(),res);
                    dfs(s,i + 1,str + s[i].toUpperCase(),res);
                }else{
                    dfs(s,i + 1,str + s[i],res);
                }
            }

        };

        console.log(letterCasePermutation("a1b2"));
        console.log(letterCasePermutation("3z4"));
        console.log(letterCasePermutation("12345"));/784. Letter Case Permutation

        /*
        Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

        Examples:
        Input: S = "a1b2"
        Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

        Input: S = "3z4"
        Output: ["3z4", "3Z4"]

        Input: S = "12345"
        Output: ["12345"]
        */

        /**
         * @param {string} S
         * @return {string[]}
         */
        var letterCasePermutation = function(S) {
            var len = S.length;
            if(len == 0) return [];
            var res = [];
            dfs(S,0,'',res);
            return res;
            
            function dfs(s,i,str,res){
                if(i == len){
                    res.push(str);
                    return;
                }
                if(s[i] >= 'A' && s[i] <= 'z'){
                    dfs(s,i + 1,str + s[i].toLowerCase(),res);
                    dfs(s,i + 1,str + s[i].toUpperCase(),res);
                }else{
                    dfs(s,i + 1,str + s[i],res);
                }
            }

        };

        console.log(letterCasePermutation("a1b2"));
        console.log(letterCasePermutation("3z4"));
        console.log(letterCasePermutation("12345"));
