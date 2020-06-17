/*Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/


function minMeetingRooms(intervals){
    var res = 0;
    if(!intervals.length) return res;

    intervals.sort((a,b) => a[0] - b[0]);

    
    var startArr = [];
    var endArr = [];
    
    intervals.forEach(element => {
        startArr.push(element[0]);
        endArr.push(element[1]);
    });

    endArr.sort((a,b) => a - b);
    
    console.log(startArr);
    console.log(endArr);
    var j = 0;
    for(var i = 0;i < startArr.length;i++){
        if(startArr[i] < endArr[j]){
            res++;
        }else{
            j++; 
        }
    }

    return res;

}

//使用小顶堆，存结束时间，开始时间大于最小结束时间，弹出，最后看堆的长度
//用一个堆并行维护了每个房间的最后结束时间，巧妙

console.log(minMeetingRooms([[0, 6],[4, 14],[20, 26],[8,24],[16,22]]));
console.log(minMeetingRooms([[0, 30],[5, 10],[15, 20]]));
console.log(minMeetingRooms([[7,10],[2,4]]));