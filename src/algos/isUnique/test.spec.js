import isUnique from "./index";

describe("isUnique", () => {
    it("returns true if string is unique", () => {
        expect(isUnique("")).toEqual(true);
        expect(isUnique(" ")).toEqual(true);
        expect(isUnique("abcgekl;")).toEqual(true);
        expect(isUnique("`1234567890-=qwertyuiop[]\asdfghjkl;'zxcvbnm,./")).toEqual(true);
    });

    it("return false if string is not unique", () => {
        expect(isUnique("  ")).toEqual(false);
        expect(isUnique("aaa")).toEqual(false);
        expect(isUnique("asdfghjkl;'qwertyuiop[]zxcvbnm,./12345657890")).toEqual(false);
    });
});