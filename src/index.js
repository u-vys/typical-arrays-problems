
exports.min = function min (array) {
  let resultMin;
  if ((array === undefined) || (array.length === 0)) resultMin = 0; 
      else { resultMin = array [0];
        for (let elem of array) {
        if (elem < resultMin) resultMin = elem;
      }
      } 
 return resultMin;
}

exports.max = function max (array) {
  let resultMax;
 
  if ((array === undefined) || (array.length === 0)) resultMax = 0; 
      else { resultMax = array [0];
        for (let elem of array) {
        if (elem > resultMax) resultMax = elem;
      }
      } 


  return resultMax;
}

exports.avg = function avg (array) {
 let result = 0; 
 if ((array === undefined) || (array.length === 0) ) result = 0; 
      else { for (let elem of array) result += elem;
      result = result / array.length}
         
   return result;   
      
}
