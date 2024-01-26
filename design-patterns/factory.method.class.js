// class example of factory method design pattern

class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  create(type) {
    switch (type) {
      case "BMW":
        return new Car("BMW", 10000);
      case "Audi":
        return new Car("Audi", 20000);
      default:
        throw new Error(`No such car: ${type}`);
    }
  }
}
module.exports = CarFactory;

console.log(new CarFactory().create("BMW"));
console.log(new CarFactory().create("Audi"));
console.log(new CarFactory().create("Tesla"));
console.log(new CarFactory().create("Ford"));
console.log(new CarFactory().create("Honda"));
