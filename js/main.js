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

/* let testScore;
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
} else if (testScore < 40 && testScore >= 30) {
  grade = `D7`;
} else if (testScore < 30 && testScore >= 25) {
  grade = `E8`;
} else if (testScore < 25 && testScore >= 0) {
  grade = `F9`;
} else {
  grade = `
    You did not take the test. 
    Or 
    Your test score is NOT yet uploaded
    Make sure you reach out to the 
    Admin OFFICE for more enquiries
    OR
    Kindly report to MLO's office rightaway!
    `;
}

console.log(grade); */

//Decision tree!
/* if (playerOne === computer) {
  //tie game!
} else if (playerOne === "rock") {
  if (computer === "paper") {
    //computer wins
  } else {
    //playerOne wins!
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    //computer wins
  } else {
    //playerOne wins!
  }
} else {
  if (computer === "rock") {
    // computer wins
  } else {
    //playerOne wins
  }
} */

/* let playerOne = String(prompt("ROCK, PAPER OR SCISSORS")).toLowerCase();
let computer = "rock";

if (playerOne === computer) {
  alert("TIE GAME");
} else if (playerOne === "rock") {
  if (computer === "paper") {
    alert("computer wins");
  } else {
    alert("PlayerOne wins");
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    alert("computer wins!");
  } else {
    alert("playerOne wins");
  }
} else {
  if (computer === "rock") {
    alert("computer wins!");
  } else {
    alert("playerOne wins!");
  }
} */

// Conditionals Switch Statements

/* // Syntax
switch (express OR value) {
    case choice1:
        // run this code
        break;
    
    case choice2:
        //run this different code
        break;

    // add as many cases as needed

    default:
        //run this code if no case switches
        // no need for a break here
} */

/* switch (Math.floor(Math.random() * 5 + 1)) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  case 3:
    console.log(3);
    break;

  default:
    console.log("No match");
    break;
} */

// Rock, Paper, Scissors
let playerOne = "scissors";
let computer = "rock";

switch (playerOne) {
  case computer:
    console.log("Tie game");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
}

/* let playerOne = String(prompt("Enter rock, paper or scissors"));
let computer = "rock";

switch (playerOne) {
  case computer:
    alert("Tie game");
    break;
  case "rock":
    if (computer === "paper") {
      alert("computer wins!");
    } else {
      alert("playerOne wins!");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      alert("computer wins!");
    } else {
      alert("playerOne wins!");
    }
    break;
  default:
    if (computer === "rock") {
      alert("computer wins!");
    } else {
      alert("playerOne wins!");
    }
    break;
}
 */
