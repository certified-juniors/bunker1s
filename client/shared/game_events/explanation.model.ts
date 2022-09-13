import Player from "../general/player.model";

export default interface Explanation { 
    player: Player; // Игрок, который должен оправдаться
    time: number; // Время на оправдываение в секундах
}