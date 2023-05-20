/* 
Overview 

Create a JS file that uses classes to create an object representing a deck of cards. Then create a simple console version of the card game 'War'

Steps: 

1. Create a Deck class 

2. Create a method on the Deck class that dynamically generates each card object
example card object: {suit: "hearts", value: 2}

a card's value corresponds to the number/face card's rank

ace = 1
cards 2-10 = their number value 
jacks = 11 
queens = 12 
kings = 13 

3. card objects can be held inside an array 

4. create a method to select a random card object 

5. create a function that runs the random card method on each deck, and compares the values of the 2 random cards

6. console log both card objects, and a message declaring which one has the higher value

*/

// #1, #3 Deck class constructor

class Deck {
    constructor() {
        this.deck = []
    }
    //#2 card method
    generateDeck(suits = ['hearts','diamonds','clubs','spades'], max = 13){
        suits.forEach(s => {
            for(let i = 1; i <= max; i++){
                this.deck.push({suit: s , value: i})
            }
        })
    }
    // #4 random card
    generateRandom(){
        const {deck} = this
        return deck[Math.floor(Math.random() * deck.length)]
    }
}
const deckOne = new Deck()
const deckTwo = new Deck()
deckOne.generateDeck()
deckTwo.generateDeck()
//#5 play function

function letsPlay(){
    const pOneDraw = deckOne.generateRandom()
    const pTwoDraw = deckTwo.generateRandom()

    //#6
    console.log(`Player One: ${pOneDraw.value} of ${pOneDraw.suit} \nPlayer Two: ${pTwoDraw.value} of ${pTwoDraw.suit}`)
    if(pOneDraw.value === pTwoDraw.value){
        console.log(`TIE`)
    }else if(pOneDraw.value > pTwoDraw.value){
        console.log(`Player One WINS!`)
    }else console.log(`Player Two WINS!`)
}
letsPlay()