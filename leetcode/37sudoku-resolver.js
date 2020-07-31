var solveSudoku = function (board) {
    //行
    var rows_ = new Array(9).fill(0).map(() => new Array(10).fill(0));
    //列
    var cols_ = new Array(9).fill(0).map(() => new Array(10).fill(0));
    //分成9块，第一块下标0，第二块1，最下角8
    var boxes_ = new Array(9).fill(0).map(() => new Array(10).fill(0));

    for (var i = 0; i < 9; ++i) {
        for (var j = 0; j < 9; ++j) {
            if (board[i][j] != '.') {
                var c = board[i][j] - 0;
                var bx = (j / 3) >> 0;
                var by = (i / 3) >> 0;
                rows_[i][c] = 1;
                cols_[j][c] = 1;
                boxes_[by * 3 + bx][c] = 1;
            }
        }
    }

    return dfs(board, 0, 0);
    return board;

    function dfs(board, x, y) {
        if (y == 9) {
            return true;
        }
        var nx = (x + 1) % 9;
        var ny = (nx == 0) ? y + 1 : y;

        if (board[y][x] != '.') return dfs(board, nx, ny);

        for (var i = 1; i <= 9; i++) {
            var bx = (x / 3) >> 0;
            var by = (y / 3) >> 0;
            var box_key = by * 3 + bx;
            if (!rows_[y][i] && !cols_[x][i] && !boxes_[box_key][i]) {
                rows_[y][i] = 1;
                cols_[x][i] = 1;
                boxes_[box_key][i] = 1;
                board[y][x] = i + '';
                if (dfs(board, nx, ny)) return true;
                board[y][x] = '.';
                boxes_[box_key][i] = 0;
                cols_[x][i] = 0;
                rows_[y][i] = 0;
            }
        }
        return false;

    };
}

var arr =  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
    [".", "9", "8", ".", ".", ".", ".", "6", "."], 
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"], 
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"], 
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"], 
    [".", "6", ".", ".", ".", ".", "2", "8", "."], 
    [".", ".", ".", "4", "1", "9", ".", ".", "5"], 
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
var arr = (solveSudoku(arr));