export default function isPalindrome(word) {
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