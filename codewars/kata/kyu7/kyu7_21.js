function solution(start, finish) {
  let x = finish - start;

  return Math.floor(x/3) + x % 3;
}


console.log(solution(1, 5));
console.log(solution(2, 4));

console.log(solution(700, 714));