// function example of factory method design pattern

function createPerson(name, age) {
  return {
    name,
    age,
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}

const person1 = createPerson("John", 30);
const person2 = createPerson("Jane", 25);
person1.sayHello(); // Hello, my name is John
person2.sayHello(); // Hello, my name is Jane
console.log(person1); // { name: 'John', age: 30, sayHello: [Function] }
console.log(person2); // { name: 'Jane', age: 25, sayHello: [Function] }
