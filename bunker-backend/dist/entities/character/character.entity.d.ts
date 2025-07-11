import { AdditionalInfo, Health, Hobby, HumanQuality, Luggage, Phobia, Profession, SpecialEvent } from "../card";
export declare class Character {
    constructor(name: string, surname: string, profession: Profession, health: Health, hobby: Hobby, humanQuality: HumanQuality, phobia: Phobia, additionalInfo: AdditionalInfo, luggage: Luggage, specialEvents: SpecialEvent[]);
    name: string;
    surname: string;
    profession: Profession;
    health: Health;
    hobby: Hobby;
    humanQuality: HumanQuality;
    phobia: Phobia;
    additionalInformation: AdditionalInfo;
    luggage: Luggage;
    specialEvent: SpecialEvent[];
}
