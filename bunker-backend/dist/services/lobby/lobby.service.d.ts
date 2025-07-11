import { Lobby, Player } from "../../entities";
import { CreateLobbyDTO } from "../../handlers";
export declare class LobbyService {
    private lobbies;
    createLobby(dto: CreateLobbyDTO): Lobby;
    getLobby(id: string): Lobby | undefined;
    listLobbies(): Lobby[];
    joinLobby(lobbyId: string, player: Player): Lobby;
}
