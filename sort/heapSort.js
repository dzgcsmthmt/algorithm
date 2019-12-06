function MaxHeap(){
    //从1开始索引 左节点为2n，右为2n+1 ，也可以0 ，左 2n + 1 右 2n + 2
    var arr;
    if(Array.isArray(arr = arguments[0])){
        arr.unshift(0);
        this.data = arr;
        this._heapify(this.data);
    }else{
        this.data = [0];
    }
}

MaxHeap.prototype.insert = function(value){
    this.data.push(value);
    this._shiftUp(this.data.length - 1);
}

MaxHeap.prototype.extractMax = function(){
    var res;
    if(this.size <= 1){
        return;
    }
    swap(this.data,1,this.data.length - 1);
    res = this.data.pop();
    this._shiftDown(1);
    return res;
}

MaxHeap.prototype._shiftDown = function(index){
    var j;
    while(index * 2 <= this.size()){
        j = index * 2;
        if(j + 1 <= this.size() && this.data[j + 1] > this.data[j]){
            j = j + 1;
        }

        if(this.data[index] > this.data[j]){
            break;
        }

        swap(this.data,index,j);
        index = j;
    }
}

MaxHeap.prototype._shiftUp = function(index){
    while(index > 1 && this.data[index] > this.data[index >> 1]){
        swap(this.data,index,index >> 1);
        index >>= 1;
    }
}

MaxHeap.prototype._heapify = function(arr){

    for(var i = (arr.length - 1) >> 1; i >= 1; i--){
        this._shiftDown(i);
    }
}

MaxHeap.prototype.size = function(){
    return this.data.length - 1;
}

function swap(arr,x,y){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function heapSort(arr){
    var res = [];
    var mh = new MaxHeap(arr);
    // arr.forEach(item => {
    //     mh.insert(item);
    // });

    while(mh.size() > 0){
        res.push(mh.extractMax());
    }

    return res;
}

console.log(heapSort([2,3,7,1,54,324,23]));