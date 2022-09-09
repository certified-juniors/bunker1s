import Conditions from "./conditions.model";
import Player from "./player.model";

export default interface Lobby {
    id: string; // Код лобби, по которому можно подключиться
    name: string; // Название лобби, которое видит пользователь
    players?: Player[]; // Список игроков в лобби
    game_state?: GameState; // Состояние игры
    password: string; // Пароль для входа в лобби
    options: (Conditions | undefined) & {
        time_for_vote?: number; // Время на голосование в секундах default: 60
        time_for_revote?: number; // Время на переголосование в секундах default: 15
        time_for_discussion?: number; // Время на обсуждение в секундах default: 120
        time_for_explanation?: number; // Время на оправдываение в секундах default: 60
    }
}

export enum GameState {
    LOBBY = "LOBBY",
    GAME = "GAME",
    VOTE = "VOTE",
    RE_VOTE = "RE_VOTE",
    DISCUSSION = "DISCUSSION",
    EXPLANATION = "EXPLANATION",
    END = "END"
}