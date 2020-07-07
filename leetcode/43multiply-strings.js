/*Given two non-negative integers num1 and num2 represented as strings, 
  return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"*/

var multiply = function(num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;
    var arr = new Array(len1+len2).fill(0);
    var res = "";
    for(var i = len1 - 1;i >=0;i--){
        for(var j = len2 - 1;j >= 0;j--){
            var product = arr[i + j + 1] + num1[i] * num2[j];
            arr[i + j + 1] = product % 10;
            arr[i + j] += (product / 10) >> 0;
        }
    }
    console.log('array',arr);
    var start = null;
    for(var i = 0; i < arr.length;i++){
        if(arr[i] != 0){
            start = i;
            break;
        }
    }
    if(start == null) return "0";
    return arr.join('').substr(start);
};

console.log(multiply("2","3"));
console.log(multiply('123','456'));
console.log(multiply('999','999'));