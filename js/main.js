var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'	
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	}
	else {
		console.log("Sorry, try again.");
		alert("Sorry, try again.")
    } 
		
  }


var flipCard = function() {
	console.log("User flipped " + cards[cardId].rank);
    console.log("User flipped " + cards[cardId].cardImage);
    console.log("User flipped " + cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
	checkForMatch();
   }
}

var createBoard = function() {
	createBoard(0);
    createBoard(2);
	for (var i = 0; i < cards.length; i++) {
       var cardElement = document.createElement('img');
       cardElement.setAttricut('src', 'images/back.png');
       cardElement.setAttribute('data-id',li);
       cardElement.addEventListener("click", flipcard)
       boardelem.appendChild(cardElement);
   }
}





