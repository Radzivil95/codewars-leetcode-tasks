//Squares of a Sorted Array
//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
      result.push(nums[i] ** 2);
    }
    return result.sort((a,b) => a - b);
};

console.log(sortedSquares([-7,-3,2,3,11]))