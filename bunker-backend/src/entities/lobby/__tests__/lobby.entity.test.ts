import {Lobby} from "../lobby.entity";
import {Player} from "../../player";
import {LOBBY_STATE} from "../lobbyState.enum";

describe('Lobby entity', () => {
    it("should create a Lobby instance with correct properties", () => {
        const lobby = new Lobby({
            id: '123',
            hostName: 'host',
            players: [new Player({name: 'John Doe'}), new Player({name: 'David Johnson'})],
            state: LOBBY_STATE.WAITING,
        });

        expect(lobby.id).toBe('123');
        expect(lobby.hostName).toBe('host');
        expect(lobby.players.length).toBe(2);
        expect(lobby.players).toEqual([new Player({name: 'John Doe'}), new Player({name: 'David Johnson'})]);
        expect(lobby.state).toBe(LOBBY_STATE.WAITING);
    })

    it("should add player to players list", () => {
        const lobby = new Lobby({ id: '1', hostName: 'host', players: [new Player({name: 'John Doe'})] });
        lobby.players.push(new Player({name: 'David Johnson'}));

        expect(lobby.players.length).toBe(2);
    })
})