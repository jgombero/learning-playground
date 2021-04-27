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


