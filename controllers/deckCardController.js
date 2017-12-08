import logger from '../core/logger/app-logger';
import DeckDataProvider from '../models/deck-card-provider';

export default class DeckCardController {
    constructor() {
        this.deckDataProviderInstance = new DeckDataProvider();
    }

    getAll = () => {
        try {
            logger.info('getting all cards...');
            return this.deckDataProviderInstance.getAll();
        }
        catch (err) {
            logger.error('Error in getting all cards- ' + err);
        }
    }

    getAllSuite = () => {
        try {
            logger.info('getting all suites...');
            return this.deckDataProviderInstance.getAllSuite();
        }
        catch (err) {
            logger.error('Error in getting all cards- ' + err);
        }
    }

    suffleCards = () => {
        try {
            logger.info('getting all suites...');
            return this.deckDataProviderInstance.shuffleCards();
        }
        catch (err) {
            logger.error('Error in getting all cards- ' + err);
        }
    }

    removeCardFromDeck = (cardInfomation) => {
        try {
            logger.info('cardInfomation : ' + cardInfomation.suit);
            return this.deckDataProviderInstance.removeCardFromDeck(cardInfomation);
        }
        catch (err) {
            logger.error('Error in getting removing cards- ' + err);
        }
    };

    removeTopCard = () => {
        try {
            logger.info('removing Top Card');
            return this.deckDataProviderInstance.remremoveTopCard();
        }
        catch (err) {
            logger.error('Error in getting removing top card- ' + err);
        }
    }
}