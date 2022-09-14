import Player from "../general/player.model";

export default interface Voting { // Revoting same as Voting
    players: Player[]; // Список игроков на голосование
    time_for_vote: number; // Время на голосование в секундах
}

export interface VotingResults {
    who_against_who: { [key: Player["nickname"]]: string | null }; // Кто против кого
    outsiders: Player["nickname"][]; // Набравшие максимальное количество голосов
    time: number; // Время на отображение результатов голосования
}
