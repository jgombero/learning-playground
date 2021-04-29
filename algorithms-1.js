// Using memoization (basically a hash table to lookup)
const memoize = (cb) => {
  const cache = {};

  return function memoized(key) {
    if (key in cache) {
      return cache[key];
    } else {
      const result = cb(key);
      cache[key] = result;
      return result;
    }
  }
}

// Using recursion to calculate the factorial
const factorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// console.log(factorial(5)); // 120

// Using recursion to calculate the factorial WITH memoization
const memoFactorial = memoize(factorial);

// console.log(memoFactorial(5)); // 120

// Linear Search 
const linearSearch = (list, item) => {
  let result = -1
  list.forEach((listItem, index) => {
    if (listItem === item) {
      result = index;
    }
  });
  
  return result;
}

// console.log(linearSearch([2, 5, 7, 90, 103], 90)); // 3
// console.log(linearSearch([2, 5, 7, 90, 103], 91)); // -1

// Binary Search (divide and conquer)
const binarySearch = (list, item) => {
  let min = 0;
  let max = list.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (list[guess] === item) {
      return guess;
    } else {
      if (list[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }

  return -1;
}

// console.log(binarySearch([2, 6, 7, 90, 103], 90)); // 3
// console.log(binarySearch([2, 6, 7, 90, 103], 91)); // -1

// Bubble Sort
const bubbleSort1 = (list) => { // using while loop
  let changed = false;
  let sorted = false;
  let index = 0;

  while (!sorted) {
    if (index === list.length - 1 && !changed) {
      sorted = true;
    } else if (index === list.length - 1 && changed) {
      index = 0;
      changed = false;
    }
    
    if (list[index] && list[index + 1] && list[index] > list[index + 1]) {
      const num = list[index];
      list[index] = list[index + 1];
      list[index + 1] = num;
      changed = true;
    }
    
    index++;
  }
  
  return list;
}

// console.log(bubbleSort1([7, 6, 1, 12])); // [1, 6, 7, 12]

const bubbleSort2 = (list) => { // using do while loop
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  let swapped;

  do {
    countOuter++;
    swapped = false;
    for (let i = 0; i < list.length; i++) {
      countInner++;
      if( list[i] && list[i + 1] && list[i] > list[i + 1]) {
        countSwap++;
        const num = list[i];
        list[i] = list[i + 1];
        list[i + 1] = num;
        swapped = true;
      }
    }
  } while(swapped);

  console.log(`outer: ${countOuter}, inner: ${countInner}, swap: ${countSwap}`);
  return list;
}

// console.log(bubbleSort2([7, 6, 1, 12])); // [1, 6, 7, 12]

// Merge Sort (split the array into halves and merge them recursively)
const mergeSort = (list) => {
  if (list.length === 1) {
    // return once we hit an array with a single item
    return list;
  }

  const middle = Math.floor(list.length / 2); // get the middle item of the array rounded down
  const left = list.slice(0, middle); // items on the left side
  const right = list.slice(middle); // items on the right side

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

const merge = (left, right) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
// console.log(mergeSort(list)) // [1, 2, 2, 3, 3, 3, 5, 6, 7, 8]

// Brute Force using recursion (Find all options and pick the best one). Finding the smallest number of coins to give change (not real coins)
const coins = [10, 6, 1];

const makeChange = (value) => {
  if (value === 0) return 0; // Base case
  let minCoins;

  coins.forEach((coin) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin);

      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });

  return minCoins + 1;
}

// console.log(makeChange(12)); // 2

// Same as above but with memoization
const memoMakeChange = (coins) => {
  const changeCache = {};

  return function insideMakeChange(value) {
    if (changeCache[value]) return changeCache[value]; // if it's cached, return that value
  
    let minCoins = -1;
  
    // Find the best coin combo
    coins.forEach((coin) => {
      if (value - coin >= 0) {
        let currMinCoins = insideMakeChange(value - coin);
        if (minCoins === -1 || currMinCoins < minCoins) {
          minCoins = currMinCoins;
        }
      }
    });
  
    changeCache[value] = minCoins + 1;
    return changeCache[value];
  }
}

const memoizedMakeChange = memoMakeChange(coins);

console.log(memoizedMakeChange(12));