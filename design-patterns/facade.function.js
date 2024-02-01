// function example of facade design pattern
function Engine() {}
function Transmission() {}
function Wheels() {}
Engine.prototype.start = function () {
  console.log("Engine started");
};
Engine.prototype.stop = function () {
  console.log("Engine stopped");
};
Transmission.prototype.shiftToDrive = function () {
  console.log("Transmission shifted to drive");
};
Wheels.prototype.rotate = function () {
  console.log("Wheels rotated");
};

function Car() {
  this.engine = new Engine();
  this.transmission = new Transmission();
  this.wheels = new Wheels();
}

Car.prototype.start = function () {
  this.engine.start();
  this.transmission.shiftToDrive();
  this.wheels.rotate();
};

Car.prototype.stop = function () {
  this.engine.stop();
};

// Usage
const car = new Car();
car.start();
car.stop();
