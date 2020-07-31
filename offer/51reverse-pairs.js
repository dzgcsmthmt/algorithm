// 数组中的逆序对

/**
 * 
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
   示例 1:

   输入: [7,5,6,4]
   输出: 5
*/

function reversePairs(arr) {
   var len = arr.length, count = 0;
   if (len <= 1) return count;

   console.log(mergeSortRec(arr));

   
   return count;

   function mergeSortRec(arr) {
      let len = arr.length;
      if (len == 1) {
         return arr;
      }

      let mid = Math.floor(len / 2);
      let left = arr.slice(0, mid);
      let right = arr.slice(mid, len);
      return merge(mergeSortRec(left), mergeSortRec(right));
   }

   function merge(left, right) {
      var result = [], il = 0, ir = 0;
      while (il < left.length && ir < right.length) {
         if (left[il] > right[ir]) {
            console.log('pair [', left[il], ',', right[ir], ']')
            result.push(right[ir++]);
            count += left.length - il;
         } else {
            result.push(left[il++]);
         }
      }

      while (il < left.length) {
         result.push(left[il++]);
      }

      while (ir < right.length) {
         result.push(right[ir++]);
      }

      return result;
   }


}



console.log(reversePairs([7, 5, 6, 4]));
