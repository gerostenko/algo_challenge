import { binarySearch } from "./index";

describe("binarySearch", () => {
    it("returns -1 if the target item is not in the array", () => {
        expect(binarySearch([], 8)).toEqual(-1);
        expect(binarySearch([1, 2], 8)).toEqual(-1);
    });
    it("correctly finds items in arrays", () => {
        let array = Array.from(Array(10).keys())
        expect(binarySearch(array, 8)).toEqual(8);

        array = Array.from(Array(11).keys())
        expect(binarySearch(array, 5)).toEqual(5);
        expect(binarySearch(array, 10)).toEqual(10);
        expect(binarySearch(array, 0)).toEqual(0);
    });
});