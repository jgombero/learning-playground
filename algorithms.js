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

console.log(factorial(5)); // 120

// Using recursion to calculate the factorial WITH memoization
const memoFactorial = memoize(factorial);

console.log(memoFactorial(5)); // 120

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

console.log(linearSearch([2, 5, 7, 90, 103], 90)); // 3
console.log(linearSearch([2, 5, 7, 90, 103], 91)); // -1

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

console.log(binarySearch([2, 6, 7, 90, 103], 90)); // 3
console.log(binarySearch([2, 6, 7, 90, 103], 91)); // -1

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

console.log(bubbleSort1([7, 6, 1, 12])); // [1, 6, 7, 12]

