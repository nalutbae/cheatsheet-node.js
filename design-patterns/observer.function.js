// function example of observer design pattern

// Subject function
function createStockMarket() {
  let observers = []; // Registered observer list
  let stockPrice = 0; // Stock price initial value

  function addObserver(observer) {
    observers.push(observer);
  }

  function removeObserver(observer) {
    const index = observers.indexOf(observer);
    if (index !== -1) {
      observers.splice(index, 1);
    }
  }

  function setStockPrice(price) {
    stockPrice = price;
    notifyObservers();
  }

  function notifyObservers() {
    observers.forEach((observer) => {
      observer(stockPrice);
    });
  }

  return {
    addObserver,
    removeObserver,
    setStockPrice,
  };
}

// Observer function
function createStockObserver(name) {
  return function update(price) {
    console.log(`${name} received an update: Stock price is ${price}`);
  };
}

// Usage
const market = createStockMarket();

const observer1 = createStockObserver("Observer 1");
const observer2 = createStockObserver("Observer 2");

market.addObserver(observer1);
market.addObserver(observer2);

market.setStockPrice(100);
market.setStockPrice(110);

market.removeObserver(observer2);

market.setStockPrice(120);
