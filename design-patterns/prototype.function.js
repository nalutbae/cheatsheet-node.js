// example of prototype design pattern

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function () {
  console.log(`Hello, my name is ${this.name}`);
};
Person.prototype.sayAge = function () {
  console.log(`My age is ${this.age}`);
};

var john = new Person("John", 30);
john.sayName(); // Hello, my name is John
john.sayAge(); // My age is 30

var jane = new Person("Jane", 25);
jane.sayName(); // Hello, my name is Jane
jane.sayAge(); // My age is 25

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
