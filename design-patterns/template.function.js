// function example of template design pattern

// Beverage template function
function makeBeverage(boilWater, brew, pourInCup, addCondiments) {
  // Template method: Define the process of making beverage
  function make() {
    boilWater();
    brew();
    pourInCup();
    addCondiments();
  }

  return { make };
}

// Coffee making function
function makeCoffee() {
  const boilWater = () => console.log("Boiling water");
  const brew = () => console.log("Dripping coffee through filter");
  const pourInCup = () => console.log("Pouring into cup");
  const addCondiments = () => console.log("Adding sugar and milk");

  return makeBeverage(boilWater, brew, pourInCup, addCondiments);
}

// Tea making function
function makeTea() {
  const boilWater = () => console.log("Boiling water");
  const brew = () => console.log("Steeping the tea");
  const pourInCup = () => console.log("Pouring into cup");
  const addCondiments = () => console.log("Adding lemon");

  return makeBeverage(boilWater, brew, pourInCup, addCondiments);
}

// Usage
const coffeeMaker = makeCoffee();
console.log("Making coffee:");
coffeeMaker.make();

const teaMaker = makeTea();
console.log("\nMaking tea:");
teaMaker.make();
