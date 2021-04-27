// Bad solution because each object will have it sown functions defined in it (expen$ive)
function badUserCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
    console.log(newUser.score);
  }
  newUser.login = function() {
    console.log(`${newUser.name} is logged in`);
  }
  return newUser;
}

const user1 = badUserCreator("Badman", 2);
user1.increment();


// Using classes
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() { this.score++ }
  login() { console.log(`${this.name} is logged in`) }
}

const user2 = new UserCreator("Batman", 99);
// console.log(user2);
// user2.increment();
// console.log(user2);
// console.log(UserCreator);


// What happens under the hood when we use classes
function userCreator(name, score) {
  this.name = name;
  this.score = score;
};

userCreator.prototype.increment = function() { this.score++ };
userCreator.prototype.login = function() { console.log("login") };

const user3 = new userCreator("Josh", 4);
console.log(user3);
user3.increment();
console.log(user3);
console.log(userCreator.prototype);
console.log(user3.__proto__);
