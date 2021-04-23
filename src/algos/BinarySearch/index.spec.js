import { binarySearch, binarySearchRecursive } from "./index";

[
    [ "binarySearch", binarySearch ],
    [ "binarySearchRecursive", binarySearchRecursive ]
].forEach((array) => {
    describe(array[0], () => {
        const binarySearchFunc = array[1];
        it("returns -1 if the target item is not in the array", () => {
            expect(binarySearchFunc([], 8)).toEqual(-1);
            expect(binarySearchFunc([1, 2], 8)).toEqual(-1);
        });
        it("correctly finds items in arrays", () => {
            let array = Array.from(Array(10).keys())
            expect(binarySearchFunc(array, 8)).toEqual(8);

            array = Array.from(Array(11).keys())
            expect(binarySearchFunc(array, 5)).toEqual(5);
            expect(binarySearchFunc(array, 10)).toEqual(10);
            expect(binarySearchFunc(array, 0)).toEqual(0);
        });
    });
});