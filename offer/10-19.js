// 10.4 变态跳台阶
// 一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级... 它也可以跳上 n 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

function JumpFloor(num){
    return Math.pow(2, num - 1);
} 

//11. 旋转数组的最小数字


// 12. 矩阵中的路径
// 判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向上下左右移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。例如下面的矩阵包含了一条 bfce 路径

var d = [[-1,0],[0,1],[1,0],[0,-1]];
var visited = [];
var col = 0,row = 0;
function hasPath(board,word){
    row = board.length;
    col = board[0].length;

    for(var i = 0; i < row;i++){
        visited[i] = new Array(col).fill(false);
    }

    for(var i = 0;i < row;i++){
        for(var j = 0; j < col;j++){
            if(searchWord(board,word,0,i,j)){
                return true;
            }
        }
    }

    return false;

}

function searchWord(board,word,index,startX,startY){
    if(index == word.length - 1){
        return board[startX][startY] == word[index];
    }

    if(board[startX][startY] == word[index]){
        visited[startX][startY] = true;
        for(var i = 0; i < d.length;i++){
            let newX = startX + d[i][0];
            let newY = startY + d[i][1];
            if(inArea(newX,newY,row,col) && !visited[newX][newY] && searchWord(board,word,index+1,newX,newY)){
                return true;
            }
        }
        visited[startX][startY] = false;
    }
    return false;

}

function inArea(x,y,r,c){
    return x >= 0 && x < r && y >=0 && y < c;
}

console.log(hasPath([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']],'ABCCED'))

//14. 剪绳子
// 把一根绳子剪成多段，并且使得每段的长度乘积最大。
function integerBreak(n) {
    var arr = new Array(n + 1).fill(0);
    arr[1] = 1;
    arr[2] = 1;
    if(n <= 2){
        return 1
    }
    for(var i = 3;i <=n;i++){
        for(var j = 1;j < i;j++){
            arr[i] = Math.max(arr[i],(i - j) * arr[j],(i -j) * j);
        }
    }
    return arr[n];
}
console.log(integerBreak(10));

// 15. 二进制中 1 的个数
// 输入一个整数，输出该数二进制表示中 1 的个数。
function NumberOf1(n) {
    var count = 0;

    while(n){
        n = n & n - 1;
        count++;
    }
    return count;
}

console.log(NumberOf1(4))

// 18.1 在 O(1) 时间内删除链表节点

function deleteNode(head,tobeDelete) {
    if(head == null || tobeDelete == null){
        return null;
    }
    //如果不是尾节点
    if(tobeDelete.next){
        tobeDelete.value = tobeDelete.next.value;
        tobeDelete.next = tobeDelete.next.next;
    }else{
        //只有一个节点
        if(head == tobeDelete){
            head = null;
        }else{
            let current = head;
            while(current.next != tobeDelete){
                current = current.next;
            }
            current.next = null;
        }
    }
    return head;
}

// 18.2 删除链表中重复的结点

function deleteDuplication(head){
    if(head == null || head.next == null){
        return head;
    }

    var next = head.next;

    if(head.value == next.value){
        while(next != null && head.value == next.value){
            next = next.next;
        }
        return deleteDuplication(next);
    }else{
        next.next = deleteDuplication(next.next);
        return head;
    }

}

// 19. 正则表达式匹配
// 请实现一个函数用来匹配包括 '.' 和 '*' 的正则表达式。模式中的字符 '.' 表示任意一个字符，而 '*' 表示它前面的字符可以出现任意次（包含 0 次）
// 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串 "aaa" 与模式 "a.a" 和 "ab*ac*a" 匹配，但是与 "aa.a" 和 "ab*a" 均不匹配。
function isMatch(s,p){
    
}