// Boiled Eggs

function cookingTime(eggs) {
  let x = eggs / 8;
  return Math.ceil(x) * 5;
}

console.log(cookingTime(10))
console.log(cookingTime(5))