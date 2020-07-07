// 361. Bomb Enemy 炸弹人
/***
 * Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.
    The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.
    Note that you can only put the bomb at an empty cell.

    Example:
    For the given grid

    0 E 0 0
    E 0 W E
    0 E 0 0

    return 3. (Placing a bomb at (1,1) kills 3 enemies)
 */

 function maxKilledEnemies(grid){

    if(grid.length == 0 || grid[0].length == 0){
        return 0;
    }

    var m = grid.length;
    var n = grid[0].length;

    var up = new Array(m).fill(0).map(ele => {return new Array(n).fill(0)});
    var down = new Array(m).fill(0).map(ele => {return new Array(n).fill(0)});
    var left = new Array(m).fill(0).map(ele => {return new Array(n).fill(0)});
    var right = new Array(m).fill(0).map(ele => {return new Array(n).fill(0)});
    var res = 0;

    for(var i = 0; i < m;i++){
        for(var j = 0; j < n;j++){
            //如果是墙，为0
            if(grid[i][j] == 'W'){
                up[i][j] = 0;
                continue;
            }

            //如果是enemy，为1
            up[i][j] = grid[i][j] == 'E' ? 1 : 0;
            //加上向上可以消灭的敌人
            if(i > 0){
                up[i][j] += up[i - 1][j];
            }
            
        }
    }

    for(var i = m - 1; i >= 0;i--){
        for(var j = 0; j < n;j++){
            //如果是墙，为0
            if(grid[i][j] == 'W'){
                down[i][j] = 0;
                continue;
            }

            //如果是enemy，为1
            down[i][j] = grid[i][j] == 'E' ? 1 : 0;
            //加上向上可以消灭的敌人
            if(i < m - 1){
                down[i][j] += down[i + 1][j];
            }
            
        }
    }

    for(var i = 0; i < m;i++){
        for(var j = 0; j < n;j++){
            //如果是墙，为0
            if(grid[i][j] == 'W'){
                left[i][j] = 0;
                continue;
            }

            //如果是enemy，为1
            left[i][j] = grid[i][j] == 'E' ? 1 : 0;
            //加上向上可以消灭的敌人
            if(j > 0){
                left[i][j] += left[i][j - 1];
            }
            
        }
    }

    for(var i = 0; i < m;i++){
        for(var j = n - 1; j >=0; j--){
            //如果是墙，为0
            if(grid[i][j] == 'W'){
                right[i][j] = 0;
                continue;
            }

            //如果是enemy，为1
            right[i][j] = grid[i][j] == 'E' ? 1 : 0;
            //加上向上可以消灭的敌人
            if(j < n - 1){
                right[i][j] += right[i][j + 1];
            }
            
        }
    }

    for(var i = 0; i < m;i++){
        for(var j = 0; j < n;j++){
            if(grid[i][j] == '0'){
                res = Math.max(res,up[i][j] + down[i][j] + left[i][j] + right[i][j]);
            }
        }
    }

    return res;

 }


 console.log(maxKilledEnemies([['0','E','0','0'],['E','0','W','E'],['0','E','0','0']]))