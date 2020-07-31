function quickSort(arr){
    if(arr.length <= 1) return;
    quick(arr,0,arr.length - 1);
    return arr;
}

function quick(arr,left,right){
    var index;
    if(arr.length > 1){
        index = partition(arr,left,right);
        if(left < index - 1){
            quick(arr,left,index - 1);
        }
        if(index < right){
            quick(arr,index,right);
        }
    }

}

function partition(arr,left,right){
    var pivot = arr[Math.floor((left + right) / 2)];
    var i = left,j = right;

    while(i <= j){
        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if(i <= j){
            swap(arr,i,j);
            i++;
            j--;
        }
    }
    console.log(i);
    return i;

}

function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([1,4,8,23,5,6]));