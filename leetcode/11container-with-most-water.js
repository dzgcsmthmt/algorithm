// 11. Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var res = 0;
  var l = 0,r = height.length - 1;
  var h;
  while(l < r){
      h = Math.min(height[l],height[r]);
      res = Math.max(res,h * (r - l));
      if(height[l] < height[r]){ //小的一方移动
        l++;
      }else{
        r--;
      }
  }  
  return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));