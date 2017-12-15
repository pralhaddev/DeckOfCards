import { expect } from 'chai';
import { Response, Request, Express } from 'express';
import request from 'supertest-as-promised';
import app from '../server';

describe('# Should load main page', () => {
    it('Should load page with Generate new Deck link and should show deck is empty', () => {
        request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .then((res) => {
                expect(res.text).to.not.equal(null);
                expect(res.text, 'Check Empty Card').to.include('<h1>"Deck is empty"</h1>');
                expect(res.text, 'Check New Deck link exits').to.include('<a href="/newDeck">New Deck Of Card</a>');
            });
    });
});


describe('# Should load deck of cards page', () => {
    it('Should load page with deck of cards with Remove,Shuffle,Remove Top card link exists', () => {
        request(app)
            .get('/generateDeck')
            .expect('Content-Type', /html/)
            .then((res) => {
                expect(res.text, 'Check Remove Card Link Exists').to.include('<a href="/removeCard">Remove Card</a>');
                expect(res.text, 'Check Shuffle Card Link Exists').to.include('<a href="/shuffleCard">Shuffle Card</a>');
                expect(res.text, 'Check Remove Top Card Link Exists').to.include('<a href="/removeTopCard">Remove Top Card</a>');
                expect(res.text, 'Check Card exists').to.include('<span class="label">');
            });
    });
});
