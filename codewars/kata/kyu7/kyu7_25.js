function mango(quantity, price){
  let counter = 0
  for(let i = 0; i < Math.floor(quantity / 3); i++) {
    counter++;
  }
  console.log(counter);
  let y = quantity - counter * 3;
  let result = counter * 2 * price + y * price;
  return result;
}


console.log(mango(5, 3));