import { quickSortRecursive } from "./index";

describe("quickSortRecursive", () => {
    it("test", () => {
        const array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
        const sortedArray = [-4, -2, 0, 1, 2, 4, 5,6,7];
        quickSortRecursive(array);
        expect(sortedArray).toEqual(array);
    });
});