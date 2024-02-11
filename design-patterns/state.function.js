// function example of state design pattern

// A state function in which the order is canceled
function cancelledOrderState() {
  function cancel() {
    console.log("This order is already cancelled.");
  }

  function ship() {
    console.log("Cannot ship a cancelled order.");
  }

  return {
    cancel,
    ship,
  };
}

// Status function with order sent
function shippedOrderState() {
  function cancel() {
    console.log("Cannot cancel a shipped order.");
  }

  function ship() {
    console.log("This order is already shipped.");
  }

  return {
    cancel,
    ship,
  };
}

// Status functions in order
function processingOrderState() {
  function cancel() {
    console.log("Cancelling the order.");
    // 주문 취소 로직
  }

  function ship() {
    console.log("Shipping the order.");
    // 주문 발송 로직
  }

  return {
    cancel,
    ship,
  };
}

// Order class
function Order() {
  let state = processingOrderState();

  function setState(newState) {
    state = newState;
  }

  function cancel() {
    state.cancel();
  }

  function ship() {
    state.ship();
  }

  return {
    setState,
    cancel,
    ship,
  };
}

// Usage
const order = new Order();

order.ship(); // Shipping the order.
order.cancel(); // Cancelling the order.

order.setState(shippedOrderState());
order.ship(); // This order is already shipped.
order.cancel(); // Cannot cancel a shipped order.

order.setState(cancelledOrderState());
order.ship(); // Cannot ship a cancelled order.
order.cancel(); // This order is already cancelled.
