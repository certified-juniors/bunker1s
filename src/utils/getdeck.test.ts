import getDeck, { Deck } from './getdeck';

describe('getDeck', () => {
    let deck: Deck;
    beforeAll(async () => {
        deck = await getDeck();
    });
    it('should be defined', () => {
        expect(deck).toBeDefined();
    });
    it('should have jobs array', () => {
        expect(deck.job).toBeDefined();
    });
    it('should have health first card', () => {
        expect(deck.health[0]).toBeDefined();
    });
    it('should have hobby last card', () => {
        expect(deck.hobby[deck.hobby.length - 1]).toBeDefined();
    });
    it('deck.info[15] should be "Проходил курсы психолога" card', () => {
        expect(deck.info[15].name).toBe('Проходил курсы психолога');
    });
    it('should have at least two speccards', () => {
        expect(deck.speccards.length).toBeGreaterThanOrEqual(2);
    });
    afterAll(() => {
        console.log(deck);
    });
});