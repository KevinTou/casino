'use strict';
let deck = [];
let discard = [];
let player = [];
let dealer = [];

// Class object to encapsulate object behaviours
class Card {
  constructor(suit, value, name) {
    this.suit = suit;
    this.value = value;
    this.name = name;
    this.isFacedUp = false;
    this.isSoft = true;
  }
}

// Populates a new deck
function createDeck() {
  for (let suit = 1; suit <= 4; suit++) {
    for (let value = 1; value <= 13; value++) {
      const newCard = new Card(suit, value, name);
      newCard.name = value.toString();
      if (value === 1 || 11 || 12 || 13) {
        if (value === 1) {
          newCard.name = "Ace";
          if (newCard.isSoft === true) {
            newCard.value = 11;
          }
        }
        if (value === 11) {
          newCard.name = "Jack";
          newCard.value = 10;
        }
        if (value === 12) {
          newCard.name = "Queen";
          newCard.value = 10;
        }
        if (value === 13) {
          newCard.name = "King";
          newCard.value = 10;
        }
      }
      if (suit === 1) {
        newCard.suit = "Hearts";
      }
      if (suit === 2) {
        newCard.suit = "Diamonds";
      }
      if (suit === 3) {
        newCard.suit = "Spades";
      }
      if (suit === 4) {
        newCard.suit = "Clubs";
      }

      deck.push(newCard);
    }
  }
}

// Shuffles the cards and replaces the array of objects with an array of arrays size 1 (containing the card object)
function shuffle() {
  const tempDeck = [];
  while (deck.length > 0) {
    const shuffledCard = deck.splice(Math.floor(Math.random() * deck.length), 1);
    tempDeck.push(shuffledCard);
  }
  deck = tempDeck;
}

// Returns an array containing a random card object
function deal() {
  return deck.pop();
}

// TODO: Clean up start game and possibly refactor for cleanliness
function startGame() {
  deck = [];
  discard = [];
  createDeck();
  shuffle();

  const burnCard = deal();
  discard.push(burnCard);

  player = [deal(), deal()];
  console.log(`Player has ${countTotal(player)}`);
  dealer = [deal(), deal()];
  console.log(`Dealer is showing a ${dealer[0][0]["name"]} of ${dealer[0][0]["suit"]}`);
}

// TODO: Refactor code for both dealer and player
function hit() {
  player.push(deal());
  console.log(`Total is ${countTotal(player)}`);
}

// TODO: Refactor logic | Starting template
function compareHands() {
  const playerHand = countTotal(player);
  const dealerHand = countTotal(dealer);
  if (playerHand > dealerHand) {
    console.log(`Player wins!`);
  } else if (playerHand === dealerHand) {
    console.log(`It's a tie!`);
  } else {
    console.log(`Dealer wins!`);
  }
}

// TODO: Refactor code to account for soft hands
function countTotal(hand) {
  let total = 0;
  for (let cardsInHand = 0; cardsInHand < hand.length; cardsInHand++) {
    total += hand[cardsInHand][0]["value"];
  }
  return total;
}

// TODO: Split by matching value property
function split() {

}

document.addEventListener("DOMContentLoaded", function (event) {
  startGame();
  // compareHands();
});



