function spoonerize(words) {
    let x = words.split(" ");
    let y = [];
    let z = [];
    for(let i =0; i < x[0].length; i++) {
        y.push(x[0][i]);
    }
    for(let i = 0; i < x[1].length; i++) {
        z.push(x[1][i]);
    }
    y[0] = x[1][0];
    z[0] = x[0][0];
    y.join("");
    
    return `${y.join("")} ${z.join("")}`;


}

console.log(spoonerize("nit picking"));