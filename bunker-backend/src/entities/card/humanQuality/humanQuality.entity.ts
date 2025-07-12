import {BaseCard} from "../index";
import {randomFrom} from "../../../utils";
import {HUMAN_QUALITY} from "./humanQuality.constants";

export class HumanQuality extends BaseCard {
    constructor() {
        super(randomFrom(HUMAN_QUALITY))
    }
}