import { isPalindrome, longestPalindromicSubstring } from "./index";

describe("isPalindrome", () => {
    it("returns true if string is a palindrome", () => {
        expect(isPalindrome("  ")).toEqual(true);
        expect(isPalindrome(" a ")).toEqual(true);
        expect(isPalindrome("a")).toEqual(true);
        expect(isPalindrome("kayak")).toEqual(true);
        expect(isPalindrome("abba")).toEqual(true);
    });

    it("returns false if string is not a palindrome", () => {
        expect(isPalindrome(" ty")).toEqual(false);
        expect(isPalindrome("regular word")).toEqual(false);
    });
});

describe("longestPalindromicSubstring", () => {
    it("correctly treats base cases", () => {
        expect(longestPalindromicSubstring("babad")).toEqual("bab");
        expect(longestPalindromicSubstring("cbbd")).toEqual("bb");
        expect(longestPalindromicSubstring("a")).toEqual("a");
        expect(longestPalindromicSubstring("ac")).toEqual("a");
    });

    it("longer cases are treated correctly", () => {

        expect(longestPalindromicSubstring("wetbkayakbdee")).toEqual("bkayakb");
        expect(longestPalindromicSubstring("1234wetbkayakbdee")).toEqual("bkayakb");
        expect(longestPalindromicSubstring("wetbkayakbdeetyrkayakn")).toEqual("bkayakb");
        expect(longestPalindromicSubstring("wetbkayakbdeetyrkayaknkayak")).toEqual("kayaknkayak");
        expect(longestPalindromicSubstring("wetbkayakbdeetyrkayaknnkayak")).toEqual("kayaknnkayak");
        expect(longestPalindromicSubstring("wetbkayakbdeetyrkayaknykayak")).toEqual("bkayakb");
    });

    it("more cases to test", () => {
        expect(longestPalindromicSubstring("aacabdkacaa")).toEqual("aca");
    });
});