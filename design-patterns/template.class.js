// class example of template design pattern

// Beverage template class
class Beverage {
  // Template method: Define the process of making beverage
  make() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  // Boiling water (abstract method)
  boilWater() {
    console.log("Boiling water");
  }

  // Brewing step (abstract method)
  brew() {
    throw new Error("brew method must be implemented");
  }

  // Steps on the cup (abstract method)
  pourInCup() {
    console.log("Pouring into cup");
  }

  // Add codiments (abstract method)
  addCondiments() {
    throw new Error("addCondiments method must be implemented");
  }
}

// Coffee class
class Coffee extends Beverage {
  // Implementing the stage of brewing specifically
  brew() {
    console.log("Dripping coffee through filter");
  }

  // Implementing the step of adding codiments only to coffee
  addCondiments() {
    console.log("Adding sugar and milk");
  }
}

// Tea class
class Tea extends Beverage {
  // Implementing the stage of brewing specifically
  brew() {
    console.log("Steeping the tea");
  }

  // Implementing the step of adding codiments only to the tea
  addCondiments() {
    console.log("Adding lemon");
  }
}

// Usage
const coffee = new Coffee();
console.log("Making coffee:");
coffee.make();

const tea = new Tea();
console.log("\nMaking tea:");
tea.make();
