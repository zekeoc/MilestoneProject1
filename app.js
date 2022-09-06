//reminder
//element.addEventListener(event, function, useCapture);
//load html content before js to prevent bugs

document.addEventListener('DOMContentLoaded', () => {

 //introducing card set to call back on in future. referencing each card twice for matches 

    const cardsList = [
        {
            name: 'blastoise',
            image: 'cardsimg/blastoise.jpg'
        },
        {
            name: 'blastoise',
            image: 'cardsimg/blastoise.jpg'
        },
        {
            name: 'charizard',
            image: 'cardsimg/charizard.jpg'
        },
        {
            name: 'charizard',
            image: 'cardsimg/charizard.jpg'
        },
        {
            name: 'groudon',
            image: 'cardsimg/groudon.jpg'
        },
        {
            name: 'groudon',
            image: 'cardsimg/groudon.jpg'
        },
        {
            name: 'mew',
            image: 'cardsimg/mew.jpg'
        },
        {
            name: 'mew',
            image: 'cardsimg/mew.jpg'
        },
        {
            name: 'mewtwo',
            image: 'cardsimg/mewtwo.jpg'
        },
        {
            name: 'mewtwo',
            image: 'cardsimg/mewtwo.jpg'
        },
        {
            name: 'oak',
            image: 'cardsimg/oak.jpg'
        },
        {
            name: 'oak',
            image: 'cardsimg/oak.jpg'
        },
        {
            name: 'pikachu',
            image: 'cardsimg/pikachu.jpg'
        },
        {
            name: 'pikachu',
            image: 'cardsimg/pikachu.jpg'
        },
        {
            name: 'teamrocket',
            image: 'cardsimg/teamrocket.jpg'
        },
        {
            name: 'teamrocket',
            image: 'cardsimg/teamrocket.jpg'
        },
        {
            name: 'umbreon',
            image: 'cardsimg/umbreon.jpg'
        },
        {
            name: 'umbreon',
            image: 'cardsimg/umbreon.jpg'
        },
        {
            name: 'venasaur',
            image: 'cardsimg/venasaure.jpg'
        },
        {
            name: 'venasaur',
            image: 'cardsimg/venasaure.jpg'
        },
        {
            name: 'blankcard',
            image: 'cardsimg/blankcard.png'
        },
        {
            name: 'blankcard',
            image: 'cardsimg/blankcard.png'
        },
        {
            name: 'placeholder',
            image: 'cardsimg/placeholder.jpg'
        }
    ];

//randomizing card set (will need to come back to this to tweak)
cardsList.sort( () => Math.random() );

//creating canvas
const canvas = document.querySelector('.boardCanvas');

//
const movesCount = document.querySelector('.movesCount');


var moves = 0;
movesCount.textContent = moves;

// creating chosen cards var
var chosenCards = [];
var chosenCardsIds = [];

/* initiating board, func loops over all cards in li
adds an image to all cards then appends to canvas */

function getBoard(){
    for (var i = 0; i < cardsList.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'cardsimg/placeholder.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        canvas.appendChild(card);
    }
}
// getBoard();

// creating flip card function 

function flipCard(){
    if(chosenCards.length != 2){
        var cardId = this.getAttribute('data-id');
        if (this.getAttribute('src') != 'cardsimg/blankcard.png'){
            chosenCards.push(cardsList[cardId].name);
            chosenCardsIds.push(cardId);
            this.setAttribute('src', cardsList[cardId].image);
            if(chosenCards.length == 2){
                setTimeout(checkMatch, 500)
            }
        }
    }
}

/* create match check function that checks for card ID equivalence then 
assigns either blank img (for match) or placeholder image (if incorrect guess- flip back over)
*/

function checkMatch(){
    moves++;
    var cards = document.querySelectorAll('img');
    var firstCard = chosenCardsIds[0];
    var secondCard = chosenCards[1];
    if(chosenCards[0] === chosenCards[1]){
        cards[firstCard].setAttribute('src', 'cardsimg/blankcard.png');
        cards[secondCard].setAttribute('src', 'cardsimg/blankcard.png');
    }else{
        cards[firstCard].setAttribute('src', 'cardsimg/placeholder.jpg');
        cards[secondCard].setAttribute('src', 'cardsimg/placeholder.jpg');
    }
    chosenCards = [];
    chosenCardsIds = [];
    movesCount.textContent = moves
}




getBoard();




})