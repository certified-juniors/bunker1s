"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lobby_service_1 = require("../lobby.service");
const entities_1 = require("../../../entities");
describe('LobbyService', () => {
    let service;
    beforeEach(() => {
        service = new lobby_service_1.LobbyService();
    });
    it("should create a new lobby", () => {
        const lobby = service.createLobby({
            hostName: "Host",
            lobbyName: "Lobby Name",
        });
        expect(lobby.hostName).toBe("Host");
        expect(lobby.state).toBe(entities_1.LOBBY_STATE.WAITING);
        expect(lobby.players.length).toBe(0);
    });
    it("should allow player to join lobby", () => {
        const lobby = service.createLobby({ hostName: "Host", lobbyName: "Lobby Name" });
        const updatedLobby = service.joinLobby(lobby.id, new entities_1.Player({ name: "John Doe" }));
        expect(updatedLobby.players.length).toBe(1);
        expect(updatedLobby.players[0].name).toBe("John Doe");
    });
    it("should throw error when joining nonexistent lobby", () => {
        expect(() => service.joinLobby('123', new entities_1.Player({ name: "John Doe" }))).toThrow();
    });
});
//# sourceMappingURL=lobby.service.test.js.map