import {Injectable} from "@nestjs/common";
import {Lobby, LOBBY_STATE} from "../../entities";
import {CreateLobbyDTO} from "../../handlers";
import {randomUUID} from 'crypto';

@Injectable()
export class LobbyService {
    private lobbies = new Map<string, Lobby>();

    createLobby(dto: CreateLobbyDTO): Lobby {
        const lobby = new Lobby({
            id: randomUUID(),
            hostName: dto.hostName,
        })

        this.lobbies.set(lobby.id, lobby);
        return lobby;
    }

    getLobby(id: string): Lobby | undefined {
        return this.lobbies.get(id);
    }

    listLobbies(): Lobby[] {
        return Array.from(this.lobbies.values()).filter(lobby => lobby.state === LOBBY_STATE.WAITING)
    }
}