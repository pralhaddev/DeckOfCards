export default class CarsModel {

    deckCards = new Array();

    getData = () => {
        let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let suits = ['♥', '♦', '♣', '♠'];
        suits.forEach(suit => {
            cards.forEach(card => {
                if ((card > 10) || card === 1) {
                    card = this.getTypeofCard(card);
                }
                this.deckCards.push({ "suit": suit, "card": card.toString() });
            })
        });
    };

    getTypeofCard = (number) => {
        switch (number) {
            case 11: {
                return "J";
                break;
            }
            case 12: {
                return "Q";
                break;
            }
            case 13: {
                return "K";
                break;
            }
            default: {
                return "A";
                break;
            }
        }
    };


    getRandomInt = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    shuffleCards = (shuffleCnt) => {
        for (let i = 0; i < shuffleCnt; i++) {
          var rndNo = this.getRandomInt(1, 52);
            var card = this.deckCards[i];
            this.deckCards[i] = this.deckCards[rndNo];
            this.deckCards[rndNo] = card;
        }
    }
    removeCardFromDeck = (cardInfomation) => {
        this.deckCards = this.deckCards.filter(function (obj) {
            return (obj.suit != cardInfomation.suit || obj.card != cardInfomation.card);
        });
    }

    getAllSuite = () => {
        return ['♥', '♦', '♣', '♠'];
    };


    remremoveTopCard = () => {
        this.deckCards.splice(this.deckCards.length - 1, 1);
        console.log(this.deckCards);
    };

    getAll = () => {
        if (!this.deckCards.length) {
            this.getData();
        }
        return this.deckCards;
    };

}