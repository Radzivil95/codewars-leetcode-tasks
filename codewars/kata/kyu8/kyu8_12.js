function isPythagoreanTriple(integers) {
    let c = integers[2] ** 2;
    let b = integers[1] ** 2;
    let a = integers[0] ** 2;

    if(a+b >=c) {
        return true;
    } else {
        return false;
    }
}

console.log(isPythagoreanTriple([3, 4, 5]));
console.log(isPythagoreanTriple([70, 18, 8]));
console.log(isPythagoreanTriple([3, 5, 9]));
console.log(isPythagoreanTriple([72, 78, 30]));