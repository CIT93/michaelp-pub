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
  //const numberInHousehold = 3;

  determineHouseholdPts(3);
  

  // global scope


  function hSPts(hSize) {
    console.log("calculating");
    if (hSize === "large") {
      homeSizePts = 10;
    } else if (hSize === "medium") {
      homeSizePts = 7;
    } else if (hSize === "small") {
      homeSizePts = 4;
    } else if (hSize === "apartment") {
      homeSizePts = 2;
    }
    console.log(`Because the home is ${hSize}-sized, the points would be ${homeSizePts}.`);
  }

  let homeSizePts = 0;

  hSPts("large");
  hSPts("medium");
  hSPts("small");
  hSPts("apartment");