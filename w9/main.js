import {renderTbl} from "./render.js";
import {determineHouseSizePts, determineHouseholdPts} from "./cfpt.js";
import {FORM} from "./global.js";
import {saveToLS, cfpData} from "./storage.js";

const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const submitElement = document.getElementById("submitError")

function start(first, last, houseHoldMembers, houseSize) {
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

renderTbl(cfpData);

//Function to validate a single field
function validateField(event) {
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
firstNameElement.addEventListener("blur", validateField);
lastNameElement.addEventListener("blur", validateField);
document.getElementById("form").addEventListener
  ("submit", function (event) {
      event.preventDefault(); 
});


FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const firstNameIsValid = firstNameElement.value !== "";
  const lastNameIsValid = lastNameElement.value !== "";
  if (firstNameIsValid && lastNameIsValid) {
   submitElement.textContent = "";
    const houseHoldMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(firstName, lastName, houseHoldMembers, houseSize);
    saveToLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    submitElement.textContent = "Form requires first name and last name*";
  }

});





