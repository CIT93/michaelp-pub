function determineHouseSizePts(size) {
  console.log("Inside the function");
  if (size === "large") {                                         // |
    carbonFootprintPoints = carbonFootprintPoints + 10;        // |
  } else if (size === "medium") {                                  // |
    carbonFootprintPoints = carbonFootprintPoints + 7;         // | This is a "block" scope
  } else if (size === "small") {                                  // |
    carbonFootprintPoints = carbonFootprintPoints + 4;         // |
  } else if (size === "apt") {                                 // |
    carbonFootprintPoints = carbonFootprintPoints + 2;         // |
  }
}


function determineHouseholdPts(numberInHousehold) {
  console.log("Inside the function");
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (numberInHousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
  console.log(`Based on the number of members in the household of ${numberInHousehold}, the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;
//
// global scope
//
determineHouseholdPts(5);
determineHouseSizePts("apt");