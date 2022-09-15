import Lobby from "../../client/shared/lobby.model";
import { MyServer, MySocket } from "../types";
import { CardDeck, ConditionsDeck, getCardDeck, getConditions } from "../utils/spreadsheet.util";
import Chac from "../../client/shared/general/chac.model";
import Player from "../../client/shared/general/player.model";
import Conditions from "../../client/shared/general/conditions.model";

class GameService {
    private deck: CardDeck | undefined;
    private conditions: ConditionsDeck | undefined;
    private games: { [key: string]: Game } = {};
    public getGame(id: string): Game | undefined {
        return this.games[id];
    }
    public startGame(io: MyServer, socket: MySocket, lobby: Lobby) {
        this.games[lobby.id!] = new Game(io, lobby, this.getShuffledDeck(this.deck!), this.getShuffledConditions(this.conditions!));
    }
    constructor() {
        getCardDeck().then((deck) => {
            this.deck = deck;
        });
        getConditions().then((conditions) => {
            this.conditions = conditions;
        });
    }
    private getShuffledDeck(deck: CardDeck): CardDeck {
        const result: CardDeck = {
            job: shuffle(deck.job),
            health: shuffle(deck.health),
            hobby: shuffle(deck.hobby),
            quality: shuffle(deck.quality),
            phobia: shuffle(deck.phobia),
            info: shuffle(deck.info),
            baggage: shuffle(deck.baggage),
            speccards: shuffle(deck.speccards),
        };
        return result;
    }
    private getShuffledConditions(conditions: ConditionsDeck): ConditionsDeck {
        const result: ConditionsDeck = {
            cataclysms: shuffle(conditions.cataclysms),
            when_outsides: shuffle(conditions.when_outsides),
            pos_to_find_someones: shuffle(conditions.pos_to_find_someones),
            destructions: shuffle(conditions.destructions),
            sizes: shuffle(conditions.sizes),
            places: shuffle(conditions.places),
        }
        return result;
    }
}

class Game {
    lobby: Lobby;
    conditions: Conditions;
    constructor(io: MyServer, lobby: Lobby, deck: CardDeck, conditions: ConditionsDeck) {
        this.lobby = lobby;
        lobby.players = shuffle(lobby.players!);
        lobby.players.forEach((player) => {
            this.distributeCards(player, deck);
        });
        this.conditions = this.generateConditions(conditions);
        //TODO implement options
        io.to(lobby.id!).emit('new_game', lobby);
    }
    private generateConditions(conditions: ConditionsDeck) : Conditions {
        const result: Conditions = {
            cataclysm: conditions.cataclysms.pop(),
            when_outside: conditions.when_outsides.pop(),
            pos_to_find_someone: conditions.pos_to_find_someones.pop(),
            destruction: conditions.destructions.pop(),
            size: conditions.sizes.pop(),
            places: function() : number {
                const roll = Math.floor(Math.random() * 100);
                if (roll < 10) {
                    return 0;
                } else if (roll < 60) {
                    return 1;
                } else if (roll < 90) {
                    return 2;
                }
                return 3;
            }(),
            specrooms: [] as string[],
            added: [] as string[],
        }
        for (let i = 0; i < result.places!; i++) {
            result.specrooms!.push(conditions.places.pop()!);
        }
        return result;
    }
    private distributeCards(player: Player, deck: CardDeck) : void {
        player[Chac.JOB] = deck.job.pop();
        player[Chac.HEALTH] = deck.health.pop();
        player[Chac.HOBBY] = deck.hobby.pop();
        player[Chac.QUALITY] = deck.quality.pop();
        player[Chac.PHOBIA] = deck.phobia.pop();
        player[Chac.INFO] = deck.info.pop();
        player[Chac.BAGGAGE] = deck.baggage.pop();
        player.speccard1 = deck.speccards.pop();
        player.speccard2 = deck.speccards.pop();
    }
}

function shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}


export default new GameService();