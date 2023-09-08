//select the class of the time
const day = document.querySelector('h2[data-testid="CurrentDayOfTheWeek"]');
const time = document.querySelector('h3[data-testid="currentUTCTime"]');
//write the day
const date = new Date();
const day1 = date.getDay();
console.log(new Date());
console.log(new Date().getDay());
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

const time1 = date.toLocaleTimeString();
console.log(new Date().toLocaleTimeString());
time.innerText = time1;
