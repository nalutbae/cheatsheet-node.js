// class example of flyweight design pattern
// For example, when you display characters in the text editor, you can use an object for each character to use a lot of memory.However, since most characters have the same shape and size, you can use the FlyWeight pattern to maintain only one object for the same characters and reuse the object.

// Flyweight function
function createNumber(value) {
  return {
    value: value,

    // Number display method
    print: function () {
      console.log(`Number: ${this.value}`);
    },
  };
}

// Flyweight factory function
const numberFactory = (function () {
  const numbers = {};

  return {
    // Number generation and return method
    getNumber: function (value) {
      if (!numbers[value]) {
        numbers[value] = createNumber(value);
      }
      return numbers[value];
    },
    getNumbers: function () {
      return numbers;
    },
  };
})();

// Usage
const number1 = numberFactory.getNumber(5);
const number2 = numberFactory.getNumber(10);
const number3 = numberFactory.getNumber(5); // Get the number already created

number1.print(); // Number: 5
number2.print(); // Number: 10
number3.print(); // Number: 5 (Using the same object because it has already been created)
console.log(numberFactory.getNumbers()); // { '5': { value: 5 }, '10': { value: 10 } }
console.log(number1 === number3); // true
