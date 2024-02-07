// function example of stategy design pattern

// Bubble Sort function
function bubbleSort(data) {
  console.log("Sorting using Bubble Sort");
  return data.slice().sort((a, b) => b - a);
}

// Quick Sort function
function quickSort(data) {
  console.log("Sorting using Quick Sort");
  return data.slice().sort((a, b) => a - b);
}

// Context function
function sortingContext(sortingStrategy) {
  return {
    performSort: function (data) {
      return sortingStrategy(data);
    },
  };
}

// Usage
const data = [5, 2, 7, 1, 9];

const bubbleSortStrategy = bubbleSort;
const quickSortStrategy = quickSort;

const context1 = sortingContext(bubbleSortStrategy);
console.log("Before sorting:", data);
const sortedData1 = context1.performSort(data);
console.log("After sorting using Bubble Sort:", sortedData1);

const context2 = sortingContext(quickSortStrategy);
console.log("Before sorting:", data);
const sortedData2 = context2.performSort(data);
console.log("After sorting using Quick Sort:", sortedData2);
