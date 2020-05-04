export function lis(str){
    var arr = new Array(str.length).fill(1);
    for(var i = 1;i < str.length;i++){
        for(var j = 0;j < i;j++){
            if(str[i] > str[j]){
                arr[i] = Math.max(arr[i],arr[j] + 1);
            }
        }
    }
    console.log(arr);
    return Math.max.apply(null,arr);
}

export function lcs(str1,str2){
    if(str1 == null || !str1.length || str2 == null || !str2.length){
        return 0;
    }

    var len1 = str1.length + 1;
    var len2 = str2.length + 1;

    var res = new Array(len1).fill(0);
    res.forEach((ele,index) => {
        res[index] = new Array(len2).fill(0);
    });

    for(var i = 1;i < len1;i++){
        for(var j = 1;j < len2;j++){
            if(str1.charAt(i - 1) == str2.charAt(j - 1)){
                res[i][j] = res[i - 1][j - 1] + 1;
            }else{
                res[i][j] = Math.max(res[i - 1][j],res[i][j - 1]);
            }
        }
    }

    console.log(res);
    return res[len1 - 1][len2 - 1];

}

export function lcsubstr(str1,str2){
    if(str1 == null || !str1.length || str2 == null || !str2.length){
        return 0;
    }

    var len1 = str1.length + 1;
    var len2 = str2.length + 1;
    var max = 0;

    var res = new Array(len1).fill(0);
    res.forEach((ele,index) => {
        res[index] = new Array(len2).fill(0);
    });

    for(var i = 1;i < len1;i++){
        for(var j = 1;j < len2;j++){
            if(str1.charAt(i - 1) == str2.charAt(j - 1)){
                res[i][j] = res[i - 1][j - 1] + 1;
            }else{
                res[i][j] = 0;
            }
        }
    }

    res.forEach((ele,index) => {
        ele.forEach(e => {
            max = Math.max(max,e);
        })
    });

    console.log('string',res);

    return max;
}

