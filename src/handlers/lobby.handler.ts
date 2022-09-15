import { MyServer, MySocket } from "../types";
import lobbyService from "../services/lobby.service";
import Lobby from "../../client/shared/lobby.model";

export default function lobbyHandlers(io: MyServer, socket: MySocket) {
    socket.on('create_lobby', (nickname: string, lobby: Lobby) => {
        lobbyService.createLobby(socket, nickname, lobby);
    });
    socket.on('get_lobby_list', () => {
        socket.emit('lobby_list', lobbyService.getLobbyList());
    });
    socket.on('join_lobby', (nickname: string, lobbyId: string, password: string | null) => {
        lobbyService.joinLobby(socket, io, nickname, lobbyId, password);
    });
    socket.on('leave_lobby', () => {
        lobbyService.leaveLobby(socket, io);
    });
    socket.on('switch_ready', () => {
        lobbyService.switchReady(socket, io);
    });
}