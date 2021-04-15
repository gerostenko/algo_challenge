export function isPalindrome(word) {
    if(word.length === 1) return true;
    let result = false;
    for (let i = word.length-1; i >= word.length / 2; i--) {
      if (word[i] === word[(word.length -1) - i])
        result = true;
        else {
            result = false;
            break;
        }
    }
    return result;
}

export function longestPalindromicSubstring(string){
    if(string.length === 1) return string;

    const stringToArray = Array.from(string);
    const basePalindrome = [];

    stringToArray.forEach((char, index) => {
        const nextChar = stringToArray[index + 1];
        const inOneChar = stringToArray[index + 2];
        if(char === nextChar) basePalindrome.push({string: char + nextChar, index});
        if(char === inOneChar) basePalindrome.push({string: char + nextChar + inOneChar, index});
    });

    if(basePalindrome.length === 0) return stringToArray[0];

    let longestPalindrome = basePalindrome[0].string;

    basePalindrome.forEach(palindromeObj => {
        let currentPalindrome = palindromeObj.string;
        if(currentPalindrome.length > longestPalindrome.length) longestPalindrome = currentPalindrome;
            let charEndIndex = palindromeObj.index + currentPalindrome.length - 1;
            for(let i = palindromeObj.index; i > 0; i--) {
                charEndIndex++;
                const charBefore = stringToArray[i - 1];
                const charAfter = stringToArray[charEndIndex];
                if(charAfter === undefined) {
                    if(longestPalindrome.length < currentPalindrome.length) {
                        longestPalindrome = currentPalindrome;
                    }
                    break;
                }
                if(charBefore !== charAfter) break;
                if(charBefore === charAfter) {
                    currentPalindrome = charBefore + currentPalindrome + charAfter;
                    if(longestPalindrome.length < currentPalindrome.length) {
                        longestPalindrome = currentPalindrome;
                    }
                }
            }
    });

    return longestPalindrome;
}