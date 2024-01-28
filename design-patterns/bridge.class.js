// class example of bridge structural design pattern

// Implementor
class Drawer {
  drawCircle(x, y, radius) {}
}

// Concrete Implementor A
class SmallCircleDrawer extends Drawer {
  drawCircle(x, y, radius) {
    console.log(`Small circle drawn at (${x}, ${y}) with radius ${radius}`);
  }
}

// Concrete Implementor B
class LargeCircleDrawer extends Drawer {
  drawCircle(x, y, radius) {
    console.log(`Large circle drawn at (${x}, ${y}) with radius ${radius}`);
  }
}

// Abstraction class
class Shape {
  constructor(drawer) {
    this.drawer = drawer;
  }

  draw() {}
}

// Refined Abstraction A
class Circle extends Shape {
  constructor(drawer, x, y, radius) {
    super(drawer);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    this.drawer.drawCircle(this.x, this.y, this.radius);
  }
}

// Refined Abstraction B
class Square extends Shape {
  constructor(drawer, x, y, side) {
    super(drawer);
    this.x = x;
    this.y = y;
    this.side = side;
  }

  draw() {
    console.log(
      `Square drawn at (${this.x}, ${this.y}) with side ${this.side}`
    );
  }
}

const smallCircleDrawer = new SmallCircleDrawer();
const largeCircleDrawer = new LargeCircleDrawer();

const smallCircle = new Circle(smallCircleDrawer, 50, 50, 10);
const largeCircle = new Circle(largeCircleDrawer, 100, 100, 20);
const square = new Square(smallCircleDrawer, 200, 200, 30);

smallCircle.draw(); // Small circle drawn at (50, 50) with radius 10
largeCircle.draw(); // Large circle drawn at (100, 100) with radius 20
square.draw(); // Square drawn at (200, 200) with side 30
