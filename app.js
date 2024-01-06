let date = document.querySelector("#date");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let today = new Date();
function getDate() {
  let dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  year.innerText = today.getFullYear();
  month.innerText = monthArray[today.getMonth()];
  date.innerHTML = today.getDate();
  day.innerText = dayArray[today.getDay()];
}
getDate();
