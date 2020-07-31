// 8. String to Integer (atoi)

/**
* Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character,
 takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, 
or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

    Only the space character ' ' is considered as whitespace character.
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
    If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(str.length == 0) return 0;
    
    var left = 0;
    var right = str.length - 1;
    var res = 0;

    while(str[left] == " "){
        left++;
    }

    while(str[right] == " "){
        right--;
    }

    str = str.substring(left,right + 1);

    console.log(str);
    var start = 0,end = 0;
    var sign = 1;
    if(str[start] == "-" ||  str[start] == "+"){
        sign = str[start] == "-" ? -1 : 1;
        start++;
        str = str.substr(1);
    }
    
    while(str[end] != ' ' && str[end] >= 0 && str[end] <= 9){
        res = res * 10 + (+str[end]);
        end++; 
    }

    if(end > 0){
        res = res * sign;
        if(res > 2 ** 31 - 1){
            return 2 ** 31 - 1
        }else if(res < -(2 ** 31)){
            return - (2 ** 31)
        }
        return res;
    }else{
        return 0
    }


};

console.log(myAtoi(' 4193 with words '));