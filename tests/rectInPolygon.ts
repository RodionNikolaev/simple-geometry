import { expect } from "chai";
import { Point } from "../src";
import getRectForPolygon from "../src/rectInPolygon";

describe("getRectForPolygon", () => {
    it("should return rect", () => {

        let polygon = [
            new Point(0, 100),
            new Point(100, 0),
            new Point(200, 100),
            new Point(160, 200),
            new Point(30, 200),
            new Point(0, 100),
        ];
        
        var res = getRectForPolygon(polygon);

        expect(res).length(5);
    });
});
