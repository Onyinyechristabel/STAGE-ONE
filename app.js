//select the class of the time
const day = document.querySelector('h2[data-testid="currentDayOfTheWeek"]');
const time = document.querySelector('h3[data-testid="currentUTCTime"]');
console.log(time);
console.log(day, 11);
//write the day
const date = new Date();
const day1 = date.getDay();

if (new Date().getDay() == 0) {
  day.innerText = "Sunday";
} else if (new Date().getDay() == 1) {
  day.innerText = "Monday";
} else if (new Date().getDay() == 2) {
  day.innerText = "Tuesday";
} else if (new Date().getDay() == 3) {
  day.innerText = "Wednesday";
} else if (new Date().getDay() == 4) {
  day.innerText = "Thursday";
} else if (new Date().getDay() == 5) {
  day.innerText = "Friday";
} else if (new Date().getDay() == 6) {
  day.innerText = " Saturday";
}

setInterval(function () {
  //time to change every millieconds

  const time1 = new Date().getTime();
  console.log(time, 2);
  time.innerText = time1;
}, 1);
