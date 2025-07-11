"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bunker = void 0;
class Bunker {
    constructor(description, capacity, area, exitIn, probabilityToMeetHuman, surfaceDestroyment, specialRooms) {
        this.description = description;
        this.capacity = capacity;
        this.area = area;
        this.exitIn = exitIn;
        this.probabilityToMeetHuman = probabilityToMeetHuman;
        this.surfaceDestroyment = surfaceDestroyment;
        this.specialRooms = specialRooms;
    }
    description;
    capacity;
    area;
    exitIn;
    probabilityToMeetHuman;
    surfaceDestroyment;
    specialRooms;
}
exports.Bunker = Bunker;
//# sourceMappingURL=bunker.entity.js.map