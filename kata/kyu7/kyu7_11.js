/*
Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
*/

function dayOfTheWeek(date){
    let x = date.split("/");
    let day = parseInt(x[0]);
    let month = parseInt(x[1]);
    let year = parseInt(x[2]);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let y = new Date(year, month -1 , day);
    return days[y.getDay(y)];
}

console.log(dayOfTheWeek("02/06/1940"));