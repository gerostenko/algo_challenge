import twoSum from "./index";

describe("twoSum", () => {
    it("correctly detects indexes of a pair of numbers that match the target when added", () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
        expect(twoSum([3,2,4], 6)).toEqual([1,2]);
        expect(twoSum([3,3], 6)).toEqual([0, 1]);
    });
    it("treats correctly zero as a target and values from nums array", () => {
        expect(twoSum([0,4,3,0], 0)).toEqual([0,3]);
    });
});