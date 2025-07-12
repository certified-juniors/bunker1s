import {BaseCard} from "../index";
import {randomFrom} from "../../../utils";
import {PHOBIAS} from "./phobia.constants";

export class Phobia extends BaseCard {
    constructor() {
        super(randomFrom(PHOBIAS))
    }
}