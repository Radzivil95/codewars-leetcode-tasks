/**
 * Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
 */
let obj = {
  one: '1',
  two: 2,
  three: false,
  four: {},
  another: '3',
  andit: [],
  andyou: [function(){}],
  whatabout: { andone: 'and another',
   andtwo: 2, andthree: 'and again',
   test: {
    test: "dsd"
  }},
  lastkey: [ [ [Array], false ], 0 ]
}

function strCount(obj){
  let total = 0;
  for(let item of Object.values(obj)) {
    
    if(typeof(item) == 'string') {
      total++;
    } else if (item == null) {
      continue
    } else {
      total += strCount(item);
    }
    
  } 
  return total;
}

console.log(typeof(null));
console.log(strCount(obj));

// else if(typeof(obj[item]) == 'object' && obj[item].length == 0) {
//   if(typeof(obj[item]) == 'string') {
//     strTotal.push(obj[item]);
//   }
//   return strTotal
console.log(strCount({
  first:  "1",
  second: "2",
  third:  false,
  fourth: ["anytime",2,3,4],
  fifth:  null,
  sixth:  undefined,
  whatabout: { andone: 'and another', andtwo: 2, andthree: 'and again' },
  seventh:{}
}));