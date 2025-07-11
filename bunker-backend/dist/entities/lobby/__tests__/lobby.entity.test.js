"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lobby_entity_1 = require("../lobby.entity");
const player_1 = require("../../player");
const lobbyState_enum_1 = require("../lobbyState.enum");
describe('Lobby entity', () => {
    it("should create a Lobby instance with correct properties", () => {
        const lobby = new lobby_entity_1.Lobby({
            id: '123',
            hostName: 'host',
            players: [new player_1.Player({ name: 'John Doe' }), new player_1.Player({ name: 'David Johnson' })],
            state: lobbyState_enum_1.LOBBY_STATE.WAITING,
        });
        expect(lobby.id).toBe('123');
        expect(lobby.hostName).toBe('host');
        expect(lobby.players.length).toBe(2);
        expect(lobby.players).toEqual([new player_1.Player({ name: 'John Doe' }), new player_1.Player({ name: 'David Johnson' })]);
        expect(lobby.state).toBe(lobbyState_enum_1.LOBBY_STATE.WAITING);
    });
    it("should add player to players list", () => {
        const lobby = new lobby_entity_1.Lobby({ id: '1', hostName: 'host', players: [new player_1.Player({ name: 'John Doe' })] });
        lobby.players.push(new player_1.Player({ name: 'David Johnson' }));
        expect(lobby.players.length).toBe(2);
    });
});
//# sourceMappingURL=lobby.entity.test.js.map