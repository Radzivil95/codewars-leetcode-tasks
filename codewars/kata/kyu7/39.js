//Learning English in groups

function strongEnough(earthquake, age) {
  let earthquakeValue = 1;
  let buildingValue = 1000;
  for(i in earthquake) {
    let tmp = 0;
    for( j in earthquake[i]) {
      tmp += earthquake[i][j]
    }
    earthquakeValue *= tmp;
    tmp = 0;
  }
  for(let i = 0; i < age; i++) {
    buildingValue = buildingValue - (buildingValue / 100);
  }
  if(buildingValue >= earthquakeValue) {
    return 'Safe!'
  }
  return "Needs Reinforcement!";
}

console.log(strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2));
console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 2));
console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 3));
console.log(strongEnough([[5,3,7],[3,3,1],[4,1,2]], 3));