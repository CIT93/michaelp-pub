import { renderTbl } from "./render.js";
import { cfpData } from "./storage.js";

  const determineHouseSizePts = (size = "large") => {
    let houseSizePoints = 0;
    if (size === "large") {
      houseSizePoints = 10;
    } else if (size === "medium") {
      houseSizePoints = 7;
    } else if (size === "small") {
      houseSizePoints = 4;
    } else if (size === "apt") {
      houseSizePoints = 2;
    }
    return houseSizePoints;
  }
  
  const determineHouseholdPts = (numberInHousehold = 5) => {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
      houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
      houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
      houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
      houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
      houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
      houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
      houseHoldPoints = 2;
    }
    return houseHoldPoints;
  }

  const defaultPoints = determineHouseholdPts() + determineHouseSizePts();
  console.log(defaultPoints);
  renderTbl(cfpData);

export {determineHouseSizePts, determineHouseholdPts};