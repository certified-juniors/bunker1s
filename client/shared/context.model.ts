import Lobby, { GameState } from "./lobby.model";
import Player from "./player.model";

export default interface Context {
    player: Player; // Пользователь, получающий контекст (видит свои характеристики)
    game_state: GameState; // Состояние игры
    lobby: Lobby; // Лобби, в котором находится пользователь
    
}

