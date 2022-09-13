import{ getCardDeck, CardDeck } from './spreadsheet.util';

describe('getDeck', () => {
    let carddeck: CardDeck;
    beforeAll(async () => {
        carddeck = await getCardDeck();
    });
    it('should be defined', () => {
        expect(carddeck).toBeDefined();
    });
    it('should have jobs array', () => {
        expect(carddeck.job).toBeDefined();
    });
    it('should have health first card', () => {
        expect(carddeck.health[0]).toBeDefined();
    });
    it('should have hobby last card', () => {
        expect(carddeck.hobby[carddeck.hobby.length - 1]).toBeDefined();
    });
    it('deck.info[15] should be "Проходил курсы психолога" card', () => {
        expect(carddeck.info[15].name).toBe('Проходил курсы психолога');
    });
    it('should have at least two speccards', () => {
        expect(carddeck.speccards.length).toBeGreaterThanOrEqual(2);
    });
});