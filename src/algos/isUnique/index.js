export default function isUnique(word){
    let chars = '';
    //there are 256 characters in extended ASCII
  if (word.length > 256)
      return false;

  for (let char of word) {
      if(chars.indexOf(char) > -1) {
          return false;
      }
      chars += char;
  }

  return true;
};