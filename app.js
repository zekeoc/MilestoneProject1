//reminder
//element.addEventListener(event, function, useCapture);
//load html content

document.addEventListener('DOMContentLoaded', () => {

 //introducing card set to call back on in future. referencing each card twice for matches 

    const cardsList = [
        {
            name: 'blastoise',
            image: 'cards.jpg/blastoise.jpg'
        },
        {
            name: 'blastoise',
            image: 'cards.jpg/blastoise.jpg'
        },
        {
            name: 'charizard',
            image: 'cards.jpg/charizard.jpg'
        },
        {
            name: 'charizard',
            image: 'cards.jpg/charizard.jpg'
        },
        {
            name: 'groudon',
            image: 'cards.jpg/groudon.jpg'
        },
        {
            name: 'groudon',
            image: 'cards.jpg/groudon.jpg'
        },
        {
            name: 'mew',
            image: 'cards.jpg/mew.jpg'
        },
        {
            name: 'mew',
            image: 'cards.jpg/mew.jpg'
        },
        {
            name: 'mewtwo',
            image: 'cards.jpg/mewtwo.jpg'
        },
        {
            name: 'mewtwo',
            image: 'cards.jpg/mewtwo.jpg'
        },
        {
            name: 'oak',
            image: 'cards.jpg/oak.jpg'
        },
        {
            name: 'oak',
            image: 'cards.jpg/oak.jpg'
        },
        {
            name: 'pikachu',
            image: 'cards.jpg/pikachu.jpg'
        },
        {
            name: 'pikachu',
            image: 'cards.jpg/pikachu.jpg'
        },
        {
            name: 'teamrocket',
            image: 'cards.jpg/teamrocket.jpg'
        },
        {
            name: 'teamrocket',
            image: 'cards.jpg/teamrocket.jpg'
        },
        {
            name: 'umbreon',
            image: 'cards.jpg/umbreon.jpg'
        },
        {
            name: 'umbreon',
            image: 'cards.jpg/umbreon.jpg'
        },
        {
            name: 'venasaur',
            image: 'cards.jpg/venasaure.jpg'
        },
        {
            name: 'venasaur',
            image: 'cards.jpg/venasaure.jpg'
        },
        {
            name: 'blankcard',
            image: 'cards.jpg/blankcard.png'
        },
        {
            name: 'blankcard',
            image: 'cards.jpg/blankcard.png'
        },
        {
            name: 'placeholder',
            image: 'cards.jpg/placeholder.jpg'
        }
    ]

//randomizing card set (will need to come back to this to tweak)
cardsList.sort( () => Math.random() );

//creating grid
const grid = document.querySelector('.gameGrid')

//
const movesCount = document.querySelector('.moves');

var moves2 = 0;
moves.textContent = moves2;

// creating chosen cards var
var chosenCards = [];
var chosenCardsIds = [];

/* initiating board, func loops over all cards in li
adds an image to all cards then appends to grid */

function getBoard(){
    for (var i =0; i< cardsList; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'cards.jpg/placeholder.jpg')
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }
}
// getBoard();

// creating flip card function 

function flipCard(){
    if(chosenCards.length != 2){
        var cardid = this.getAttribute('data-id');
        if (this.getAttribute('src') != 'cards.png/blankcard.png'){
            chosenCards.push(cardsList[cardId].name);
            chosenCardsIds.push(cardId);
            this.setAttribute('src', cardsList[CardId].image);
            if(chosenCards.length == 2){
                setTimeout(checkForMatch, 500)
            }
        }
    }
}

/* create match check function that checks for card ID equivalence then 
assigns either blank img (for match) or placeholder image (if incorrect guess- flip back over)











})