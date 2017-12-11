import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import config from './core/config/config.dev';
import logger from './core/logger/app-logger';
import DeckCardController from './controllers/deckCardController';
const port = config.serverPort;
const deckControllerInstance = new DeckCardController();
logger.stream = {
  write(message) {
    logger.info(message);
  },
};


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev', { stream: logger.stream }));

// Index route
app.get('/', (req, res) => {
  res.render('index', { payingCards: [], suites: deckControllerInstance.getAllSuite() });
});

// Remove Card from Deck
app.get('/removeCard', (req, res) => {
  res.render('remove_card', {
    title: 'Remove Card from Deck',
    suits: deckControllerInstance.getAllSuite(),
    cards: deckControllerInstance.getAllCards(),
  });
});

app.get('/generateDeck', (req, res) => {
  res.render('index', { payingCards: deckControllerInstance.generateDeckofCards(), suites: deckControllerInstance.getAllSuite() });
});

app.get('/updatedDeck', (req, res) => {
  res.render('index', { payingCards: deckControllerInstance.updatedDeckOfCards(), suites: deckControllerInstance.getAllSuite() });
});

app.post('/removeCard', (req, res) => {
  deckControllerInstance.removeCardFromDeck({
    suit: req.param('suite'),
    card: req.param('card'),
  });
  res.redirect('/updatedDeck');
});
app.get('/shuffleCard', (req, res) => {
  deckControllerInstance.suffleCards();
  res.redirect('/updatedDeck');
});

app.get('/newDeck', (req, res) => {
  res.redirect('/generateDeck');
});

app.get('/removeTopCard', (req, res) => {
  deckControllerInstance.removeTopCard();
  res.redirect('/updatedDeck');
});

app.listen(port, () => {
  logger.info('server started - ', port);
});
