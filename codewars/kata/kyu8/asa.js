function flickSwitch(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] != 'flick') {
       result.push(true);
      }
    if(arr[i] != 'flick') {
      result.push(false)
    }
    // result.push(false)
  }
  return result;
}


console.log(flickSwitch(["codewars", "flick", "code", "wars"]));