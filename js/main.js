// conditions: If statements

//syntax
/* if (condition) {
    //run some code
} else {
    // run some different code
} */

let customerIsBanned = false;
let soup = "chicken noodle soup";
let reply;
let crackers = false;

if (customerIsBanned) {
  reply = `No soup for you!`;
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers`;
} else if (soup) {
  reply = `Here's your order of ${soup} without crackers`;
} else if (crackers) {
  reply = `Here's your order of crackers`;
} else {
  reply = `Sorry, we are out of soup & crackers`;
}

console.log(reply);
