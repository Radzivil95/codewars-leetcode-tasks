function getParticipants(handshakes){
    let count = 0;
    let result = 0;
    while(handshakes > result) {
        result = count * (count + 1) / 2;
        count++;
    }
    return count;
  }

// function getParticipants(handshakes){
//     if(!handshakes) return 1;

//     let answer = 0;
//     let sum = 0

//     while(handshakes > sum) {
//         sum = answer * (answer + 1) / 2;

//         answer++;
//     }

//     return answer;
// }
console.log(getParticipants(7))