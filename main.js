// main.js

const facts = [
  "Cats sleep for 70% of their lives.",
  "A group of cats is called a clowder.",
  "The oldest known pet cat existed 9,500 years ago.",
  "A cat has 230 bones, while a human has 206.",
  "Isaac Newton is credited with inventing the cat flap."
];

function getRandomCatFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
}

console.log("😺 Random cat fact:", getRandomCatFact());
