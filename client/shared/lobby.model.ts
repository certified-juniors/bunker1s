import Conditions from "./general/conditions.model";
import Player from "./general/player.model";

export default interface Lobby {
    id: string; // Код лобби, по которому можно подключиться
    name: string; // Название лобби, которое видит пользователь
    players?: Player[]; // Список игроков в лобби (в порядке очередности хода)
    game_state?: GameState; // Состояние игры
    password?: string; // Пароль для входа в лобби
    options?: (Conditions) & {
        time_to_open_card: number; // Время на открытие карты
        time_for_vote?: number; // Время на голосование в секундах default: 60
        time_for_revote?: number; // Время на переголосование в секундах default: 15
        time_for_results?: number; // Время на отображение результатов голосования default: 5
        time_for_discussion?: number; // Время на обсуждение в секундах default: 120
        time_for_explanation?: number; // Время на оправдываение в секундах default: 60
    }
}

export enum GameState {
    LOBBY = "LOBBY",
    GAME = "GAME",
    VOTING = "VOTING",
    DISCUSSION = "DISCUSSION",
    EXPLANATION = "EXPLANATION",
    RESULTS = "RESULTS"
}