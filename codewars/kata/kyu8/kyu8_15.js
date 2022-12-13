function twoSort(s) {
    s.sort();
    let x = [];
    let y = s[0];
    for (let i = 0; i < s[0].length; i++) {
        x.push(y[i]);
    }
    return x.join("***");
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));