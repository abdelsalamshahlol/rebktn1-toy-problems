/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  let timeSplit = time.split(/(pm|am)/);
  const split = timeSplit[0].split(':');

  if (!timeSplit[1]) {
    return time;
  } else if (timeSplit[1] === 'am') {
    if (parseInt(split[0]) < 12) {
      return 0 + timeSplit[0];
    } else {
      return `00:${split[1]}`;
    }
  } else {
    return `${parseInt(split[0]) + 12}:${split[1]}`;
  }
}
