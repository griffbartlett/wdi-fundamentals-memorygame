var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again.");
  }
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
}
function flipcard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipcard(0);
flipcard(2);

};

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
}

flipCard(0, 1);
flipCard(2);
