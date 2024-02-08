// class example of iterator design pattern

// Iterator class
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  // A method to verify that the following elements
  hasNext() {
    return this.index < this.collection.length;
  }

  // The method that returns the following elements
  next() {
    return this.collection[this.index++];
  }
}

// Collection class
class Collection {
  constructor() {
    this.items = [];
  }

  // A method that adds elements to the collection
  addItem(item) {
    this.items.push(item);
  }

  // A method that creates an iterator
  createIterator() {
    return new Iterator(this.items);
  }
}

// Usage
const collection = new Collection();
collection.addItem("A");
collection.addItem("B");
collection.addItem("C");

const iterator = collection.createIterator();

// Instead of approaching and outputting elements
while (iterator.hasNext()) {
  console.log(iterator.next());
}
