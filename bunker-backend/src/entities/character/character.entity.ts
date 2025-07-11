import {Injectable} from "@nestjs/common";
import {AdditionalInfo, Health, Hobby, HumanQuality, Luggage, Phoby, Profession, SpecialEvent} from "../card";

@Injectable()
export class Character {
    profession: Profession;

    health: Health;

    hobby: Hobby;

    humanQuality: HumanQuality;

    phoby: Phoby;

    additionalInformation: AdditionalInfo;

    luggage: Luggage;

    specialEvent: SpecialEvent;
}