console.log("Carbon Footprint")

//How to Calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

// 1. Count the members of your household.
const myHouseMembers = 8;
// 2. Consider the size of your home.
const myHomeSize = 7;
// 3. Evaluate your food choices.
const myFoodChoices = 6;
// 4. Examine your water consumption.
const waterConsumption = 3;
// 5. Determine how many household purchases you make each year.
const myAnnualPurchases = 10;
// 6. Consider how much waste you produce.
const wasteProduction = 20;
// 7. Identify the amount of waste that you recycle.
const wasteRecycling = 12;
// 8. Tally up your annual transportation scores.
const myAnnualTransport = 6;
// 9. Add up your points.
const cfpTotal= myHouseMembers + myHomeSize + myFoodChoices + waterConsumption + myAnnualPurchases + wasteProduction + wasteRecycling + myAnnualTransport
// 10. Write JS to update the rendered html (index.html) with total footprint.
document.querySelector("h2").textContent= cfpTotal;

