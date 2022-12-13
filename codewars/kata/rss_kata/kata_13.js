/*
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.
*/

function sentence(list) {
    let x = [];
    for(let i = 0; i < list.length; i++) {
        for(key in list[i]) {
            x.push(Object.keys(list[i]));
        }
    }
    x.join("");
    let r = [];
    for (let i = 0; i < x.length; i++) {
        r.push(parseInt(x[i]));
    }
    r.sort((a,b) => a - b);
    let str = ``;
    for(let i = 0; i < list.length; i++) {
        for ( key in list[i]) {
            str += list.key;
        }
    }
    return str;
  }

console.log(sentence([
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
   ]));