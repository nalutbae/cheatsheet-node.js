// class example of proxy design pattern

class Car {
  drive() {
    console.log("driving");
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
    this.car = new Car();
  }

  drive() {
    if (this.driver.age >= 16) {
      this.car.drive();
    } else {
      console.log("too young to drive");
    }
  }
}
module.exports = CarProxy;

// Usage
const driver = { age: 15 };
const car = new CarProxy(driver);
car.drive(); // "too young to drive"
driver.age = 16;
car.drive(); // "driving"
