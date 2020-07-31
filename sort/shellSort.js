//思路 插入排序的变种
/**
 * 1. 生成step shell给出的公式为 k / 2 ^ n
 * 2. 给那个col进行插入排序，16 - 8 - 4 - 2 - 1 减少逆序对
 * 3. 最后一列的排序结果就是最后的结果
 */

/**
 * 
 * @param {*} 待排序数组
 */
function shellSort(arr){
    let stepSequence = shellStepSequence();
    console.log(stepSequence);

    for (const step of stepSequence) {
        sort(step);
    }

    return arr;

    function sort(step){
        for(let col = 0; col < step;col++){
            for(let i = col + step * 1;i < arr.length;i += step){
                var cur = i;
                while(cur >= col && arr[cur] < arr[cur - step]){
                    swap(arr,cur,cur - step);
                    cur -= step;
                }
            }
        }
    }

    function swap(arr,i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function shellStepSequence(){
        let stepSequence = [];
        let step = arr.length;

        while((step >>= 1) >= 1){
            stepSequence.push(step);
        }

        return stepSequence;
    }

}

console.log(shellSort([7,4,19,23,2,3,20,24,45,11,99]));
