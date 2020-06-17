// 130. Surrounded Regions
/**
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

    A region is captured by flipping all 'O's into 'X's in that surrounded region.

    Example:

    X X X X
    X O O X
    X X O X
    X O X X
    After running your function, the board should be:

    X X X X
    X X X X
    X X X X
    X O X X
    Explanation:
    Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'.
    Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. 
    Two cells are connected if they are adjacent cells connected horizontally or vertically.
 */


 /**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var d = [[-1,0],[0,1],[1,0],[0,-1]];
function inArea(x,y,r,c){
    return x >= 0 && x < r && y >=0 && y < c;
}
var solve = function(board) {
    if(!board.length) return;

    var m = board.length;
    var n = board[0].length;

    /**
     * 思路
     * 逆向思维，把边界是o的全部floodfill算法替换成#
     * 剩余的o换成X，#换成o
     */

    //第一行和最后一行边界
    for(var i = 0;i < n;i++){
        if(board[0][i] == 'o'){
            dfs(board,0,i);
        }
        
        if(board[m - 1][i] == 'o'){
            dfs(board,m - 1, i);
        }
    }

    //第一列和最后一列
    for(var j = 1;j < m - 1;j++){
        if(board[j][0] == 'o'){
            dfs(board,j,0);
        }
        if(board[j][n - 1] == 'o'){
            dfs(board,j,n - 1);
        }
    }


    function dfs(grid,startX,startY){
        board[startX][startY] = '#';
        for(var i = 0;i < 4;i++){
            let newX = startX + d[i][0];
            let newY = startY + d[i][1];
            if(inArea(newX,newY,m,n) && grid[newX][newY] == 'o'){
                dfs(grid,newX,newY);
            }
        }
    }

    for(var i = 0;i < m;i++){
        for(var j = 0; j < n;j++){
            if(board[i][j] == 'o'){
                board[i][j] = 'x';
            }else if(board[i][j] == '#'){
                board[i][j] = 'o';
            }
        }
    }

    return board;

    
};

console.log(solve([['x','x','x','x'],['x','o','o','x'],['x','x','o','x'],['x','o','x','x']]));





