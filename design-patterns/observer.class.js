// class example of observer design pattern

// Subject Class
class StockMarket {
  constructor() {
    this.observers = []; // Registered observer list
    this.stockPrice = 0; // Stock price initial value
  }

  // Observator registration method
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Observant removal method
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  // Stock price setting and notification method to observers
  setStockPrice(price) {
    this.stockPrice = price;
    this.notifyObservers();
  }

  // Notification method to observers
  notifyObservers() {
    this.observers.forEach((observer) => {
      observer.update(this.stockPrice);
    });
  }
}

// Observer interface
class StockObserver {
  constructor(name) {
    this.name = name;
  }

  // A method called when changing stock prices
  update(price) {
    console.log(`${this.name} received an update: Stock price is ${price}`);
  }
}

// Usage
const market = new StockMarket();

const observer1 = new StockObserver("Observer 1");
const observer2 = new StockObserver("Observer 2");

market.addObserver(observer1);
market.addObserver(observer2);

// Change and notification of stock prices
market.setStockPrice(100);
market.setStockPrice(110);

market.removeObserver(observer2);

market.setStockPrice(120);
