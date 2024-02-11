// class example of state design pattern

// Order state class
class OrderState {
  cancel() {
    throw new Error("cancel method must be implemented");
  }

  ship() {
    throw new Error("ship method must be implemented");
  }
}

// A state class with canceled order
class CancelledOrderState extends OrderState {
  cancel() {
    console.log("This order is already cancelled.");
  }

  ship() {
    console.log("Cannot ship a cancelled order.");
  }
}

// Ordered state class
class ShippedOrderState extends OrderState {
  cancel() {
    console.log("Cannot cancel a shipped order.");
  }

  ship() {
    console.log("This order is already shipped.");
  }
}

// A state class in order to be handled
class ProcessingOrderState extends OrderState {
  cancel() {
    console.log("Cancelling the order.");
    // Cancellation of order
  }

  ship() {
    console.log("Shipping the order.");
    // Order shipping logic
  }
}

// Order class
class Order {
  constructor() {
    this.state = new ProcessingOrderState();
  }

  setState(state) {
    this.state = state;
  }

  cancel() {
    this.state.cancel();
  }

  ship() {
    this.state.ship();
  }
}

// Usage
const order = new Order();

order.ship(); // Shipping the order.
order.cancel(); // Cancelling the order.

order.setState(new ShippedOrderState());
order.ship(); // This order is already shipped.
order.cancel(); // Cannot cancel a shipped order.

order.setState(new CancelledOrderState());
order.ship(); // Cannot ship a cancelled order.
order.cancel(); // This order is already cancelled.
