/*Given two non-negative integers num1 and num2 represented as strings, 
  return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"*/

function multiply(str1,str2){
    var len1 = str1.length;
    var len2 = str2.length;
    var arr = new Array(len1+len2).fill(0);
    var res = "";
    for(var i = len1 - 1;i >=0;i--){
        for(var j = len2 - 1;j >= 0;j--){
            var product = arr[i + j + 1] + str1[i] * str2[j];
            arr[i + j + 1] = product % 10;
            arr[i + j] += (product / 10) >> 0;
        }
    }

    res = +arr.join('') + '';
    return res;
}

console.log(multiply("2","3"));
console.log(multiply('123','456'));
console.log(multiply('999','999'));