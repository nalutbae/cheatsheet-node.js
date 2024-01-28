// function example of bridge structural design pattern

// Implementor
function createDrawer() {
  return {
    drawCircle: function (x, y, radius) {},
  };
}

// Concrete Implementor A
function createSmallCircleDrawer() {
  return {
    drawCircle: function (x, y, radius) {
      console.log(`Small circle drawn at (${x}, ${y}) with radius ${radius}`);
    },
  };
}

// Concrete Implementor B
function createLargeCircleDrawer() {
  return {
    drawCircle: function (x, y, radius) {
      console.log(`Large circle drawn at (${x}, ${y}) with radius ${radius}`);
    },
  };
}

// Abstraction
function createShape(drawer) {
  return {
    draw: function () {},
  };
}

// Refined Abstraction A
function createCircle(drawer, x, y, radius) {
  return {
    draw: function () {
      drawer.drawCircle(x, y, radius);
    },
  };
}

// Refined Abstraction B
function createSquare(drawer, x, y, side) {
  return {
    draw: function () {
      console.log(`Square drawn at (${x}, ${y}) with side ${side}`);
    },
  };
}

const smallCircleDrawer = createSmallCircleDrawer();
const largeCircleDrawer = createLargeCircleDrawer();

const smallCircle = createCircle(smallCircleDrawer, 50, 50, 10);
const largeCircle = createCircle(largeCircleDrawer, 100, 100, 20);
const square = createSquare(smallCircleDrawer, 200, 200, 30);

smallCircle.draw(); // Small circle drawn at (50, 50) with radius 10
largeCircle.draw(); // Large circle drawn at (100, 100) with radius 20
square.draw(); // Square drawn at (200, 200) with side 30
