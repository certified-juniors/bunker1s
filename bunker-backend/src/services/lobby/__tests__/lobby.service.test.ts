import {LobbyService} from "../lobby.service";
import {LOBBY_STATE, Player} from "../../../entities";

describe('LobbyService', () => {
    let service: LobbyService;

    beforeEach(() => {
        service = new LobbyService();
    });

    it("should create a new lobby", () => {
        const lobby = service.createLobby({
            hostName: "Host",
            lobbyName: "Lobby Name",
        })

        expect(lobby.hostName).toBe("Host");
        expect(lobby.state).toBe(LOBBY_STATE.WAITING);
        expect(lobby.players.length).toBe(0);
    });

    it("should allow player to join lobby", () => {
        const lobby = service.createLobby({hostName: "Host", lobbyName: "Lobby Name"});
        const updatedLobby = service.joinLobby(lobby.id, new Player({ name: "John Doe" }));

        expect(updatedLobby.players.length).toBe(1);
        expect(updatedLobby.players[0].name).toBe("John Doe");
    })

    it("should throw error when joining nonexistent lobby", () => {
        expect(() => service.joinLobby('123', new Player({ name: "John Doe" }))).toThrow();
    })
})