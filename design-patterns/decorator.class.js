// class example of decorator design pattern

// Component interface
class Coffee {
  cost() {}
  getDescription() {}
}

// Concrete Component
class SimpleCoffee extends Coffee {
  cost() {
    return 5;
  }

  getDescription() {
    return "Simple Coffee";
  }
}

// Decorator class
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  cost() {
    return this.coffee.cost() + 2;
  }

  getDescription() {
    return this.coffee.getDescription() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  cost() {
    return this.coffee.cost() + 1;
  }

  getDescription() {
    return this.coffee.getDescription() + ", Sugar";
  }
}

// 사용 예제
let myCoffee = new SimpleCoffee();
console.log(myCoffee.getDescription(), "- Cost:", myCoffee.cost() + "€");

myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.getDescription(), "- Cost:", myCoffee.cost() + "€");

myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.getDescription(), "- Cost:", myCoffee.cost() + "€");
