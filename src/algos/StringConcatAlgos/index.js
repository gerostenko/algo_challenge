/*
Task 1
Given an array of strings like this:

['P>E', 'E>R', 'R>U']

where each element indicates the order and adjacency of two letters, implement a function spellWord() that would return 'PERU' for the above input.
The following input should also return 'PERU'

['E>R', 'P>E', 'R>U']

The following input should return 'HUNGARY'

['R>Y','U>N','G>A','N>G','H>U','A>R']
*/

export const spellWord = (charArr) => {

    const firtsPart = charArr.find(mainStr => {
       const firstChar = mainStr[0];

      const doesExistAsLastChar = !charArr.find(s => s[s.length - 1] === firstChar);
      return doesExistAsLastChar;

    });

    let result = firtsPart[0] + firtsPart[firtsPart.length - 1];

    let currentChar = firtsPart[firtsPart.length - 1];


    while(currentChar){
      const startWith = charArr.find(str => str.startsWith(currentChar));
      if(startWith) {
         result += startWith[startWith.length - 1];
        currentChar = startWith[startWith.length - 1];
      } else {
         break;
      }

    }

    return result;
  };

//   console.log(spellWord(['P>E', 'E>R', 'R>U']))
//   console.log(spellWord( ['E>R', 'P>E', 'R>U']));
//   console.log(spellWord(['R>Y','U>N','G>A','N>G','H>U','A>R']));

/**
 * Task 2
 * Write two fucntions. One returns a string from a predetrmined array. Strings might contain a new line character
 * anywhere in any string. Make function update the index of array on each call.
 *
 * Another function should call the first one and on ever call return a string up to a new line character.
 */

 const s3next = (() => {
    const MOCK_DATA = ["asdfad\nd","asidufha", "kkkkkkkkkkkkk\nfasdf"];
    let currentIndex = 0;
    return () => {
      if(currentIndex === MOCK_DATA.length) return "";
      return MOCK_DATA[currentIndex++];
    };
  })();

  const next = (() => {
    let accumStr = "";
    const SEPARATOR = "\n";

    return () => {

      let raw = s3next();
      let result = "";
      // console.log(raw);
      while(!raw.includes(SEPARATOR) && raw !== ""){
        if(accumStr) {
          result += accumStr;
          accumStr += raw;
        }
        result += raw;
        raw = s3next();
      }

      if(raw.includes(SEPARATOR)) {
        const parsed = raw.split(SEPARATOR);
        result += parsed[0];
        accumStr += parsed[1];

      }
       // console.log(result);
      // accumStr = "";
      return result;
    };

  })();
