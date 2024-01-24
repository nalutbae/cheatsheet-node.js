// class example of prototype design pattern
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
module.exports = Person;

// object example of prototype design pattern
const john = new Person("John", 30);
john.greet(); // Hello, my name is John

const jane = new Person("Jane", 25);
jane.greet(); // Hello, my name is Jane

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
console.log(john.constructor === Person); // true
console.log(john.constructor === Object); // false
