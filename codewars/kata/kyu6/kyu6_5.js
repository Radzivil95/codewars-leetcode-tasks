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
  whatabout: { andone: 'and another', andtwo: 2, andthree: 'and again' },
  lastkey: [ [ [Array], false ], 0 ]
}

function strCount(obj){
  let count = 0;
  for (el in obj){
    if (typeof(obj[el]) == 'object' && !Array.isArray(obj[el])) {
      return isObj(obj[el]);
    }
    if(Array.isArray(obj[el])) {
      for(let i = 0; i < obj[el].length; i++) {
        if(typeof(obj[el][i]) == 'string') {
          count++;
        }
      }
    }
    if(typeof(obj[el]) == 'string') {
      count += 1;
    }
  }
  return count + strCount();
}

function isObj(obj) {
  let y = 0;
    for(x in obj) {
      if(typeof(obj[x]) == 'string') {
        y += 1;
      }
    }
  return y + isObj(obj);
}

console.log(strCount(obj));


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