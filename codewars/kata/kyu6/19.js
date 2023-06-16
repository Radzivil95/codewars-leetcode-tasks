//deepCount

// function deepCount(a){
//   let count = 0;
//   for(let i = 0; i < a.length; i++) {
//     if(typeof(a[i]) == 'object') {
//       count += a[i].length;
//     }
//   }
//   count += a.length;
//   return count;
// }




function deepCount(a) {
   return a.reduce((count, arrItem) => {
      return count + (Array.isArray(arrItem) ? deepCount(arrItem) : 0);
   }, a.length);
};
console.log(deepCount([1, 2, [3, 4, [5]]]));