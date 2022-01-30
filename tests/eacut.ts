import { expect } from "chai";
import { describe, it } from "mocha";
import { earcut } from "../src/earcut";


describe("eacut", () => {
    it("should return 20", () => {
        let data = earcut([10, 0, 0, 50, 60, 60, 70, 10]);       
        expect(data).to.deep.equal([1, 0, 3, 3, 2, 1]);
    });
});
