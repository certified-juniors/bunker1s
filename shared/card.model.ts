import Chac from "./chac.model";

export default interface Card {
    type: Chac;
    prefix: string; // П З Б Х
    name: string; // Агроном
    isopen: boolean;
};