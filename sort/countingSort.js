function countingSort(arr){
    var max = 0,res=[];
    if(arr.length <= 1) return arr;

    arr.forEach(element => {
       if(element > max){
           max = element;
       } 
    });

    var pos = new Array(max + 1).fill(0);


    for(var i = 0; i <= max; i++){
        if(arr[i]){
            pos[arr[i]]++;
        }
    }

    for(var i = 0; i <= max; i++){
        while(pos[i]){
            res.push(i);
            pos[i]--;
        }
    }

    return res;

}
//优化版本，保证稳定性
function countingSort2(arr){
    var min=Number.MAX_SAFE_INTEGER,max = 0,res=[];
    if(arr.length <= 1) return arr;

    arr.forEach(element => {
       if(element > max){
           max = element;
       } 
       if(element < min){
           min = element;
       }
    });

    var pos = new Array(max - min + 1).fill(0);


    for(var i = 0; i < arr.length; i++){
        if(arr[i]){
            pos[arr[i] - min]++;
        }
    }

    console.log(pos);

    let accu = [0];
    for(var i = 1; i < pos.length;i++){
        accu[i] = accu[i - 1] + pos[i];
    }
    console.log(accu);

    for(var i = arr.length - 1;i >= 0;i--){
        res[accu[arr[i] - min]] = arr[i];
        accu[arr[i] - min]--;
    }

    return res;

}


console.log(countingSort([3,5,7,5,4,9,8,6,7]))
console.log(countingSort2([3,5,7,5,4,9,8,6,7,11]))