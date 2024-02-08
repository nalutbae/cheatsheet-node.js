// function example of iterator design pattern

// Iterator function
function createIterator(collection) {
  let index = 0;

  // function to check if the next element is
  function hasNext() {
    return index < collection.length;
  }

  // function that returns the following elements
  function next() {
    return collection[index++];
  }

  return {
    hasNext,
    next,
  };
}

// Collection function
function createCollection() {
  const items = [];

  // A function that adds elements to the collection
  function addItem(item) {
    items.push(item);
  }

  // A function that creates an iterator
  function createIterator() {
    return createIterator(items);
  }

  return {
    addItem,
    createIterator,
  };
}

// Usage
const collection = createCollection();
collection.addItem("A");
collection.addItem("B");
collection.addItem("C");

const iterator = createIterator(collection);

// approach and output sequentially elements
while (iterator.hasNext()) {
  console.log(iterator.next());
}
