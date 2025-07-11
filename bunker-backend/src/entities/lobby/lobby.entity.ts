import { LOBBY_STATE } from "./lobbyState.enum";
import {Player} from "../player";

/**
 * Класс, описывающий игровое лобби.
 */
export class Lobby {
    /** Уникальный идентификатор лобби */
    id: string;

    /** Имя хозяина (создателя) лобби */
    hostName: string;

    /** Список имён игроков, находящихся в лобби */
    players: Player[] = [];

    /** Текущее состояние лобби */
    state: LOBBY_STATE = LOBBY_STATE.WAITING;

    /**
     * Создаёт новый экземпляр лобби, инициализируя поля из partial объекта.
     * @param partial - объект с начальными значениями для полей лобби
     */
    constructor(partial: Partial<Lobby>) {
        Object.assign(this, partial);
    }
}
