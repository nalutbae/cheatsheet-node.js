// function example of decorator design pattern

// Concrete component function
function createSimpleCoffee() {
  return {
    cost: function () {
      return 5;
    },
    getDescription: function () {
      return "Simple Coffee";
    },
  };
}

// Decorator function
function addMilk(coffee) {
  return {
    cost: function () {
      return coffee.cost() + 2;
    },
    getDescription: function () {
      return coffee.getDescription() + ", Milk";
    },
  };
}

function addSugar(coffee) {
  return {
    cost: function () {
      return coffee.cost() + 1;
    },
    getDescription: function () {
      return coffee.getDescription() + ", Sugar";
    },
  };
}

// 사용 예제
let myCoffee = createSimpleCoffee();
console.log(myCoffee.getDescription(), "- Cost:", myCoffee.cost() + "€");

myCoffee = addMilk(myCoffee);
console.log(myCoffee.getDescription(), "- Cost:", myCoffee.cost() + "€");

myCoffee = addSugar(myCoffee);
console.log(myCoffee.getDescription(), "- Cost:", myCoffee.cost() + "€");
