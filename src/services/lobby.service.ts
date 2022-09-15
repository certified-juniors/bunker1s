import Lobby from "../../client/shared/lobby.model";
import { ClientToServerEvents, ServerToClientEvents } from "../../client/shared/events.model";
import { MyServer, MySocket } from "../types";
import Player from "../../client/shared/general/player.model";
import gameService from "./game.service";

class LobbyService {
    private lobbies: { [id: string]: Lobby } = {};

    public getLobby(id: string): Lobby | undefined {
        return this.lobbies[id];
    }
    public createLobby(socket: MySocket, nickname: string, lobby: Lobby) {
        const lobbyId = this.generateLobbyId();
        lobby.id = lobbyId;
        lobby.players = []
        socket.data.nickname = nickname;
        lobby.players.push(socket.data as Player);
        this.lobbies[lobbyId] = lobby;
        socket.data.lobbyid = lobbyId;
        socket.join(lobbyId);
        socket.emit('new_lobby', this.lobbies[lobbyId]);
    }
    public getLobbyList() {
        // need to return only ids, names and players count and ispassword
        return Object.keys(this.lobbies).map((id) => {
            const lobby = this.lobbies[id];
            return {
                id,
                name: lobby.name,
                players: lobby.players?.length || 0,
                isPassword: !!lobby.password,
            };
        });
    }
    public joinLobby(socket: MySocket, io: MyServer, nickname: string, lobbyId: string, password: string | null) {
        console.log('joinLobby', nickname, lobbyId, password);
        console.log('lobbies', this.lobbies);
        const lobby = this.getLobby(lobbyId);
        
        if (!lobby) {
            socket.emit('errormsg', 'Лобби не найдено');
            return;
        }
        // Проверяем, что в лобби меньше 14 игроков
        if (lobby.players!.length >= 14) {
            socket.emit('errormsg', 'Лобби заполнено');
            return;
        }
        if (lobby.password && lobby.password !== password) {
            socket.emit('errormsg', 'Неверный пароль');
            return;
        }
        // Проверяем, что в лобби нет игрока с таким ником
        if (lobby.players?.find((player) => player.nickname === nickname)) {
            socket.emit('errormsg', 'Игрок с таким ником уже есть в лобби');
            return;
        }
        socket.data.nickname = nickname;
        socket.data.lobbyready = false;
        lobby.players!.push(socket.data as Player);
        socket.data.lobbyid = lobbyId;
        socket.join(lobbyId);
        io.to(lobbyId).emit('update_lobby', socket.data as Player);
        socket.emit('new_lobby', this.lobbies[lobbyId]);
    }
    public leaveLobby(socket: MySocket, io: MyServer) {
        const lobby = this.getLobby(socket.data.lobbyid!);
        if (!lobby) {
            return;
        }
        lobby.players = lobby.players?.filter((player) => player.nickname !== socket.data.nickname);
        io.to(socket.data.lobbyid!).emit('lobby_left', socket.data.nickname!);
        socket.leave(socket.data.lobbyid!);
        socket.data.lobbyid = undefined
        socket.data.nickname = undefined
        socket.data.lobbyready = false
        if (lobby.players?.length === 0) {
            delete this.lobbies[socket.data.lobbyid!];
        }
    }
    public switchReady(socket: MySocket, io: MyServer) {
        const lobby = this.getLobby(socket.data.lobbyid!);
        if (!lobby) return;
        const player = lobby.players?.find((player) => player.nickname === socket.data.nickname);
        if (!player) return;
        player.lobbyready = !player.lobbyready;
        socket.data.lobbyready = player.lobbyready;
        io.to(socket.data.lobbyid!).emit('update_lobby', player);
        if (lobby.players?.every((player) => player.lobbyready) && lobby.players!.length > 3) {
            gameService.startGame(io, socket, lobby);
        }
    }
    private generateLobbyId() : string {
        return Object.keys(this.lobbies).length.toString(6);
    }

}
export default new LobbyService();