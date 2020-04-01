//generate Parenthesis
//递归加回溯

function generateParenthesis(n) {
    var res = new Array();
    dfs(res, "", n, 0, 0);
    return res;
}
function dfs(res, temp, n, left, right) {
    if(right == n) {
        res.push(temp);
        return;
    }
    if (left < n) dfs(res, temp+"(", n, left+1, right);
    if (right < left) dfs(res, temp+")", n, left, right+1);
}
console.log(generateParenthesis(3))
