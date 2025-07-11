import {Injectable} from "@nestjs/common";

@Injectable()
export class Bunker {
    // Описание катастрофы
    description: string;

    // Вместимость бункера
    capacity: number;

    // Площадь бункера в кв. м
    area: number;

    // Выход на поверхность
    exitIn?: number;

    // Вероятность встретить человека
    probabilityToMeetHuman?: number;

    // Разрушенность поверхности
    surfaceDestroyment?: number;

    // Особые комнаты
    specialRooms?: string[];
}
