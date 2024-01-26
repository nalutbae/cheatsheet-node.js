// class example of abstract factory design pattern

class AbstractFactory {
  constructor(type) {
    this.type = type;
  }

  create() {
    switch (this.type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      default:
        return Error(`Implement type for '${this.type}'`);
    }
  }
}

// Types generated in factory
class Car {
  constructor() {
    console.log("Car created");
  }
}
class Bike {
  constructor() {
    console.log("Bike created");
  }
}
module.exports = AbstractFactory;

console.log(new AbstractFactory("car").create());
console.log(new AbstractFactory("bike").create());
console.log(new AbstractFactory("plane").create());
console.log(new AbstractFactory("ship").create());
