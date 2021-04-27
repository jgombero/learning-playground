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

