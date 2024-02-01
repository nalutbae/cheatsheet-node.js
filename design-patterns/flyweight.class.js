// class example of flyweight design pattern
// For example, when you display characters in the text editor, you can use an object for each character to use a lot of memory.However, since most characters have the same shape and size, you can use the FlyWeight pattern to maintain only one object for the same characters and reuse the object.

// Flyweight class
class NumberFlyweight {
  constructor(value) {
    this.value = value;
  }

  // Number display method
  print() {
    console.log(`Number: ${this.value}`);
  }
}

// Flyweight factory class
class NumberFlyweightFactory {
  constructor() {
    this.numbers = {};
  }

  // Number generation and return method
  getNumber(value) {
    if (!this.numbers[value]) {
      this.numbers[value] = new NumberFlyweight(value);
    }
    return this.numbers[value];
  }
}

// Usage
const numberFactory = new NumberFlyweightFactory();

const number1 = numberFactory.getNumber(5);
const number2 = numberFactory.getNumber(10);
const number3 = numberFactory.getNumber(5); // Get the number already created

number1.print(); // Number: 5
number2.print(); // Number: 10
number3.print(); // Number: 5 (Using the same object because it has already been created)
