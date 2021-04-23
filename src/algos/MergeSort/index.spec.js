import { merge } from "./index";

describe("merge", () => {
    it("returns empty array when received empty array", () => {
        expect(merge([])).toEqual([]);
    });

    it("corectly sorts array of two items", () => {
        expect(merge([1, 2])).toEqual([1, 2]);
        expect(merge([2, 1])).toEqual([1, 2]);
    });

    it("correctly sorts multiple items without duplicates", () => {
        expect(merge([2, 10, 3, 4])).toEqual([2, 3, 4, 10]);
        expect(merge([5, 6,1, 3, 8, 2])).toEqual([1, 2, 3, 5,6,8]);
        expect(merge([3, 4, 7, 1, 2, 6])).toEqual([1, 2, 3, 4, 6, 7]);
        expect(merge([3, 4, 7, 1, 2, 4])).toEqual([1, 2, 3, 4, 4, 7]);
    });

    it("correctly sorts multiple items with duplicated", () => {
        expect(merge([3, 4, 7, 1, 2, 4, 0])).toEqual([0, 1, 2, 3, 4, 4, 7]);
    });
});