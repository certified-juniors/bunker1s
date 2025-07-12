import {BaseCard} from "../index";
import {randomFrom} from "../../../utils";
import {HEALTH} from "./health.contants";

export class Health extends BaseCard {
    constructor() {
        super(randomFrom(HEALTH))
    }
}