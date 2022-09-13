import Lobby, { GameState } from "./lobby.model";
import Player from "./general/player.model";
import Discussion from "./game_events/discussion.model";
import Explanation from "./game_events/explanation.model";
import Results from "./game_events/results.model";
import Voting from "./game_events/voting.model";

export default interface Context {
    player: Player; // Пользователь, получающий контекст (видит свои характеристики)
    game_state: GameState; // Состояние игры
    lobby: Lobby; // Лобби, в котором находится пользователь
    who_is_current?: Player; // Текущий игрок (game_state === GAME)
    discussion?: Discussion; // Если балаган (game_state === DISCUSSION)
    explanation?: Explanation // Если идет оправдывание (game_state === EXPLANATION)
    voting?: Voting; // Если идет голосование (game_state === VOTING)
    results?: Results; // Если идет подведение итогов (game_state === RESULTS)
    before_game?: boolean; // Если игра еще не началась (не все нажали ready_to_fight)
}

