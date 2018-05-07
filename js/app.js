/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

const cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
const symbols = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];
const cardFaces = Array.prototype.slice.call(document.querySelectorAll('.face'));
const deck = document.querySelector('.deck');
let showing = [];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    console.log(array);
    return array;
}

const newSymbols = shuffle(symbols);

for (let i = 0; i < cardFaces.length; i++) {
	cardFaces[i].className = 'inner fa';
	cardFaces[i].classList.add(newSymbols[i]);
}

function opened() {
	showing.push(this.firstElementChild);
	this.removeEventListener('click', opened);
}

function checking() {
	if (showing.length < 2){
		
	} else if (showing.length === 2 && showing[0].classList[2] == showing[1].classList[2]) {
		showing[0].parentElement.classList.remove('open', 'show');
		showing[1].parentElement.classList.remove('open', 'show');
		showing[0].parentElement.classList.add('match');
		showing[1].parentElement.classList.add('match');
		showing = [];
	} else if (showing.length === 2 && showing[0].classList[2] !== showing[1].classList[2]){
		showing[0].parentElement.classList.remove('open', 'show');
		showing[1].parentElement.classList.remove('open', 'show');
		showing[0].parentElement.addEventListener('click', opened);
		showing[1].parentElement.addEventListener('click', opened);
		showing = [];
	} else if (showing.length > 2){ 
		for (let i = 0; i < cards.length; i++){
			cards[i].classList.remove('open', 'show');
		}
		showing = [];
	}
}

for (let i = 0; i < cards.length; i++) {
	cards[i].addEventListener('click', opened);	
	cards[i].addEventListener('click', function flip(){
		this.classList.add('open', 'show');
	});
	cards[i].addEventListener('click', checking);
}




	


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
