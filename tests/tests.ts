import { expect } from "chai";
import { describe, it } from "mocha";
import { lineLength, Point } from "..";

describe("linelength function", () => {
    it("should return 5", () => {
        let result = lineLength(new Point(0, 0), new Point(5, 0));
        expect(result).to.equal(5);
    });
});
