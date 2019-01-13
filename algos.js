//Determine if a word is a palindrome

function isPalindrome(word) {
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

console.log(isPalindrome('kayak'));

//Determine if a string has all unique characters (ASCII)

function isUnique(word) {
	let chars = '';
  let result = true;
	//there are 256 characters in extended ASCII
	if (word.length > 256)
  	return false;

	for (let i = 0; i < word.length; i++) {
  	if (chars.indexOf(word[i]) > -1) {
    	result = false;
      break;
    }
    else {
    	chars += word[i];
    }
  }
  	return result;
}

console.log(inUnique("asdfghjka"));