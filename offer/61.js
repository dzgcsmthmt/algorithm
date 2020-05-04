//61. 扑克牌顺子
// 五张牌，其中大小鬼为癞子，牌面为 0。判断这五张牌是否能组成顺子

function isContinuous(nums){
    if(nums.length < 5){
        return false;
    }
    nums.sort();

    var cnt = 0;

    nums.forEach(element => {
        if(element == 0){
            cnt++;
        }
    });

    for(var i = cnt;i < nums.length - 1;i++){
        if(nums[i + 1] == nums[i]){
            return false;
        }

        cnt -= nums[i + 1] - nums[i] - 1;
    }

    return cnt >= 0;
}

console.log(isContinuous([1,0,3,4,5]));
console.log(isContinuous([1,2,4,6,7]));