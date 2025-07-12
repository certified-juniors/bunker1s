import {BaseCard} from "../index";
import {randomFrom} from "../../../utils";
import {ADDITIONAL_INFO} from "./additionalInfo.constants";

export class AdditionalInfo extends BaseCard {
    constructor(name: string) {
        super(randomFrom(ADDITIONAL_INFO))
    }
}