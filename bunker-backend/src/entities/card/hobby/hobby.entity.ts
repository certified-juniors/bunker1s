import {BaseCard} from "../index";
import {randomFrom} from "../../../utils";
import {HOBBIES} from "./hobby.constants";

export class Hobby extends BaseCard {
    constructor() {
        super(randomFrom(HOBBIES))
    }
}