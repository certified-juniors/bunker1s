import { LOBBY_STATE } from "./lobbyState.enum";
import { Player } from "../player";
export declare class Lobby {
    id: string;
    hostName: string;
    players: Player[];
    state: LOBBY_STATE;
    constructor(partial: Partial<Lobby>);
}
