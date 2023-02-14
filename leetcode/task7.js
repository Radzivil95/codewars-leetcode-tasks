//Number of Steps to Reduce a Number to Zero

var numberOfSteps = function(num) {
  let count = 0;
  let x = num;
  while(x > 0) {
      if(x%2==0) {
          x = x/2;
          count++;
      } else {
          x = x-1;
          count++;
      }
  }
  return count
};


console.log(numberOfSteps(123));