// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let name = "DaQuan"
function getName(){
  return name;
}
console.log(getName());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count += 1;
  return count;
};

counter();
counter();
counter();
console.log(counter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let objCount = 0

const counterFactory = {
  increment: function(){
    objCount += 1;
    return objCount;
  },
  decrement: function(){
    objCount -= 1;
    return objCount;
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

};

counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
counterFactory.decrement();
counterFactory.decrement();
counterFactory.decrement();
counterFactory.decrement();
console.log(objCount);
