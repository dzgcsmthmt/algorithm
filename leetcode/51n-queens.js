//N皇后 同一行同一列不能有重复的queen，对角线也不可以

var col,dial,dia2;
var res = [];

function saveNqueens(n){
    col = new Array(n).fill(false);
    dia1 = new Array(2*n - 1).fill(false);
    dia2 = new Array(2*n - 1).fill(false);

    putQueen(n,0,[]);

    return res;
}
/**
* n 数量
* index 代表行数
* row 存放结果
*/
function putQueen(n,index,row) {
    if(index == n){
        console.log('row',row.slice());
        res.push(format(n,row.slice()));
        return;
    }

    for(var i = 0; i < n; i++){
        if(!col[i] && !dia1[i + index] && !dia2[index - i + n - 1]){
            col[i] = true;
            dia1[i + index] = true;
            dia2[index - i + n - 1] = true;
            row.push(i);
            putQueen(n,index + 1,row);
            col[i] = false;
            dia1[i + index] = false;
            dia2[index - i + n - 1] = false;
            row.pop();
        }
    }
}


function format(n,row){
    var res = [];
    for (var i = 0; i < n; i++) {
        res.push(new Array(n).fill('.'));
    }

    for (var i = 0; i < n; i++) {
        res[i][row[i]] = 'Q';
    }

    return res;
}

function print(res){
    for (var i = 0; i < res.length; i++) {
        res[i].forEach((item) => {
            console.log(item.join(""));
        });
        console.log('');
    }
}

print(saveNqueens(4));
