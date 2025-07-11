import {BadRequestException, Injectable, NotFoundException} from "@nestjs/common";
import {Lobby, LOBBY_STATE, Player} from "../../entities";
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

    joinLobby(lobbyId: string, player: Player): Lobby {
        const lobby = this.lobbies.get(lobbyId);

        if (!lobby) {
            throw new NotFoundException(`Лобби с ID ${lobbyId} не найдено`);
        }

        if (lobby.players.includes(player)) {
            throw new BadRequestException(`Игрок с ${player.name} already in lobby`);
        }

        lobby.players.push(player);

        return lobby;
    }
}