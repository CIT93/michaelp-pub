import {renderTbl} from "./render.js";
import {determineHouseSizePts, determineHouseholdPts} from "./cfpt.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveToLS, cfpData} from "./storage.js";

const start = (first, last, ...points) => {
  const [houseHoldMembers, houseSize] = points;
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}
start("Test", "w", 5, "large");
renderTbl(cfpData);

//Function to validate a single field
const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

// Attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);
document.getElementById("form").addEventListener
  ("submit", function (event) {
      event.preventDefault(); 
});


FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== "") {
   SUBMIT.textContent = "";
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveToLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name*";
  }

});

//rest operator
// const add2 = function(...a) {  //parameter, inserts value from the argument, setting this value to default is called edge-case
//   return 2 + a[3];  //returns result as 6 because "4" is the third value in the argument
// }

//const result = add2(1, 2, 3, 4, 5); //argument


//arrow function
// const add2 = (a) => 2 + a; //can only be done with 1 expression

// const result = add2(100);
// console.log(result);



//IIFE

// const a = 4;

// (function(add2){
//   console.log("inside IIFE");
//   console.log(a);
// })(a);

