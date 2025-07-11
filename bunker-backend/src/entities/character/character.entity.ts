import { Injectable } from "@nestjs/common";
import {
    AdditionalInfo,
    Health,
    Hobby,
    HumanQuality,
    Luggage,
    Phobia,
    Profession,
    SpecialEvent,
} from "../card";

/**
 * Персонаж и его характеристики
 */
export class Character {
    /**
     * @param name Имя персонажа
     * @param surname Фамилия персонажа
     * @param profession Профессия персонажа
     * @param health Состояние здоровья персонажа
     * @param hobby Хобби персонажа
     * @param humanQuality Человеческое качество персонажа
     * @param phobia Фобия персонажа
     * @param additionalInfo Дополнительная информация о персонаже
     * @param luggage Багаж, который есть у персонажа
     * @param specialEvents Список особых событий, относящихся к персонажу
     */
    constructor(
        name: string,
        surname: string,
        profession: Profession,
        health: Health,
        hobby: Hobby,
        humanQuality: HumanQuality,
        phobia: Phobia,
        additionalInfo: AdditionalInfo,
        luggage: Luggage,
        specialEvents: SpecialEvent[],
    ) {
        this.name = name;
        this.surname = surname;
        this.profession = profession;
        this.health = health;
        this.hobby = hobby;
        this.humanQuality = humanQuality;
        this.phobia = phobia;
        this.additionalInformation = additionalInfo;
        this.luggage = luggage;
        this.specialEvent = specialEvents;
    }

    /** Имя персонажа */
    name: string;

    /** Фамилия персонажа */
    surname: string;

    /** Профессия персонажа */
    profession: Profession;

    /** Состояние здоровья персонажа */
    health: Health;

    /** Хобби персонажа */
    hobby: Hobby;

    /** Человеческое качество персонажа */
    humanQuality: HumanQuality;

    /** Фобия персонажа */
    phobia: Phobia;

    /** Дополнительная информация о персонаже */
    additionalInformation: AdditionalInfo;

    /** Багаж персонажа */
    luggage: Luggage;

    /** Особые события, связанные с персонажем */
    specialEvent: SpecialEvent[];
}
