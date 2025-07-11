/**
 * Класс, описывающий игрока
 */
export class Player {
    /** Имя игрока (никнейм) */
    name: string;

    /** Флаг, указывающий, является ли игрок хозяином лобби */
    isHost: boolean = false;

    /**
     * Создает новый экземпляр игрока
     * @param partial - объект с начальными значениями для полей игрока
     */
    constructor(partial: Partial<Player>) {
        Object.assign(this, partial);
    }
}