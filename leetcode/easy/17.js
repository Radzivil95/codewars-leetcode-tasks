//Find Numbers with Even Number of Digits


var findNumbers = function(nums) {
  let count = 0;
  let x = nums.join(' ').split(' ');
  for(let i = 0; i < x.length; i++) {
      if(String(x[i]).length % 2 == 0) {
        count++;
      }
  }
  return count;
};

console.log(findNumbers([555,901,482,1771]));