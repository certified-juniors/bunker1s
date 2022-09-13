import Player from "./player.model";

export default interface Voting {
    players: Player[]; // Список игроков на голосование
    time_for_vote: number; // Время на голосование в секундах
    time_for_revote: number; // Время на переголосование в секундах
}
