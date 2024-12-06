class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    foodChoice,
    foodSource,
    waterConsum,
    purchases,
    cans,
    recycle,
    car,
    publicTranspo,
    flight,
  ) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterConsumPoints = waterConsum;
    this.purchases = purchases;
    this.cans = cans;
    this.recycle = recycle;
    this.car = car;
    this.publicTranspo = publicTranspo;
    this.flight = flight;
    this.calculateHouseHoldPoints();
    this.calculateHouseSizePoints();
    this.calculateFoodChoicePoints();
    this.calculateFoodSourcePoints();
    this.calculatePurchasePoints();
    this.calculateTotal();
  }
  calculateHouseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }
  calculateHouseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apt") {
      this.houseSizePoints = 2;
    }
  }
  calculateFoodChoicePoints() {
    if (this.foodChoice === "Domestic meat on a daily basis") {
      this.foodChoicePoints = 10;
    } else if (this.foodChoice === "Domestic meat a few times per week") {
      this.foodChoicePoints = 8;
    } else if (this.foodChoice === "Vegetarian") {
      this.foodChoicePoints = 4;
    } else if (this.foodChoice === "Vegan or only wild meat") {
      this.foodChoicePoints = 2;
    } else if (this.foodChoice === "Mostly prepackaged convenience food") {
      this.foodChoicePoints = 12;
    } else if (this.foodChoice === "A balance of fresh and convenience food") {
      this.foodChoicePoints = 6;
    } else if (
      this.foodChoice === "Only fresh, locally grown, or hunted food"
    ) {
      this.foodChoicePoints = 2;
    }
  }
  calculateFoodSourcePoints() {
    if (this.foodSource === "packed") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balanced") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "local") {
      this.foodSourcePoints = 2;
    }
  }
  calculatePurchasePoints() {
    if (this.purchases === 4) {
      this.purchasesPoints = 10;
    } else if (this.purchases === 3) {
      this.purchasesPoints = 8;
    } else if (this.purchases === 2) {
      this.purchasesPoints = 6;
    } else if (this.purchases === 1) {
      this.purchasesPoints = 4;
    } else if (this.purchases === 0) {
      this.purchasesPoints = 2;
    }
  }
  calculateTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodChoicePoints +
      this.foodSourcePoints +
      this.waterConsumPoints +
      this.purchasesPoints +
      this.cans +
      this.recycle +
      this.car +
      this.publicTranspo +
      this.flight;
  }
}

export { FP };