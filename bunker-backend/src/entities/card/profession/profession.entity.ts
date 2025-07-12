import {BaseCard} from "../index";
import {PROFESSIONS} from "./profession.constants";
import {randomFrom} from "../../../utils";

export class Profession extends BaseCard {
    constructor() {
        super(randomFrom(PROFESSIONS));
    }
}