export default class CarsModel {

    deckCards = new Array();

    getData = () => {
        let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let suits = ['Heart', 'Diamond', 'Club', 'Spade'];
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
    shuffleCards = () => {
        for (var i = 0; i < this.deckCards.length; i++) {
            var j = i;
            while (j == i) {
                j = Math.floor(Math.random() * this.deckCards.length);
            }
            var tmp = this.deckCards[i];
            this.deckCards[i] = this.deckCards[j];
            this.deckCards[j] = tmp;
        }
    }
    removeCardFromDeck = (cardInfomation) => {
        this.deckCards = this.deckCards.filter(function (obj) {
            return (obj.suit != cardInfomation.suit || obj.card != cardInfomation.card);
        });
    }

    getAllSuite = () => {
        return ['Heart', 'Diamond', 'Club', 'Spade'];
    };


    remremoveTopCard = () => {
        this.deckCards = this.deckCards.splice(0, 1);
        console.log(this.deckCards);
    };

    getAll = () => {
        if (!this.deckCards.length) {
            this.getData();
        }
        return this.deckCards;
    };

}