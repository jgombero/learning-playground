function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

const myNewFunc = outer();
myNewFunc();
myNewFunc();
console.log(myNewFunc);