import {BaseCard} from "../index";
import {LUGGAGE} from "./luggage.constants";
import {randomFrom} from "../../../utils";

export class Luggage extends BaseCard {
    constructor() {
        super(randomFrom(LUGGAGE))
    }
}