// Who is the killer?
function killer(suspectInfo, dead) {
  let result = [];
  let name = []
  for( let item in suspectInfo) {
    let tmp = 0;
    name.push(item);
    for(let i = 0; i < suspectInfo[item].length; i++) {
      let y = suspectInfo[item];

      if( dead.includes(suspectInfo[item][i])) {
        tmp++;
      }
    }
    result.push(tmp);
  }
  let x = result.slice();
  x.sort((a,b) => a - b);

  return name[result.indexOf(x[x.length - 1])];
}

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 
                    'Johnny': ['David', 'Kyle', 'Lucas'], 
                    'Peter': ['Lucy', 'Kyle']}, 
                    ['Lucas', 'Bill']));

