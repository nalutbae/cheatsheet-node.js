// class example of stategy design pattern

// Strategy interface
class SortingStrategy {
  sort(data) {
    throw new Error("sort method must be implemented");
  }
}

// BubbleSortStrategy class
class BubbleSortStrategy extends SortingStrategy {
  sort(data) {
    console.log("Sorting using Bubble Sort");
    // implement bubble sort algorithm
    return data.sort((a, b) => b - a); // descending order sorting (b - a) for ascending order (a - b)
  }
}

// QuickSortStrategy class
class QuickSortStrategy extends SortingStrategy {
  sort(data) {
    console.log("Sorting using Quick Sort");
    // implement quick sort algorithm
    return data.sort((a, b) => a - b); // ascending order sorting (a - b) for descending order (b - a)
  }
}

// Context class
class SortingContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  performSort(data) {
    return this.strategy.sort(data);
  }
}

// Usage
const data = [5, 2, 7, 1, 9];

const bubbleSort = new BubbleSortStrategy();
const quickSort = new QuickSortStrategy();

const context = new SortingContext(bubbleSort);
console.log("Before sorting:", data);
context.performSort(data);
console.log("After sorting using Bubble Sort:", data);

context.setStrategy(quickSort);
console.log("Before sorting:", data);
context.performSort(data);
console.log("After sorting using Quick Sort:", data);
