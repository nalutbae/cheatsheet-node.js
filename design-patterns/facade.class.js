// class example of facade design pattern
// Facade is a structural design pattern that provides a simplified interface to a complex system.
// It provides a single entry point to the system and hides the complexities of the underlying system.
// The facade pattern is used to provide a simple and unified interface to a complex system.
// It allows the client to access the system without having to know the underlying details.
// The facade pattern is used to hide the complexity of the system and provide a simpler and more user-friendly interface.
// The facade pattern is often used in conjunction with other design patterns such as proxy, decorator, and adapter to provide a more user-friendly interface to a complex system.

// Implementation:
// The Car class is the facade class that provides a simplified interface to the complex system.
// It delegates the complex operations to the underlying components, such as the Engine, Transmission, and Wheels, which are the complex sub-systems.
// The start method is the entry point to the system and delegates the complex operations to the underlying components.
// The Engine, Transmission, and Wheels classes are the complex sub-systems.
// The Engine class provides the start method to start the engine.
class Car {
  constructor() {
    this.engine = new Engine();
    this.transmission = new Transmission();
    this.wheels = new Wheels();
  }
  start() {
    this.engine.start();
    this.transmission.shiftToDrive();
    this.wheels.rotate();
  }
  stop() {
    this.engine.stop();
  }
}

class Engine {
  start() {
    console.log("Engine started");
  }
  stop() {
    console.log("Engine stopped");
  }
}

class Transmission {
  shiftToDrive() {
    console.log("Transmission shifted to drive");
  }
}

class Wheels {
  rotate() {
    console.log("Wheels rotated");
  }
}

// Usage
const car = new Car();
car.start();
car.stop();
