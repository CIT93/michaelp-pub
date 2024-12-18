import {renderTbl} from "./render.js";
import {determineHouseSizePts, determineHouseholdPts} from "./cfpt.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveToLS, cfpData} from "./storage.js";
import {FP} from "./fp.js";

const start = function(first, last, houseHoldMembers, houseSize) {
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
const validateField = function(event) {
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


FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== "") {
   SUBMIT.textContent = "";
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foods.value,
      e.target.foodSource.value,
      parseInt(e.target.water.value),
      parseInt(e.target.purchase.value)
    );
    cfpData.push(fpObj);
    saveToLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name*";
  }

});

