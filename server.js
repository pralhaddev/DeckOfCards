import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from './core/logger/app-logger'
import morgan from 'morgan'
import config from './core/config/config.dev'
import path from 'path';
import DeckCardController from './controllers/deckCardController';
const port = config.serverPort;
let deckControllerInstance = new DeckCardController();
logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
};


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev", { "stream": logger.stream }));

//Index route
app.get('/', (req, res) => {
    res.render('index', { payingCards: deckControllerInstance.getAll(), suites: deckControllerInstance.getAllSuite() });
});

//Remove Card from Deck
app.get('/removeCard', function (req, res) {
    res.render('remove_card', {
        title: 'Remove Card from Deck'
    });
});

app.post('/removeCard', function (req, res) {
    deckControllerInstance.removeCardFromDeck({
        suit: req.param('suite'),
        card: req.param('card')
    });
    res.redirect('/');
});
app.get('/shuffleCard', function (req, res) {
   deckControllerInstance.suffleCards();
    res.redirect('/');
});

app.get('/removeTopCard', function (req, res) {
   deckControllerInstance.removeTopCard();
    res.redirect('/');
});

app.listen(port, () => {
    logger.info('server started - ', port);
});