"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyController = void 0;
const common_1 = require("@nestjs/common");
const lobby_dto_1 = require("./lobby.dto");
const entities_1 = require("../../entities");
const services_1 = require("../../services");
let LobbyController = class LobbyController {
    lobbyService;
    constructor(lobbyService) {
        this.lobbyService = lobbyService;
    }
    create(dto) {
        return this.lobbyService.createLobby(dto);
    }
    list() {
        return this.lobbyService.listLobbies();
    }
    get(id) {
        return this.lobbyService.getLobby(id);
    }
    joinLobby(id, player) {
        return this.lobbyService.joinLobby(id, player);
    }
};
exports.LobbyController = LobbyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lobby_dto_1.CreateLobbyDTO]),
    __metadata("design:returntype", entities_1.Lobby)
], LobbyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], LobbyController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], LobbyController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(':id/join'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('player')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entities_1.Player]),
    __metadata("design:returntype", void 0)
], LobbyController.prototype, "joinLobby", null);
exports.LobbyController = LobbyController = __decorate([
    (0, common_1.Controller)('lobby'),
    __metadata("design:paramtypes", [services_1.LobbyService])
], LobbyController);
//# sourceMappingURL=lobby.controller.js.map