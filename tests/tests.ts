import { expect } from "chai";
import { describe, it } from "mocha";
import { getLUT, lineLength, Point, Rect, round } from "../src/index";

let p0 = new Point(10, 20);
let p1 = new Point(30, 20);
let p2 = new Point(30, 30);
let p3 = new Point(10, 30);

describe("lineLength", () => {
    it("should return 20", () => expect(lineLength(p0, p1)).to.equal(20));
    it("should return 10", () => expect(lineLength(p1, p2)).to.equal(10));
});

describe("Rect", () => {
    it("should return {20, 10}", () => {
        let rect = new Rect(p0, p1, p2, p3);
        let { width, height } = rect;
        expect(width).to.equal(20);
        expect(height).equal(10);
    });
});

describe("round", () => {
    let point = new Point(20.554, 77.456);

    it("should return 20.55, 77.46", () => {
        expect(round(point.x, 2)).to.equal(20.55);
        expect(round(point.y, 2)).to.equal(77.46);
        expect(round(point, 2)).to.deep.equal({ x: 20.55, y: 77.46 });
    });
});

describe("getLUT", () => {
    it("should len 101", () => {
        let lut = getLUT([
            { x: 100, y: 25 },
            { x: 10, y: 90 },
            { x: 110, y: 100 },
            { x: 150, y: 195 },
        ]);

        expect(lut.length).to.equal(101);
    });
});
