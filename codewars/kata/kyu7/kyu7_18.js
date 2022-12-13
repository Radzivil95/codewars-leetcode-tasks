function largest(n,xs){
    xs.sort((a, b) => a - b);
    xs.reverse();
    let result = [];
    for( let i = 0; i < n; i++) {
      result.push(xs[i]);
    }
    return result.reverse();
  }

console.log(largest(2,[10,9,8,7,6,5,4,3,2,1]));