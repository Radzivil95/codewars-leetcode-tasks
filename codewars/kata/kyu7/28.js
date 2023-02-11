// Who is the killer?
function killer(suspectInfo, dead) {
  let result = {};
  // for (x in suspectInfo) {
  //   let tmp = 0;
  //   for (let i = 0; i < dead.length; i++) {
      
  //     if(x.includes(dead[i])) {
  //       tmp++;
  //     }
  //   }
  //   result.push(tmp);
  //   tmp = 0;
  // }
  // console.log(result);
  console.log(suspectInfo[0])
}

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 
                    'Johnny': ['David', 'Kyle', 'Lucas'], 
                    'Peter': ['Lucy', 'Kyle']}, 
                    ['Lucas', 'Bill']));

