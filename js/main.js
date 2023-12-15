// conditions: If statements

//syntax
/* if (condition) {
    //run some code
} else {
    // run some different code
} */

/* let customerIsBanned = false;
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

console.log(reply); */

let testScore = 89;
let grade;

if (testScore >= 90) {
  grade = `A1`;
} else if (testScore < 90 && testScore >= 80) {
  grade = `B2`;
} else if (testScore < 80 && testScore >= 70) {
  grade = `B3`;
} else if (testScore < 70 && testScore >= 60) {
  grade = `C4`;
} else if (testScore < 60 && testScore >= 50) {
  grade = `C5`;
} else if (testScore < 50 && testScore >= 40) {
  grade = `C6`;
} else if (testScore < 70 && testScore >= 60) {
  grade = `YOU ARE A FAILURE, KINDLY EXIT LIFE!!!!!!`;
}

console.log(grade);
