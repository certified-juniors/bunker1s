import { getConditions, ConditionsDeck } from "./spreadsheet.util";

describe("getConditions", () => {
    let conditions: ConditionsDeck;
    beforeAll(async () => {
        conditions = await getConditions();
    });
    it("should have at least 2 cataclysms", () => {
        expect(conditions.cataclysms.length).toBeGreaterThanOrEqual(2);
    });
    it("should have at least 2 when_outsides", () => {
        expect(conditions.when_outsides.length).toBeGreaterThanOrEqual(2);
    });
    it("should have at least 2 pos_to_find_someones", () => {
        expect(conditions.pos_to_find_someones.length).toBeGreaterThanOrEqual(2);
    });
    it("should have at least 2 destructions", () => {
        expect(conditions.destructions.length).toBeGreaterThanOrEqual(2);
    });
    it("should have at least 2 sizes", () => {
        expect(conditions.sizes.length).toBeGreaterThanOrEqual(2);
    });
    it("should have at least 2 places", () => {
        expect(conditions.places.length).toBeGreaterThanOrEqual(2);
    });
});