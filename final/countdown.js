class CD {
  constructor(year, month, day) {
    this.year = parseInt(year, 10);
    this.month = parseInt(month, 10);
    this.day = parseInt(day, 10);

    // -- Check if the date is valid --
    this.selectedDate = new Date(this.year, this.month - 1, this.day);
    console.log(this.selectedDate);
    if (
      this.selectedDate.getDate() !== this.day ||
      this.selectedDate.getMonth() !== this.month - 1
    ) {
      invalidDate();
      return null;
    }

    this.xMasDate = new Date(this.year, 11, 25);
  }
  calculateRemainingTime() {
    const currentXmasDate = this.xMasDate;
    let nextXmasDate;

    if (this.selectedDate > currentXmasDate) {
      nextXmasDate = new Date(currentXmasDate.getFullYear() + 1, 11, 25);
    } else {
      nextXmasDate = currentXmasDate;
    }

    const timeDiff = nextXmasDate - this.selectedDate;
    const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    console.log(`Days Remaining: ${daysRemaining}`);
    const monthsRemaining =
      nextXmasDate.getMonth() -
      this.selectedDate.getMonth() +
      12 * (nextXmasDate.getFullYear() - this.selectedDate.getFullYear());
    console.log(`Months Remaining: ${monthsRemaining}`);
    return { daysRemaining, monthsRemaining, nextXmasDate };
  }
}

// -- Date error message --
const invalidDate = function (year, month, day) {
  const errorMessage = document.getElementById("daySelectError");
  errorMessage.textContent = `invalid date`;
  setTimeout(() => {
    errorMessage.textContent = "";
  }, 3000);
};

export { CD };
  