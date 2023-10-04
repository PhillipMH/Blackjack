const newGameButton = document.getElementById("newGameButton");
const stopButton = document.getElementById("stopButton");
const newCardButton = document.getElementById("newCardButton");
const textarea = document.getElementById("textarea");
newGameButton.style.display = "none";
stopButton.style.display = "none";
newCardButton.style.display = "none";

newGameButton.addEventListener("click", function() {
  
});

stopButton.addEventListener("click", function() {
  // Code to handle "Stop" button click
});

newCardButton.addEventListener("click", function() {
    nextCard();
});

class Card {
  constructor(billedkort, value) {
    this.billedkort = billedkort;
    this.value = value;
  }
}

function lavKortspil() {
  let suits = ["hjerter", "spades", "clubs", "diamonds"];
  let values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  let deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = new Card(suits[i], values[j]);
      deck.push(card);
    }
  }
  return deck;
}
let deck = lavKortspil();

function getKortString(index) {
  const card = deck[index];
  const { billedkort, value } = card;
  return `${value} of ${billedkort}`;
}

function nextCard() {
  return deck.shift();
}