// socket io events

import Context from "./context.model";
import Discussion from "./game_events/discussion.model";
import LogMsg from "./game_events/logmsg.model";
import Voting from "./game_events/voting.model";
import Card from "./general/card.model";
import Chac from "./general/chac.model";
import Conditions from "./general/conditions.model";
import Player from "./general/player.model";
import SpecCard from "./general/speccard.model";
import Lobby from "./lobby.model";
import { VotingResults } from "./game_events/voting.model";
import Explanation from "./game_events/explanation.model";
import Results from "./game_events/results.model";

interface ClientToServerEvents {
    // Должна вызываться при желании игрока переподключиться к лобби
    // Передает никнейм и лобби, в котором находится игрок
    check_me: (lobbyid: Lobby["id"], nickname: Player["nickname"]) => void;
    // Список лобби, вызовет ивент lobby_list
    get_lobby_list: () => void;
    // Вход в лобби
    join_lobby: (nickname: Player["nickname"], lobbyid: Lobby["id"], password: string | null) => void;
    // Создание лобби
    create_lobby: (nickname: Player["nickname"], lobby: Lobby) => void;
    // Выход из лобби
    leave_lobby: () => void;
    // Готовность в лобби
    switch_ready: () => void;
    // Готовность к началу игры
    ready_to_fight: () => void;
    // Открыть характеристику
    open_chac: (chac: Chac) => void;
    // Использовать спецкарту
    use_speccard: (cardid: SpecCard["id"]) => void;
    // Проголосовать за игрока (отправление по истечении времени)
    vote: (victim?: Player["nickname"]) => void;
    // Сообщить, что оправдался или закончил говорить
    im_done: () => void;
    // Хочу балаган (отправлять после того, как получил от сервера event "do_you_want_discussion")
    i_want_discussion: (b: boolean) => void;
}

interface ServerToClientEvents {
    // Сервер присылает контекст игры (все данные, которые нужны для отображения)
    new_context: (context: Context) => void;

    // Присылает сообщение об ошибке
    // Примеры ошибок:
    // 1. Переподключение не удалось (пользователь не найден)
    // 2. Не удалось войти в лобби (лобби не найдено)
    // 3. Не удалось создать лобби (лобби с таким id уже существует)
    errormsg: (msg: string) => void;
    
    // Лог действий
    logmsg: (logmsg: LogMsg) => void;
    
    // Сервер просит клиент подтвердить, что он хочет балаган
    do_you_want_discussion: () => void;

    // Сервер присылает новый лобби
    // Присылается при создании лобби, входе в лобби
    new_lobby: (lobby: Lobby) => void; 

    // Сервер присылает список лобби
    lobby_list: (lobbies: {
        id: Lobby["id"];
        name: Lobby["name"];
        players: number;
        isPassword: boolean;
    }[]) => void;
    // Обновление готовности одного из игроков
    // Присылается при изменении готовности игрока или новом игроке
    update_lobby: (player: Player) => void;

    lobby_left: (playerid: Player["nickname"]) => void;
    // Объявление старта игры
    new_game: (lobby: Lobby) => void;

    // Объявление о прочтении каждым игроком условий
    everyone_ready_to_fight: () => void;

    // Объявление об обновлении характеристики
    update_chac: (player: Player["nickname"], card: Card) => void;

    // Объявление о следующем ходе
    new_turn: (player: Player["nickname"], time_to_open_card: number) => void;

    // Игрок использовал спецкарту
    update_spec_card: (player: Player["nickname"], card: SpecCard) => void;

    // Балаган
    new_discussion: (discussion: Discussion) => void;

    // Начало голосования
    new_voting: (voting: Voting) => void;

    // Результаты голосования
    voting_result: (results: VotingResults) => void;
    
    // Оправдание
    new_explanation: (explanation: Explanation) => void;
    
    // Объявление об изгнании игрока
    update_kick: (player: Player["nickname"], kicked: boolean) => void;

    // Объявление о конце игры
    game_over: (results: Results) => void;

    // Обновить условия игры
    update_conditions: (conditions: Conditions) => void;

    // Игрок отключился
    player_disconnected: (player: Player["nickname"]) => void;

    // Игрок переподключился
    player_reconnected: (player: Player) => void;
}

export { ClientToServerEvents, ServerToClientEvents };