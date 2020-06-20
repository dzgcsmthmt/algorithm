// 22. Generate Parentheses
/**
* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
    For example, given n = 3, a solution set is:
    [
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
    ]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    if(n == 0) return null;

    var res = [];

    dfs('',0,0,n,res);

    return res;
    
};

function dfs(s,l,r,n,res){
    if(s.length == 2 * n){
        res.push(s);
        return;
    }

    if(l < n){
        dfs(s + '(',l + 1,r,n,res);
    }

    if(r < l){
        dfs(s + ')',l,r + 1,n,res);
    }


}

console.log(generateParenthesis(3))