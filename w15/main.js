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
    // start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foods.value);
    // fpObj.houseHoldPoints();
    // fpObj.houseSizePoints();
    cfpData.push(fpObj);
    saveToLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name*";
  }

});

// const me = {
//   name: "Mike",
//   hairColor: "Black",
//   location: "Home",
//   age: "19",
//   introduce: function() {
//     console.log(this);
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now.`)
//   }

// }

// const you = {
//   name: "Ere",
//   hairColor: "Black",
//   location: "School",
//   age: "21",
//   introduce: function() {
//     console.log(this);
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now.`)
//   }

// }

// me.introduce();
// you.introduce();

// class Human {
//   constructor(name, hairColor, location, age) {
//     this.name = name;
//     this.hairColor = hairColor;
//     this.location = location;
//     this.age = age;
//   }
//   introduce() {
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now they are ${this.age} years old.`)
//   }
// }

// const mike = new Human("Mike", "White", "Earth", 200);
// const john = new Human("John", "Red", "Mars", 120);
// mike.introduce();
// john.introduce();
// mike.hrv = 60;










//Async JavaScript & Callback Functions


// function getPizza() {
//   return "🍕"
// }
// const pizza = getPizza
// console.log(`${pizza}`);

// let pizza
// function orderPizza() {
//   console.log("Order pizza")
//   setTimeout(() => {
//     pizza = "🍕";
//     console.log(`${pizza} is ready`)
//   }, 2000)
//   console.log("Pizza has been ordered")
// }
// orderPizza()
// console.log("Call Qoli")
// console.log(`Eat ${pizza}`);

// function orderPizza(callback) {
//   setTimeout(() => {
//     const pizza = `🍕`
//     callback()
//   }, 2000)
// }
// function pizzaReady(pizza) {
//   console.log(`Eat the ${pizza}`)
// }
// orderPizza(pizzaReady)
// console.log(`Call Qoli`)


// window.addEventListener('click', callback) 
//   function callback() {
//   console.log(`clicked`)
//   }



// function thing1() {
//   // Call pizza shop
// }
// function thing2() {
//   // order pizza 
// }
// function thing3() {
//   // eat pizza 
// }
// function thing1 ( callback) {
//   callback()
// }
// function thing2 ( callback) {
//   callback()

// }function thing3 ( callback) {
//   callback()
// }

// thing1(() => {
//   thing2(() => {
//     thing3()
//   })
// })