import { CreateLobbyDTO } from "./lobby.dto";
import { Lobby, Player } from '../../entities';
import { LobbyService } from "../../services";
export declare class LobbyController {
    private readonly lobbyService;
    constructor(lobbyService: LobbyService);
    create(dto: CreateLobbyDTO): Lobby;
    list(): Lobby[];
    get(id: string): Lobby | undefined;
    joinLobby(id: string, player: Player): Lobby;
}
