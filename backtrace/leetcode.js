//17. 电话号码的字母组合
/**
 * @param {string} digits
 * @return {string[]}
 */

var letterMap = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
var res = [];
var letterCombinations = function(digits) {
    res.length = 0;
    findCombination(digits,0,'');
    return res;
};

function findCombination(digits,index,s){
    if(index == digits.length){
        res.push(s);
        return;
    }

    var letters = letterMap[digits[index]];

    for (var i = 0; i < letters.length; i++) {
        findCombination(digits,index + 1,s + letters[i]);
    }

}

//console.log(letterCombinations('234'))

//46. Permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var perMuteRes = [];
var used = [];
var permute = function(nums) {
    perMuteRes.length = 0;
    used = new Array(3).fill(false);

    generatePermutation(nums,0,[]);
    return perMuteRes;
};

function generatePermutation(nums,index,p){
    if(index == nums.length){
        perMuteRes.push(p.slice());
        return;
    }

    for (var i = 0; i < nums.length; i++) {
        if(!used[i]){
            p.push(nums[i]);
            used[i] = true;
            generatePermutation(nums,index + 1,p);
            p.pop();
            used[i] = false;
        }
    }

}
// console.log(permute([1,2,3]));

//77. Combinations

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combineRes = [];
var combine = function(n, k) {
    combineRes.length = 0;
    generateCombinations(n,k,1,[]);
    return combineRes;
};

function generateCombinations(n,k,start,c){
    if(c.length == k){
        combineRes.push(c.slice());
        return;
    }

    for (var i = start; i <= n - (k - c.length) + 1; i++) {
        c.push(i);
        generateCombinations(n,k,i + 1,c);
        c.pop();
    }
}

// console.log(combine(4,2));

// 79. Word Search
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var d = [[-1,0],[0,1],[1,0],[0,-1]];
var row = 0,col = 0;
var visited = [];
var exist = function(board, word) {

    row = board.length;
    col = board[0].length;
    visited.length = 0;

    for (var i = 0; i < row; i++) {
        visited.push(new Array(col).fill(false));
    }

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if(searchWord(board,word,0,i,j)){
                return true;
            }
        }
    }
    return false;
};

function searchWord(board,word,index,startX,startY){
    if(index == word.length - 1){
        return board[startX][startY] == word[index];
    }

    if(board[startX][startY] == word[index]){
        visited[startX][startY] = true;
        for(var i = 0;i < 4;i++){
            let newX = startX + d[i][0];
            let newY = startY + d[i][1];
            if(inArea(newX,newY,row,col) && !visited[newX][newY]
                && searchWord(board,word,index + 1,newX,newY)){
                return true
            }
        }
        visited[startX][startY] = false;
    }
    return false;

}

function inArea(x,y,r,c){
    return x >= 0 && x < r && y >=0 && y < c;
}


//console.log(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']],'ABCCED'))


// 200. Number of Islands
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    row = grid.length;
    col = grid[0].length;
    visited.length = 0;
    var landsCount = 0;

    for (var i = 0; i < row; i++) {
        visited.push(new Array(col).fill(false));
    }

    for (var i = 0; i < row; i++) {
        for(var j = 0; j < col;j ++){
            if(grid[i][j] == 1 && !visited[i][j]){
                landsCount++;
                dfs(grid,i,j);
            }
        }
    }

    return landsCount;

};

function dfs(grid,startX,startY){
    visited[startX][startY] = true;
    for(var i = 0;i < 4;i++){
        let newX = startX + d[i][0];
        let newY = startY + d[i][1];
        if(inArea(newX,newY,row,col) && !visited[newX][newY]
            && grid[newX][newY] == 1){
            dfs(grid,newX,newY);
        }
    }
}


// console.log(numIslands([ ["1", "1", "1", "1", "0"],["1", "1", "0", "1", "0"],["1", "1", "0", "0", "0"],["0", "0", "0", "0", "0"]]));
// console.log(numIslands([ ["1", "1", "0", "0", "0"],["1", "1", "0", "0", "0"],["0", "0", "1", "0", "0"],["0", "0", "0", "1", "1"]]));

// 93. 复原IP地址

/**
 * @param {string} s
 * @return {string[]}
 */

var restoreRes = [];
var restoreIpAddresses = function(s) {
    restoreRes.length = 0;
    restore(s,4,'');
    return restoreRes;
};


function restore(s,l,out){
    if(l == 0){
        if(s.length == 0){
            restoreRes.push(out);
        }
        return;
    }

    for (var i = 1; i <=3; i++) {
        if(s.length >= i && isValid(s.substr(0,i))){
            if( l == 1){
                restore(s.substr(i),l - 1,out + s.substr(0,i));
            }else {
                restore(s.substr(i),l - 1,out + s.substr(0,i) + '.');
            }
        }
    }
}

function isValid(str){
    var len = str.length;
    str = Number(str);
    return str >= 0 && str <= 255 && String(str).length == len;
}

// console.log(restoreIpAddresses('25525511135'));
// console.log(restoreIpAddresses('2552550135'));
