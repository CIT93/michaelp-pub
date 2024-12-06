import {renderTbl} from "./render.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveToLS, cfpData} from "./storage.js";
import {FP} from "./fp.js";


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

const determineRecycleItems = e => {
  const numberChecked = document.querySelectorAll('.recycle:checked').length;
  return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    paper: e.target.paper.checked,
    aluminum: e.target.aluminum.checked,
    steel: e.target.steel.checked,
    food: e.target.food.checked,
    recyclePoints: (24 - (numberChecked * 4))
  }
}

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
      parseInt(e.target.purchases.value),
      parseInt(e.target.cans.value),
      determineRecycleItems(e),
      parseInt(e.target.car.value),
      parseInt(e.target.publicTranspo.value),
      parseInt(e.target.flight.value),
    );
    cfpData.push(fpObj);
    saveToLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name*";
  }

});