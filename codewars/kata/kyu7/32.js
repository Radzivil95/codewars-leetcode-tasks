
/*
New season, new league
*/
function premierLeagueStandings(teamStandings) {
  let result = {};
  result[1] = teamStandings[1];
  let arr = []
  for(let key in teamStandings) {
    if(teamStandings[key] != teamStandings[1]) {
      arr.push(teamStandings[key]);
    }
  }
  arr.sort();
  for(let i = 0;  i < arr.length; i++) {
    result[i + 2] = arr[i]
  }
  return result;
}

console.log(premierLeagueStandings({1:'Leeds United', 2:'Liverpool', 3:'Manchester City', 4:'Coventry', 5:'Arsenal'}));
