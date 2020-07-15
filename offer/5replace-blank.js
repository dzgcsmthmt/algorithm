/**
 * 替换空格
    题目描述
    将一个字符串中的空格替换成 "%20"。

    Input:
    "A B"

    Output:
    "A%20B"
*/

function replaceSpace(str) {
    var res = [...str];

    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            res.push(" ");
            res.push(" ");
        }
    }

    var p1 = str.length - 1;
    var p2 = res.length - 1;

    while (p1 >= 0 && p1 < p2) {
        let char = str[p1--];
        if (char == " ") {
            res[p2--] = "0";
            res[p2--] = "2";
            res[p2--] = "%";
        } else {
            res[p2--] = char;
        }
    }
    return res.join("");
}

console.log(replaceSpace("A B"));

console.log(replaceSpace("A B C  "));