// function example of abstract factory design pattern

function createAnimal(type) {
  if (type === "dog") {
    return new Dog();
  } else if (type === "cat") {
    return new Cat();
  }
}
module.exports = createAnimal;

// Types generated in factory
function Dog() {
  this.bark = "bowbow";
}
function Cat() {
  this.bark = "miao";
}
module.exports = { Dog, Cat };

console.log(createAnimal("dog"));
console.log(createAnimal("cat"));
console.log(createAnimal("bird"));
console.log(createAnimal("fish"));
