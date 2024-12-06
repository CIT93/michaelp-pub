import { CD } from "./countdown.js";
import { getCountdownMessage } from "./message.js";
import { renderTbl } from "./render.js";
import { FORM, OUTPUT, YEAR, DAY, MONTH, SUBMIT } from "./global.js";
import { saveToLS, countdownData } from "./storage.js";

// -- Function to validate year and day field --
const validateField = function (event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = required;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};
// -- Blur event listeners --
YEAR.addEventListener("blur", validateField);
DAY.addEventListener("blur", validateField);
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

renderTbl(countdownData);

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const month = MONTH.value;

  if (YEAR.value !== "" && DAY.value !== "" && month !== "") {
    const cdObj = new CD(YEAR.value, month, DAY.value);
    const { daysRemaining, monthsRemaining, nextXmasDate } =
      cdObj.calculateRemainingTime();

    const newCountdown = {
      selectedDate: cdObj.selectedDate,
      nextXmasDate: nextXmasDate,
      daysRemaining: daysRemaining,
      monthsRemaining: monthsRemaining,
      message: getCountdownMessage([
        { calculateRemainingTime: () => ({ daysRemaining, monthsRemaining }) },
      ]),
    };

    countdownData.push(newCountdown);

// -- Update Local Storage --
    saveToLS(countdownData);
    renderTbl(countdownData);
    FORM.reset();
    OUTPUT.textContent = "";
  } else {
    SUBMIT.textContent = "Please select a valid date!";
    return;
  }
});

// -- Live Countdown --
const addLiveCountdown = async () => {
  const liveCountdown = document.getElementById("liveCountdown");
  const now = new Date();
  const currentYear = now.getFullYear();
  let christmas = new Date(currentYear, 11, 25);

  if (now > christmas) {
    christmas = new Date(currentYear + 1, 11, 25);
  }
  const diff = christmas - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  liveCountdown.innerHTML = `<h3>Today is ${now.toDateString()}</h3>
      <h3>Christmas is on ${christmas.toDateString()}</h3>
      <h3>${days}d : ${hours}h : ${minutes}m : ${seconds}s left!</h3>`;
};

setInterval(addLiveCountdown, 1000);
