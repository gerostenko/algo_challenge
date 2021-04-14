import isPalindrome from "./index";

describe("isPalindrome", () => {
    it("returns true if string is a palindrome", () => {
        expect(isPalindrome("  ")).toEqual(true);
        expect(isPalindrome(" a ")).toEqual(true);
        expect(isPalindrome("kayak")).toEqual(true);
    });

    it("return false if string is not a palindrome", () => {
        expect(isPalindrome(" ")).toEqual(false);
        expect(isPalindrome(" ty")).toEqual(false);
        expect(isPalindrome("regular word")).toEqual(false);
    });
});