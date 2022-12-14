import { GoogleSpreadsheet } from 'google-spreadsheet';
import Card from '../../client/shared/general/card.model';
import SpecCard from '../../client/shared/general/speccard.model';
import Chac from '../../client/shared/general/chac.model';

const GOOGLE_SPREADSHEET_ID = "1rRKfvFjzKkI5rT6Q7vPANhn1NTAZ-7mPaCmoxgtmVu4";
const CREDENTIALS = require('./credentials.json');
const SPECCARD_COLUMN = 8;

function getPrefix(column: string): string {
    switch (Number(column)) {
        case Chac.JOB:
            return 'П';
        case Chac.HEALTH:
            return 'З';
        case Chac.HOBBY:
            return 'Х';
        case Chac.BAGGAGE:
            return 'Б';
        case Chac.INFO:
            return 'ДИ';
        case Chac.PHOBIA:
            return 'Ф';
        case Chac.QUALITY:
            return 'ЧК';
        default:
            return '';
    }
}

export interface CardDeck {
    job: Card[],
    health: Card[],
    hobby: Card[],
    quality: Card[],
    phobia: Card[],
    info: Card[],
    baggage: Card[],
    speccards: SpecCard[],
}

async function getCardDeck() : Promise<CardDeck> {
    const deck = {} as CardDeck;
    const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID);
    doc.useServiceAccountAuth(CREDENTIALS)
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells();
    for (let column in Object.values(Chac)) { // all except speccards
        if (Number(column) === Chac.BIO) continue;
        const cards = [] as Card[];
        for (let row = 1; row < sheet.rowCount; row++) {
            let cellValue = sheet.getCell(row, Number(column)).value;
            if (cellValue === null) break;
            const card = {
                isopen: false,
                prefix: getPrefix(column),
                type: Number(column) == Chac.INFO ? Chac.INFO :
                    Number(column) == Chac.QUALITY ? Chac.QUALITY :
                        Number(column) == Chac.PHOBIA ? Chac.PHOBIA :
                            Number(column) == Chac.BAGGAGE ? Chac.BAGGAGE :
                                Number(column) == Chac.HEALTH ? Chac.HEALTH :
                                    Number(column) == Chac.HOBBY ? Chac.HOBBY :
                                        Number(column) == Chac.JOB ? Chac.JOB : Chac.BIO,
                name: cellValue,
            } as Card;
            cards.push(card);
        }
        switch (Number(column)) {
            case Chac.JOB:
                deck.job = cards;
                break;
            case Chac.HEALTH:
                deck.health = cards;
                break;
            case Chac.HOBBY:
                deck.hobby = cards;
                break;
            case Chac.BAGGAGE:
                deck.baggage = cards;
                break;
            case Chac.INFO:
                deck.info = cards;
                break;
            case Chac.PHOBIA:
                deck.phobia = cards;
                break;
            case Chac.QUALITY:
                deck.quality = cards;
                break;
        }
    }
    const speccards = [] as SpecCard[];
    for (let row = 1; row < sheet.rowCount; row++) {
        let cellValue = sheet.getCell(row, SPECCARD_COLUMN).value;
        if (cellValue === null) break;
        const speccard = {
            id: row.toString(),
            used: false,
            name: cellValue,
        } as SpecCard;
        speccards.push(speccard);
    }
    deck.speccards = speccards;
    return deck;
};

export interface ConditionsDeck {
    cataclysms: string[];
    when_outsides: string[];
    pos_to_find_someones: string[];
    destructions: string[];
    sizes: string[];
    places: string[];
}

async function getConditions() : Promise<ConditionsDeck> {
    const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID);
    doc.useServiceAccountAuth(CREDENTIALS)
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    await sheet.loadCells();
    const res = {
        cataclysms: [] as string[],
        when_outsides: [] as string[],
        pos_to_find_someones: [] as string[],
        destructions: [] as string[],
        sizes: [] as string[],
        places: [] as string[],
    } as ConditionsDeck;
    for (let key = 0; key < Object.keys(res).length; key++) {
        for (let row = 1; row < sheet.rowCount; row++) {
            let cellValue = sheet.getCell(row, key).value;
            if (cellValue === null) break;
            res[Object.keys(res)[key] as keyof ConditionsDeck].push(cellValue.toString());
        }
    }
    return res;
}

export { getCardDeck, getConditions };

