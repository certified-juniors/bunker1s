import {Injectable} from "@nestjs/common";
import {ADDITIONAL_INFO, HEALTH, HOBBY, HUMAN_QUALITY, LUGGAGE, PHOBY, PROFESSION, SPECIAL_EVENT} from "./card.enum";

@Injectable()
export class Card {
    readonly profession: PROFESSION;

    readonly health: HEALTH;

    readonly hobby: HOBBY;

    readonly humanQuality: HUMAN_QUALITY;

    readonly phoby: PHOBY;

    readonly additionalInformation: ADDITIONAL_INFO;

    readonly luggage: LUGGAGE;

    readonly specialEvent: SPECIAL_EVENT;
}