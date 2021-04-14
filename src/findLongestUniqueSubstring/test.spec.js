import lengthOfLongestSubstring from "./index";

describe("lengthOfLongestSubstring", () => {
    it("correctly treats empty string", () => {
        expect(lengthOfLongestSubstring(" ")).toEqual(1);
    });

    it("correctly treats base cases", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
        expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
        expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
        expect(lengthOfLongestSubstring("")).toEqual(0);
    });

    it("correctly treats a string with all unique chars", () => {
        expect(lengthOfLongestSubstring("au")).toEqual(2);
    });

    it("detecs unique string as a second substring", () => {
        expect(lengthOfLongestSubstring("abb")).toEqual(2);
        expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
    });

    it("correctly detects unique string for longer cases", () => {
        expect(lengthOfLongestSubstring("anviaj")).toEqual(5);
    });
});