/**
 I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
 */

function generateShape(integer){
    let x = "";
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer; j++) {
            x += "+";
            if (j == integer - 1){
                x += "\n";
            }
        }
    }
    return x.slice(0,-1);
}


console.log( generateShape(8));

//best practice

// function generateShape(n){
//     return ("+".repeat(n)+"\n").repeat(n).trim()
//   }