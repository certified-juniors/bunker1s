import { Injectable } from "@nestjs/common";

/**
 * Бункер и его характеристики
 */
@Injectable()
export class Bunker {
    /**
     * @param description Описание катастрофы
     * @param capacity Вместимость бункера (количество человек)
     * @param area Площадь бункера в квадратных метрах
     * @param exitIn Через сколько месяцев можно выйти на поверхность (опционально)
     * @param probabilityToMeetHuman Вероятность встретить других людей на поверхности, %
     * @param surfaceDestroyment Уровень разрушенности поверхности, %
     * @param specialRooms Список особых комнат в бункере (опционально)
     */
    constructor(
        description: string,
        capacity: number,
        area: number,
        exitIn?: number,
        probabilityToMeetHuman?: number,
        surfaceDestroyment?: number,
        specialRooms?: string[],
    ) {
        this.description = description;
        this.capacity = capacity;
        this.area = area;
        this.exitIn = exitIn;
        this.probabilityToMeetHuman = probabilityToMeetHuman;
        this.surfaceDestroyment = surfaceDestroyment;
        this.specialRooms = specialRooms;
    }

    /** Описание катастрофы */
    description: string;

    /** Вместимость бункера (количество человек) */
    capacity: number;

    /** Площадь бункера в квадратных метрах */
    area: number;

    /** Через сколько месяцев можно выйти на поверхность (опционально) */
    exitIn?: number;

    /** Вероятность встретить других людей на поверхности, % (опционально) */
    probabilityToMeetHuman?: number;

    /** Уровень разрушенности поверхности, % (опционально) */
    surfaceDestroyment?: number;

    /** Особые комнаты в бункере (опционально) */
    specialRooms?: string[];
}
