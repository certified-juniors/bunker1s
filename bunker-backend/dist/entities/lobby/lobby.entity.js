"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lobby = void 0;
const lobbyState_enum_1 = require("./lobbyState.enum");
class Lobby {
    id;
    hostName;
    players = [];
    state = lobbyState_enum_1.LOBBY_STATE.WAITING;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.Lobby = Lobby;
//# sourceMappingURL=lobby.entity.js.map