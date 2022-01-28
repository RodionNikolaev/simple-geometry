import { expect } from "chai";
import { describe, it } from "mocha";
import { lineLength, Point, Rect } from "..";

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
