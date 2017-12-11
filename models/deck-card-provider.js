export default class CarsModel {

    deckCards = [];
    cardList = [];
    getData = () => {
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const suits = ['♥', '♦', '♣', '♠'];
        suits.forEach((suit) => {
            cards.forEach((card) => {
                if ((card > 10) || card === 1) {
                    card = this.getTypeofCard(card);
                }
                this.deckCards.push({ suit, card: card.toString() });
            });
        });
    };
    shuffleCards = () => {
        for (let i = this.deckCards.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            const swap = this.deckCards[i];
            this.deckCards[i] = this.deckCards[j];
            this.deckCards[j] = swap;
        }
    };
    removeCardFromDeck = (cardInfomation) => {
        console.log(cardInfomation);
        this.deckCards = this.deckCards.filter((obj) => {
            return (obj.suit !== cardInfomation.suit || obj.card.toString() !== cardInfomation.card.toString());
        });
        return this.deckCards;
    };

    getAllSuite = () => {
        return ['♥', '♦', '♣', '♠'];
    };
    getAllCards = () => {
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        cards.forEach((card) => {
            if ((card > 10) || card === 1) {
                card = this.getTypeofCard(card);
            }
            this.cardList.push(card);
        });
        return this.cardList;
    };

    getTypeofCard = (number) => {
        switch (number) {
            case 11: {
                return 'J';
            }
            case 12: {
                return 'Q';
            }
            case 13: {
                return 'K';
            }
            default: {
                return 'A';
            }
        }
    };

    remremoveTopCard = () => {
        this.deckCards.splice(this.deckCards.length - 1, 1);
    };

    getUpdatedDeckOfCards = () => {
        return this.deckCards;
    }


    generateDeckOfCards = () => {
        if (!this.deckCards.length) {
            this.getData();
        }
        return this.deckCards;
    };

}
