class Player {
    constructor(name) {
        this.name = name; 
        this.score = 0; 
        this.hand = [];
    }

    getPlayerName() {
        return this.name;
    }
    drawCard() {
        return this.hand.pop();
    }
    getScore() {
       return this.score;
    }
    incrementScore() {
        this.score += 1;
    }
}

class Card {
    constructor(value, cardType) {
        this.value = value;
        this.cardType = cardType;
    }
   getValue(){
       return this.value;
   }

    getCardType() {
        return this.cardType;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.suitCodes = ['\u2660', '\u2666', '\u2663', '\u2665'];
    }
    createDeck() {
        for(let i = 0; i < this.suitCodes.length; i++) {
            for(let j = 2; j <=14; j++) {
                if ( j == 11 ) {
                    this.cards.push(new Card(j, `Jack of  ${this.suitCodes[i]}`));
                } else if ( j == 12 ) {
                    this.cards.push(new Card(j, ` Queen of  ${this.suitCodes[i]}`)); 
                } else if ( j == 13 ) {
                    this.cards.push(new Card(j, `King of  ${this.suitCodes[i]}`));
                } else if ( j == 14 )  {
                    this.cards.push(new Card(j, `Ace of  ${this.suitCodes[i]}`));
                } else {
                    this.cards.push(new Card(j, `${j} of ${this.suitCodes[i]}`));
                }
            }
        }
    }

    drawCard() {
        return this.cards.pop();
    }

    shuffleCards() {
            const { cards } = this;
            let m = 52, i;
          
            while (m) {
              i = Math.floor(Math.random() * m--);
          
              [cards[m], cards[i]] = [cards[i], cards[m]];
            }
          
        return this;
        
    }    
}
    
class PlayGame { 
    constructor() {
        this.player1 = new Player("Player One");
        this.player2 = new Player("Player Two");
        this.deck = new Deck();
        this.drawRound = 0;
    }
    startGame() {
        this.deck.createDeck();
        this.deck.shuffleCards();
        this.deck.shuffleCards();
        this.dealCards(this.deck);
        console.log(this.deck)
    }
    dealCards(deck) {
            for(let i = 0; i < 26; i++) {
                this.player1.hand.push(deck.drawCard());
                this.player2.hand.push(deck.drawCard());
        }    
    }
    playRound() {
        for(let i = 0; i < 26; i++) {
         let player1Card = this.player1.drawCard();
         let player2Card = this.player2.drawCard();
         console.log(`-------- round ${i+1} --------
         ${this.player1.getPlayerName()} plays the card ${player1Card.getCardType() }
         ${this.player2.getPlayerName()} plays the card  ${player2Card.getCardType() }`);
        if(player1Card.getValue() > player2Card.getValue()) {
            this.player1.incrementScore();
            console.log(`${this.player1.getPlayerName()} won the round`);
        } else if (player1Card.getValue() < player2Card.getValue()) {
            this.player2.incrementScore();
            console.log(`${this.player2.getPlayerName()} won the round`);
        } else {
            this.drawRound++;
            console.log("It's a draw!");
        }
     }
    }

    whoWins() {
        if (this.player1.getScore() > this.player2.getScore()) {
            console.log(`${this.player1.getPlayerName()} won the game with ${this.player1.getScore()} points!
            # of draws ${this.drawRound} `)
        } else if (this.player1.getScore() < this.player2.getScore()) {
            console.log(`${this.player2.getPlayerName()} won the game with ${this.player2.getScore()} points!
            # of draws ${this.drawRound} `)
        }    
    }
}


const game = new PlayGame();
game.startGame();
game.playRound();
game.whoWins();