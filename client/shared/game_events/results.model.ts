import Player from "../general/player.model";

export default interface Results {
    winners: Player[]; // Победители
    losers: Player[]; // Проигравшие
}