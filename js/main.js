// My first Code Challenge

//Write code that will return a
//random letter from my name Emmanuel

const myName = "Emmanuel";
const myNamelenght = myName.length;
const randomNumber = Math.floor(Math.random() * myNamelenght);
const charatMyname = myName.charAt(randomNumber);

console.log(charatMyname);
