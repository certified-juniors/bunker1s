import Player from "../general/player.model";

export default interface Voting { // Revoting same as Voting
    players: Player[]; // Список игроков на голосование
    time_for_vote: number; // Время на голосование в секундах
}
