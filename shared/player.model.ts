import Card from "./card.model";
import Chac from "./chac.model";
import SpecCard from "./speccard.model";

export default interface Player {
    nickname: string;
    lobbyid?: string;
    lobbyready?: boolean; // Готов ли игрок в лобби
    gameready?: boolean; // Готов ли игрок к игре
    disconnected?: boolean; // Отключился ли игрок
    [Chac.HEALTH]?: Card; // Карта здоровья
    [Chac.JOB]?: Card; // Карта профессии
    [Chac.HOBBY]?: Card; // Карта хобби
    [Chac.INFO]?: Card; // Карта информации
    [Chac.BAGGAGE]?: Card; // Карта багажа
    [Chac.BIO]?: Card; // Карта биологических характеристик
    [Chac.PHOBIA]?: Card; // Карта фобии
    [Chac.QUALITY]?: Card; // Карта человеческого качества
    speccard1?: SpecCard; // Спецкарта 1
    speccard2?: SpecCard; // Спецкарта 2
}