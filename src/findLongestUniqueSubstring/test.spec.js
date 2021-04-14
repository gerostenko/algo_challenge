import findLongestUniqueSubstring from "./index";

describe("lengthOfLongestSubstring", () => {
    it("correctly treats empty string", () => {
        expect(findLongestUniqueSubstring(" ")).toEqual(1);
    });

    it("correctly treats base cases", () => {
        expect(findLongestUniqueSubstring("abcabcbb")).toEqual(3);
        expect(findLongestUniqueSubstring("bbbbb")).toEqual(1);
        expect(findLongestUniqueSubstring("pwwkew")).toEqual(3);
        expect(findLongestUniqueSubstring("")).toEqual(0);
    });

    it("correctly treats a string with all unique chars", () => {
        expect(findLongestUniqueSubstring("au")).toEqual(2);
    });

    it("detecs unique string as a second substring", () => {
        expect(findLongestUniqueSubstring("abb")).toEqual(2);
        expect(findLongestUniqueSubstring("dvdf")).toEqual(3);
    });

    it("correctly detects unique string for longer cases", () => {
        expect(findLongestUniqueSubstring("anviaj")).toEqual(5);
        expect(findLongestUniqueSubstring("aabaab!bb")).toEqual(3);
    });

});