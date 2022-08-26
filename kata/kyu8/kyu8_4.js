/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:
*/
function abbrevName(name){
    let x = name.split(" ");
    return x[0][0].toUpperCase()+"."+x[1][0].toUpperCase();

}

console.log(abbrevName("sam harris"));