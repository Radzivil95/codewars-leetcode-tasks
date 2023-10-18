/*
List Filtering
*/


function filter_list(l) {
  let result = [];
  for(let i = 0 ;i < l.length; i++) {
    if(typeof(l[i]) == 'number') {
      result.push(l[i])
    }
  }
  return result
}