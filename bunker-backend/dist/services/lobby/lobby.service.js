"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../entities");
const crypto_1 = require("crypto");
let LobbyService = class LobbyService {
    lobbies = new Map();
    createLobby(dto) {
        const lobby = new entities_1.Lobby({
            id: (0, crypto_1.randomUUID)(),
            hostName: dto.hostName,
        });
        this.lobbies.set(lobby.id, lobby);
        return lobby;
    }
    getLobby(id) {
        return this.lobbies.get(id);
    }
    listLobbies() {
        return Array.from(this.lobbies.values()).filter(lobby => lobby.state === entities_1.LOBBY_STATE.WAITING);
    }
    joinLobby(lobbyId, player) {
        const lobby = this.lobbies.get(lobbyId);
        if (!lobby) {
            throw new common_1.NotFoundException(`Лобби с ID ${lobbyId} не найдено`);
        }
        if (lobby.players.includes(player)) {
            throw new common_1.BadRequestException(`Игрок с ${player.name} already in lobby`);
        }
        lobby.players.push(player);
        return lobby;
    }
};
exports.LobbyService = LobbyService;
exports.LobbyService = LobbyService = __decorate([
    (0, common_1.Injectable)()
], LobbyService);
//# sourceMappingURL=lobby.service.js.map